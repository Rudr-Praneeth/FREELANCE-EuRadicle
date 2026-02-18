import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyEuradicle({ items }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () => {
        const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

        const ctx = gsap.context(() => {
          gsap.to(trackRef.current, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top+=40",
              end: () => `+=${totalScroll}`,
              scrub: 1,
              pin: true,
            },
          });

          gsap.fromTo(
            progressRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top+=40",
                end: () => `+=${totalScroll}`,
                scrub: 1,
              },
            },
          );
        }, sectionRef);

        return () => ctx.revert();
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--color-bg-white)] px-6 sm:mx-10 max-[640px]:mb-10"
    >
      <div className="pt-10 text-center">
        <h1 className="text-h1 sm:text-h1">
          <span className="text-[var(--color-primary-navy)]">WHY JOIN</span>{" "}
          <span className="text-[var(--color-primary-mauve)]">EURADICLE</span>
        </h1>
      </div>

      <div
        ref={trackRef}
        className="
          flex flex-col sm:flex-row
          items-start
          gap-8 sm:gap-16
          mt-10 sm:mt-12
          sm:h-[60vh]
        "
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="
              w-full
              sm:shrink-0 sm:w-[42rem] sm:h-[15rem]
              rounded-2xl
              bg-[var(--color-bg-muted)]
              px-6 sm:px-10
              py-6 sm:py-8
              flex flex-col
            "
          >
            <h3 className="text-h6 sm:text-h5 text-[var(--color-primary-mauve)] mb-3 sm:mb-4">
              {item.title}
            </h3>

            <p className="text-body-sm sm:text-body leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="hidden min-[1500px]:block absolute bottom-20 left-0 w-full h-1 bg-brand-600/30 overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-brand-600 origin-left scale-x-0"
        />
      </div> */}
    </section>
  );
}
