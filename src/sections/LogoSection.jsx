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
        duration: 50,
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
      className="relative h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex flex-col gap-4 md:gap-5 items-center"
      >
        {[...logoIndices, ...logoIndices].map((index, idx) => (
          <div key={idx} className="w-full flex items-center justify-center">
            <img
              src={`/logos/${index}.png`}
              alt={`Partner Logo ${index}`}
              className="max-w-[170px] sm:max-w-[190px] md:max-w-[210px] lg:max-w-[230px] h-auto transition-transform duration-300 hover:scale-110 object-contain"
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

  const colSize = Math.ceil(indices.length / 3);
  const columns = [
    indices.slice(0, colSize),
    indices.slice(colSize, colSize * 2),
    indices.slice(colSize * 2),
  ];

  return (
    <section
      ref={container}
      className="relative flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 bg-bg-muted/30 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-bg-muted/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-bg-muted/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-h1 text-primary-navy tracking-tight text-[clamp(28px,5vw,56px)] leading-tight">
              TRUSTED BY <span className="text-primary-mauve">BIG BRANDS</span>
              <br />
              AROUND THE WORLD
            </h1>
          </div>

          <div className="relative rounded-[28px] p-6 md:p-10 shadow-sm border border-brand-400/10">
            <div className="block lg:hidden">
              <LogoMarqueeColumn logoIndices={indices} reverse={false} />
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-start">
              <LogoMarqueeColumn logoIndices={columns[0]} reverse={false} />
              <LogoMarqueeColumn logoIndices={columns[1]} reverse={true} />
              <LogoMarqueeColumn logoIndices={columns[2]} reverse={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
