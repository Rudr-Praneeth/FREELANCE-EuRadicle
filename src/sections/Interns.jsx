import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Interns({ interns }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      if (window.innerWidth < 640) return;

      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.from(card, {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full pb-24 sm:pb-48 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
        <h1 className="text-3xl sm:text-h1 mb-4 sm:mb-6 leading-tight">
          <span className="text-[var(--color-primary-navy)]">EARLY</span>{" "}
          <span className="text-[var(--color-primary-mauve)]">TALENT</span>
        </h1>

        <p className="text-sm sm:text-body-lg italic leading-relaxed sm:leading-loose">
          At EuRadicle, our Early Talent & Internship programs are built to give
          emerging professionals more than just exposure — we provide a true
          launchpad for their careers. From day one, interns are treated as
          contributors, not observers, gaining hands-on experience across live
          projects, client engagements, research, facilitation support, and
          strategic thinking. We create a space where curiosity is encouraged,
          ownership is trusted, and learning is continuous. Through real
          responsibility, structured feedback, and close collaboration with
          experienced consultants, early talent develops the confidence,
          clarity, and professional maturity needed to transition seamlessly
          into full-time roles and long-term careers.
        </p>
      </div>

      <div className="space-y-16 sm:space-y-24">
        {interns.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-4xl bg-[var(--color-bg-muted)] rounded-2xl px-6 sm:px-10 py-8 sm:py-14 shadow-xl">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-brand-600" />
              </div>

              <p className="text-sm sm:text-body italic text-center mb-8 sm:mb-10 leading-relaxed">
                “{item.text}”
              </p>

              <div className="text-center sm:text-right">
                <p className="text-base sm:text-subheading text-[var(--color-primary-navy)]">
                  {item.name}
                </p>
                <p className="text-xs sm:text-body-sm text-[var(--color-primary-mauve)]">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
