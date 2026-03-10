import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const text =
    "EuRadicle is a global talent and capability consulting firm that partners with organizations to build leadership depth, accelerate performance, and enable sustainable transformation. We work at the intersection of strategy, leadership, and human capability, helping enterprises translate intent into execution through consulting-led learning journeys, assessments, and culture-shaping interventions. With consultants and delivery capabilities across the globe, we support organizations across industries in solving complex people and performance challenges. Our work is grounded in real business contexts, driven by data and insight, and designed to create measurable impact by building leaders, teams, and systems that are future-ready, resilient, and aligned to organizational goals.";

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.9,
    });

    tl.from(
      textRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 1,
      },
      "-=0.4"
    );

    gsap.fromTo(
      textRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-4xl min-[992px]:max-w-5xl min-[1200px]:max-w-6xl mx-auto py-8 px-4 max-[600px]:px-5 min-[600px]:py-14 min-[600px]:px-6 min-[768px]:py-16 min-[768px]:px-10 max-[992px]:mt-12 min-[992px]:py-20 min-[992px]:px-16 max-[992px]:mt-5 min-[1200px]:py-24 min-[1200px]:px-24"
    >
      <h1
        ref={titleRef}
        className="text-h1 text-center mb-6 min-[600px]:mb-7 min-[768px]:mb-8 text-[clamp(28px,5vw,56px)] leading-tight"
      >
        About <span className="text-primary-mauve">Us</span>
      </h1>

      <p
        ref={textRef}
        className="italic mx-auto mt-2 max-w-5xl text-sm text-center leading-relaxed text-primary-navy"
      >
        {text}
      </p>
    </section>
  );
}