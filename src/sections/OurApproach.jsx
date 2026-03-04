import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach({ data }) {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const bgRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        {
          opacity: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      gsap.from(introRef.current, {
        opacity: 0,
        y: isMobile ? 16 : 24,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
      });

      rowsRef.current.forEach((row) => {
        const icon = row.querySelector(".approach-icon");
        const content = row.querySelector(".approach-content");

        gsap.fromTo(
          icon,
          { x: isMobile ? -30 : -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          content,
          { x: isMobile ? 30 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-24 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute top-50 left-10 right-10 h-1/2 bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/Hands.jpeg')",
          opacity: 0,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div ref={introRef} className="text-center">
          <h2 className="text-h1 font-bold tracking-tight text-primary-navy">
            OUR <span className="text-primary-mauve">APPROACH</span>
          </h2>

          <p className="italic mx-auto mt-2 max-w-5xl text-sm text-primary-navy">
            Our approach is designed to move organizations beyond isolated
            people development initiatives toward sustainable leadership and
            capability transformation.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => (rowsRef.current[i] = el)}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-12"
            >
              <div className="approach-icon flex items-center justify-center bg-transparent">
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  className="w-14 h-14 md:w-24 md:h-24 object-contain object-center rounded-xl"
                />
              </div>

              <div className="approach-content">
                <h3 className="text-xl md:text-2xl font-semibold text-primary-mauve">
                  {item.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}