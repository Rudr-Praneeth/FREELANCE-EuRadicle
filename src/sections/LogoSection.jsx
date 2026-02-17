import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LogoMarqueeColumn = ({ logoIndices, reverse = false }) => {
  const colRef = useRef(null);
  const trackRef = useRef(null);
  const timeline = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const height = track.scrollHeight / 2;

      gsap.set(track, { y: reverse ? -height : 0 });

      timeline.current = gsap.to(track, {
        y: reverse ? 0 : -height,
        duration: 60,
        ease: "none",
        repeat: -1,
        modifiers: {
          y: gsap.utils.unitize((y) => {
            const value = parseFloat(y);
            return reverse
              ? ((value + height) % height) - height
              : value % -height;
          }),
        },
      });
    },
    { scope: colRef }
  );

  const handleMouseEnter = () => timeline.current?.pause();
  const handleMouseLeave = () => timeline.current?.play();

  return (
    <div
      ref={colRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-[360px] min-[600px]:h-[420px] min-[768px]:h-[500px] min-[992px]:h-[600px] overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex flex-col gap-6 min-[600px]:gap-8 min-[768px]:gap-10 min-[992px]:gap-12 items-center"
      >
        {[...logoIndices, ...logoIndices].map((index, idx) => (
          <div
            key={idx}
            className="w-full flex items-center justify-center p-1.5 min-[600px]:p-2"
          >
            <img
              src={`/logos/${index}.png`}
              alt={`Partner Logo ${index}`}
              className="max-w-[60px] min-[600px]:max-w-[70px] min-[768px]:max-w-[80px] h-auto transition-transform duration-300 hover:scale-110 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const LogoSection = () => {
  const container = useRef(null);

  const totalLogos = 35;
  const indices = Array.from({ length: totalLogos }, (_, i) => i + 1).filter(
    (i) => i !== 18
  );

  const colSize = Math.ceil(indices.length / 4);
  const columns = [
    indices.slice(0, colSize),
    indices.slice(colSize, colSize * 2),
    indices.slice(colSize * 2, colSize * 3),
    indices.slice(colSize * 3),
  ];

  return (
    <section
      ref={container}
      className="relative flex items-center justify-center py-14 px-4 max-[600px]:px-5 min-[600px]:py-16 min-[600px]:px-6 min-[768px]:py-20 min-[768px]:px-8 min-[992px]:py-24 min-[1200px]:px-12 bg-bg-muted/30 overflow-hidden"
    >
      <div className="w-full max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-4xl min-[992px]:max-w-6xl min-[1200px]:max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 left-0 w-full h-20 min-[600px]:h-24 min-[768px]:h-28 min-[992px]:h-32 bg-gradient-to-b from-bg-muted/30 via-bg-muted/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-20 min-[600px]:h-24 min-[768px]:h-28 min-[992px]:h-32 bg-gradient-to-t from-bg-muted/30 via-bg-muted/10 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto">
          <div className="text-center mb-10 min-[600px]:mb-12 min-[768px]:mb-14 min-[992px]:mb-16">
            <h1 className="text-h1 text-primary-navy tracking-tight text-[clamp(28px,5vw,56px)] leading-tight">
              TRUSTED BY <span className="text-brand-600">BIG BRANDS</span>
              <br />
              AROUND THE WORLD
            </h1>
          </div>

          <div className="relative bg-bg-white rounded-[24px] min-[600px]:rounded-[32px] min-[768px]:rounded-[40px] p-4 min-[600px]:p-6 min-[768px]:p-10 min-[992px]:p-12 shadow-sm border border-brand-400/10">
            <div className="grid grid-cols-2 min-[768px]:grid-cols-4 gap-3 min-[600px]:gap-4 min-[768px]:gap-6 min-[992px]:gap-8 items-start">
              <LogoMarqueeColumn logoIndices={columns[0]} reverse={false} />
              <LogoMarqueeColumn logoIndices={columns[1]} reverse={true} />
              <LogoMarqueeColumn logoIndices={columns[2]} reverse={false} />
              <LogoMarqueeColumn logoIndices={columns[3]} reverse={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
