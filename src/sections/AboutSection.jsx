import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);
  const logoRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(
        linesRef.current,
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
        },
        "-=0.6"
      );
    },
    { scope: sectionRef }
  );

  const lines = [
    "EuRadicle is a global talent and capability consulting firm that partners with organizations to build leadership depth, accelerate performance, and enable sustainable transformation. We work at the intersection of strategy, leadership, and human capability, helping enterprises translate intent into execution through consulting-led learning journeys, assessments, and culture-shaping interventions. With consultants and delivery capabilities across India, the United States, and the Middle East, we support organizations across industries in solving complex people and performance challenges. Our work is grounded in real business contexts, driven by data and insight, and designed to create measurable impact by building leaders, teams, and systems that are future-ready, resilient, and aligned to organizational goals.",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-4xl min-[992px]:max-w-5xl min-[1200px]:max-w-6xl mx-auto py-8 px-4 max-[600px]:px-5 min-[600px]:py-14 min-[600px]:px-6 min-[768px]:py-16 min-[768px]:px-10 max-[992px]:mt-12 min-[992px]:py-20 min-[992px]:px-16 max-[992px]:mt-5 min-[1200px]:py-24 min-[1200px]:px-24"
    >
      <h1 className="text-h1 text-center mb-6 min-[600px]:mb-7 min-[768px]:mb-8 text-[clamp(28px,5vw,56px)] leading-tight">
        About <span className="text-primary-mauve">Us</span>
      </h1>

      <div className="space-y-2 min-[600px]:space-y-3 text-center italic">
        {lines.map((line, i) => (
          <p
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="text-body-lg text-primary-navy text-[clamp(16px,2.5vw,22px)] leading-relaxed px-1 min-[600px]:px-2"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
