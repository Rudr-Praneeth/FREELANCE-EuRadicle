import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MindsBehind() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const items = [
    {
      title: "Client Partnerships",
      text: "Focused on building trusted relationships, our sales team works closely with clients to understand their capability needs and shape meaningful engagements from the outset. Their role is to ensure alignment, clarity, and long-term value across every partnership",
      img: "Minds/compressed-Client Partnership..jpg",
    },
    {
      title: "Capability & Insights Lab",
      text: "Anchoring EuRadicle’s thinking, our R&D team continuously explores emerging trends, capability frameworks, and evolving business challenges. Their insights inform solution design and keep our offerings relevant, practical, and future-ready.",
      img: "Minds/compressed-Capability & Insights Lab.jpg",
    },
    {
      title: "Learning Architecture",
      text: "Our content team translates insight into structured learning journeys. They design clear, application-oriented content that reflects our consulting philosophy and supports sustained capability building.",
      img: "Minds/compressed-Learning Architecture.jpg",
    },
    {
      title: "Experience Design Studio",
      text: "Bringing learning to life, our creative solutions team crafts engaging experiences through thoughtful design, formats, and visual storytelling-enhancing participation and reinforcing impact.",
      img: "Minds/compressed-Experience Design Studio.jpg",
    },
    {
      title: "Delivery & Governance",
      text: "Ensuring seamless execution, our operations team anchors every engagement with strong coordination, governance, and quality oversight. They enable consistency and reliability across programs and geographies.",
      img: "Minds/compressed-Delivery & Governance.jpg",
    },
    {
      title: "Financial Stewardship",
      text: "Providing financial rigor and transparency, our finance team supports informed decision-making and sustainable growth, ensuring operational discipline across the organization.",
      img: "Minds/compressed-Financial Stewardship.jpg",
    },
    {
      title: "People & Culture",
      text: "Shaping the foundation of EuRadicle, our HR team focuses on talent development, alignment, and building a culture where individuals and teams grow together.",
      img: "Minds/compressed-People & Culture.jpg",
    },
  ];

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-navy leading-tight">
            THE COLLECTIVE{" "}
            <span className="text-primary-mauve">CAPABILITY</span>
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed">
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

        <div
          className="
        mt-10
        sm:mt-12
        md:mt-14
        lg:mt-16
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        sm:gap-7
        md:gap-8
        "
        >
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
              ${i === items.length - 1 ? "sm:col-start-2 lg:col-start-2" : ""}
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

              <div className="relative z-10 overflow-hidden rounded-2xl p-2">
                <img
                  src={item.img}
                  alt=""
                  className="
                  w-full
                  h-48
                  sm:h-52
                  md:h-56
                  lg:h-56
                  object-cover
                  object-top
                  rounded-xl
                  "
                />

                <div className="p-4 sm:p-5 md:p-6">
                  <h3
                    className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-semibold
                  text-primary-mauve
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                  mt-2
                  sm:mt-3
                  text-xs
                  sm:text-sm
                  md:text-sm
                  leading-relaxed
                  "
                  >
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
