import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Testimonials = () => {
  const rawVideos = Array.from(
    { length: 7 },
    (_, i) => `/Testimonial/${i + 1}.mp4`,
  );
  const videos = [...rawVideos, ...rawVideos, ...rawVideos];

  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const animating = useRef(false);

  const cardWidth = 360;
  const gap = 28;
  const totalWidth = cardWidth + gap;
  const baseIndex = rawVideos.length;

  const [index, setIndex] = useState(baseIndex);
  const [playing, setPlaying] = useState(null);
  const [muted, setMuted] = useState({});

  useEffect(() => {
    gsap.set(trackRef.current, { x: -(baseIndex * totalWidth) });
  }, []);

  const slide = (dir) => {
    if (animating.current) return;
    animating.current = true;

    const next = index + dir;
    setIndex(next);

    gsap.to(trackRef.current, {
      x: -(next * totalWidth),
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        let reset = next;

        if (next >= rawVideos.length * 2) {
          reset = next - rawVideos.length;
        } else if (next < rawVideos.length) {
          reset = next + rawVideos.length;
        }

        if (reset !== next) {
          gsap.set(trackRef.current, { x: -(reset * totalWidth) });
          setIndex(reset);
        }

        animating.current = false;
      },
    });
  };

  const togglePlay = (e, i) => {
    e.stopPropagation();
    const v = videoRefs.current[i];
    if (!v) return;

    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(i);
    } else {
      v.pause();
      setPlaying(null);
    }
  };

  const toggleMute = (e, i) => {
    e.stopPropagation();
    const v = videoRefs.current[i];
    if (!v) return;

    v.muted = !v.muted;

    setMuted((p) => ({
      ...p,
      [i]: v.muted,
    }));
  };

  useEffect(() => {
    const v = videoRefs.current[index];
    if (!v) return;

    v.play().catch(() => {});
    setPlaying(index);

    videoRefs.current.forEach((vid, i) => {
      if (i !== index && vid && !vid.paused) vid.pause();
    });
  }, [index]);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-4 bg-bg-muted/30 overflow-hidden">
      <div className="max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-3xl min-[992px]:max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-h1 normal-case mb-2 text-[clamp(28px,5vw,56px)] leading-tight">
          <span className="text-[var(--color-primary-navy)]">
            What Our Users <br />
          </span>
          <span className="text-[var(--color-primary-mauve)]">Are Saying</span>
        </h2>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: `${gap}px`,
            paddingLeft: `calc(50vw - ${cardWidth / 2}px)`,
          }}
        >
          {videos.map((src, i) => {
            const dist = Math.abs(i - index);

            const opacity = dist === 0 ? 1 : dist === 1 ? 0.65 : 0.35;
            const scale = dist === 0 ? 1 : dist === 1 ? 0.93 : 0.86;

            const active = i === index;
            const isPlaying = playing === i;
            const isMuted = muted[i] !== false;

            return (
              <div
                key={i}
                onClick={() => !active && slide(i > index ? 1 : -1)}
                className="relative shrink-0 rounded-[20px] overflow-hidden cursor-pointer transition-all duration-[1100ms]"
                style={{
                  width: `${cardWidth}px`,
                  aspectRatio: "9/14",
                  transform: `scale(${scale})`,
                  opacity,
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {active && (
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between">
                    <button
                      onClick={(e) => togglePlay(e, i)}
                      className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition"
                    >
                      {isPlaying ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                        >
                          <rect x="6" y="5" width="4" height="14" />
                          <rect x="14" y="5" width="4" height="14" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    <button
                      onClick={(e) => toggleMute(e, i)}
                      className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition"
                    >
                      {isMuted ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M3 9v6h4l5 5V4L7 9H3z" />
                          <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63z" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M16 7l5 5-5 5M21 12H9" />
                        </svg>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-14">
        <button
          onClick={() => slide(-1)}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-400 text-primary-navy hover:bg-primary-navy hover:text-white transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current"
            fill="none"
          >
            <path strokeWidth="1.8" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => slide(1)}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-400 text-primary-navy hover:bg-primary-navy hover:text-white transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current"
            fill="none"
          >
            <path strokeWidth="1.8" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
