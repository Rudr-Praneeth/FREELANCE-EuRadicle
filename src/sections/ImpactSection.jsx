import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Impact } from "../data/home";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ImpactSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const counters = gsap.utils.toArray(".counter");

        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          const obj = { value: 0 };

          gsap.to(obj, {
            value: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              counter.textContent = Math.floor(obj.value).toLocaleString();
            },
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  const stats = [
    { label: "Projects", value: Impact.speedometer.Projects },
    { label: "Clients", value: Impact.speedometer.Clients },
    { label: "Partners Onboarded", value: Impact.speedometer.Partners_onboard },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-muted)] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-h1 normal-case mb-2">
          <span className="text-[var(--color-primary-navy)]">
            Our Impact at a{" "}
          </span>
          <span className="text-[var(--color-primary-mauve)]">Glance</span>
        </h1>

        <p className="text-body-lg text-[var(--color-primary-navy)] max-w-3xl mx-auto mb-14">
          The impact of leadership development shows up over time <br /> in decisions made, teams strengthened, and cultures shaped.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {stats.map((stat) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
            const hasPlus = stat.value.includes("+");

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <div className="text-h1 text-[var(--color-primary-purple)]">
                  <span
                    className="counter"
                    data-target={numericValue}
                  >
                    0
                  </span>
                  {hasPlus && "+"}
                </div>

                <div className="text-h5 text-[var(--color-primary-mauve)] mt-3">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
