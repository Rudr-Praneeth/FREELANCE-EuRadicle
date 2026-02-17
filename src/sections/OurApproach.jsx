import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(
    () => {
      gsap.from(".approach-intro", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      rowsRef.current.forEach((row) => {
        const number = row.querySelector(".approach-number");
        const content = row.querySelector(".approach-content");

        gsap.fromTo(
          number,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
            },
          },
        );

        gsap.fromTo(
          content,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="approach-intro text-center">
          <h2 className="text-h1 font-bold tracking-tight text-primary-navy">
            OUR <span className="text-primary-mauve">APPROACH</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-primary-navy">
            Our approach is designed to move organizations beyond isolated
            people development initiatives toward sustainable leadership and
            capability transformation. We work as a talent and leadership
            consulting firm, combining deep expertise, co-created solutions, and
            end-to-end ownership to ensure learning translates into real
            performance outcomes. Every engagement is anchored in three promises
            that define how we work and what our clients can expect.
          </p>
        </div>

        {/* Items */}
        <div className="mt-16 space-y-8">
          {[
            {
              number: "01",
              title: "End-to-End Accountability",
              text: `We own the full capability journey-from business and talent diagnosis through design, delivery, and impact measurement-ensuring learning is embedded into daily work and aligned with business priorities. Through structured governance and analytics, we drive learning transfer, behaviour change, and performance improvement that inform stronger leadership decisions.`,
            },
            {
              number: "02",
              title: "Deep Expertise",
              text: `Grounded in leadership development, organisational development, behavioural science, and talent management, our consultants bring both insight and real-world business experience to every engagement. Drawing on neuroscience and behavioural research, we design role-relevant, context-driven capability solutions that equip leaders and teams with the judgment, influence, and decision-making skills needed to perform in complex environments.`,
            },
            {
              number: "03",
              title: "Agile Co-Created Solutions",
              text: `Every solution is developed in close collaboration with clients-blending consulting expertise with deep contextual insight. Programs are co-created to align with business realities, leadership expectations, and organizational culture.
From enterprise leadership journeys to capability programs for growing organizations, solutions are tailored to reflect each client’s brand, language, and real-world challenges-driving relevance, ownership, and on-the-job application with measurable impact.
`,
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (rowsRef.current[i] = el)}
              className="grid grid-cols-[160px_1fr] gap-12"
            >
              <div className="approach-number text-[7rem] font-bold leading-none text-primary-mauve">
                {item.number}
              </div>

              <div className="approach-content">
                <h3 className="text-2xl font-semibold text-primary-mauve">
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
