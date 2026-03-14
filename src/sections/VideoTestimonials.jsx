import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const rawVideos = Array.from({ length: 6 }, (_, i) => `/Testimonial/${i + 1}.mp4`);
  const videos = [...rawVideos, ...rawVideos, ...rawVideos];

  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const autoRef = useRef(null);
  const animating = useRef(false);

  const cardWidth = 340;
  const gap = 32;
  const totalWidth = cardWidth + gap;
  const baseIndex = rawVideos.length;

  const [index, setIndex] = useState(baseIndex);
  const [muted, setMuted] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [pausedVideos, setPausedVideos] = useState(new Set());

  useEffect(() => {
    gsap.set(trackRef.current, {
      x: -(baseIndex * totalWidth),
      willChange: "transform"
    });
  }, []);

  const slide = (dir) => {
    if (animating.current) return;
    animating.current = true;

    let next = index + dir;

    gsap.to(trackRef.current, {
      x: -(next * totalWidth),
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        if (next >= rawVideos.length * 2) next -= rawVideos.length;
        if (next < rawVideos.length) next += rawVideos.length;

        gsap.set(trackRef.current, { x: -(next * totalWidth) });
        setIndex(next);
        animating.current = false;
      }
    });
  };

  useEffect(() => {
    if (hovering) return;

    autoRef.current = setInterval(() => {
      slide(1);
    }, 3500);

    return () => clearInterval(autoRef.current);
  }, [hovering, index]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;

      if (i === index && !pausedVideos.has(i)) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [index, pausedVideos]);

  const togglePlay = (e, i) => {
    e.stopPropagation();

    const v = videoRefs.current[i];
    if (!v) return;

    const newPaused = new Set(pausedVideos);

    if (v.paused) {
      v.play().catch(() => {});
      newPaused.delete(i);
    } else {
      v.pause();
      newPaused.add(i);
    }

    setPausedVideos(newPaused);
  };

  const toggleMute = (e) => {
    e.stopPropagation();

    const newMute = !muted;
    setMuted(newMute);

    videoRefs.current.forEach((v) => {
      if (v) v.muted = newMute;
    });
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 bg-bg-muted/30 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-[clamp(28px,5vw,56px)] leading-tight">
          <span className="text-[var(--color-primary-navy)]">
            What Our Users <br />
          </span>
          <span className="text-[var(--color-primary-mauve)]">
            Are Saying
          </span>
        </h2>
      </div>

      <div className="relative max-w-[1400px] 2xl:max-w-[1700px] mx-auto">
        <button
          onClick={() => slide(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-brand-400 bg-white text-primary-navy shadow-md hover:bg-primary-navy hover:text-white transition"
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          onClick={() => slide(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-brand-400 bg-white text-primary-navy shadow-md hover:bg-primary-navy hover:text-white transition"
        >
          <FiChevronRight size={24} />
        </button>

        <div className="overflow-hidden px-14 xl:px-20 2xl:px-28">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${gap}px`,
              paddingLeft: `calc(50% - ${cardWidth / 2}px)`
            }}
          >
            {videos.map((src, i) => {
              const dist = Math.abs(i - index);

              const opacity =
                dist === 0 ? 1 :
                dist === 1 ? 0.7 :
                0.4;

              const scale =
                dist === 0 ? 1 :
                dist === 1 ? 0.94 :
                0.88;

              const active = i === index;
              const isPlaying = !pausedVideos.has(i);

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="relative shrink-0 rounded-[20px] overflow-hidden transition-all duration-[900ms] xl:rounded-[24px] 2xl:rounded-[28px]"
                  style={{
                    width: `${cardWidth}px`,
                    aspectRatio: "9/14",
                    transform: `scale(${scale})`,
                    opacity
                  }}
                >
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {active && (
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <button
                        onClick={(e) => togglePlay(e, i)}
                        className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-black/30 border border-white/30 text-white hover:bg-black/50 transition"
                      >
                        {isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
                      </button>

                      <button
                        onClick={(e) => toggleMute(e)}
                        className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-black/30 border border-white/30 text-white hover:bg-black/50 transition"
                      >
                        {muted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;