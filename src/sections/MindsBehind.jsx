import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MindsBehind({ items }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card) => {
        const border = card.querySelector(".card-border");

        gsap.set(border, {
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        tl.to(border, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
        }).fromTo(
          card,
          { scale: 0.96 },
          {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-h1 font-bold text-primary-navy leading-tight">
            OUR CORE{" "}
            <span className="text-primary-mauve">VERTICALS</span>
          </h2>

          <p className="italic mx-auto mt-3 sm:mt-4 md:mt-5 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed">
            We combine deep expertise, practical experience, and a
            results-driven approach to deliver transformative solutions for our
            clients. Our versatile pool of consultants brings together diverse
            industry knowledge, specialized skills, and a consultative mindset,
            enabling us to address complex business challenges with precision
            and creativity. By leveraging this collective strength, we craft
            strategies that are actionable, impactful, and tailored to each
            organization’s unique context, ensuring sustainable growth and
            measurable outcomes.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 place-items-center">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                relative
                rounded-2xl
                bg-white
                shadow-lg
                w-full
                max-w-xs
                sm:max-w-sm
                lg:max-w-sm
                min-h-[380px]
                ${
                  i === items.length - 1
                    ? "sm:col-span-2 sm:col-start-1 sm:justify-self-center lg:col-span-1 lg:col-start-2"
                    : ""
                }
              `}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="99"
                  height="99"
                  rx="3"
                  ry="3"
                  fill="none"
                  stroke="#9b7ba1"
                  strokeWidth="0.8"
                  className="card-border"
                />
              </svg>

              <div className="relative z-10 overflow-hidden rounded-2xl p-3 sm:p-4 flex flex-col h-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-40 sm:h-44 md:h-48 object-cover object-top rounded-xl"
                />

                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary-mauve">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
