import { useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

gsap.config({
  autoSleep: 60,
  force3D: true
})

export default function StoryTimelineSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cardsRef = useRef([])
  const contentRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      year: "2020",
      title: "The Inception",
      text: "Founded with a clear intent to help organizations build leadership and capability that turns strategy into performance. Beginning with core leadership development and capability-building solutions for global & local organizations, a strong virtual delivery model was established to deliver impact even despite uncertainty of the covid era.",
      logo: "Timeline Logo/2020 - 2021.png",
    },
    {
      year: "2021",
      title: "Building Resilience",
      text: "Expanded partnerships with enterprise organizations and global industry leaders, while scaling delivery across India. This phase strengthened consultant-led execution and established long-term trust as a partner for complex, large-scale service delivery engagements.",
      logo: "Timeline Logo/2021 - 2023.png"
    },
    {
      year: "2022",
      title: "Gaining Momentum",
      text: "Expanded client footprints as credibility and goodwill grew through human capital and capability consulting engagements delivered across India and Europe, strengthening long-term enterprise relationships.",
      logo: "Timeline Logo/2021 - 2023.png"
    },
    {
      year: "2023",
      title: "The Strategic Shift",
      text: "Transitioned into a capability consulting model, building specialized teams across consulting, creative solutions, content development, and research in Hyderabad to support global operations and enable long-term enterprise engagements beyond standalone engagements.",
      logo: "Timeline Logo/2021 - 2023.png"
    },
    {
      year: "2024",
      title: "Deepening Consulting Impact",
      text: "Strengthened positioning as a trusted consulting partner, delivering leadership journeys, behavioural transformation, and assessment-led development for large organizations and growing enterprises. Expanded global readiness by progressing firm registration in Texas to support a growing US-based client ecosystem.",
      logo: "Timeline Logo/2023 - 2025.png"
    },
    {
      year: "2025–26",
      title: "Where We Are Today",
      text: "A global talent and capability consulting firm with consultants and delivery capabilities across India, the USA, and the UAE. Work with organizations across industries-including enterprises with Fortune 500 footprints-is guided by three core commitments: end-to-end accountability, deep expertise, and agile, co-created solutions.",
      logo: "Timeline Logo/2023 - 2025.png"
    },
  ];

  useGSAP(
    () => {
      if (!items.length) return

      const totalScroll =
        trackRef.current.scrollWidth - window.innerWidth

      const horizontalTween = gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll * 1.5 + 30}`,
          scrub: 1.5,
          pin: true,
          snap: {
            snapTo: 1 / (items.length - 1),
            duration: 0.8,
            ease: "power1.inOut"
          },
          onUpdate: (self) => {
            const index = Math.round(
              self.progress * (items.length - 1)
            )
            setActiveIndex(index)
          }
        }
      })

      cardsRef.current.forEach((card, i) => {
        const content = contentRefs.current[i]
        if (!card) return

        if (i !== activeIndex) {
          gsap.set(content, { height: 0, opacity: 0 })
        }

        ScrollTrigger.create({
          trigger: card,
          containerAnimation: horizontalTween,
          start: "center center"
        })
      })
    },
    { scope: sectionRef, dependencies: [items.length] }
  )

  useGSAP(
    () => {
      cardsRef.current.forEach((card, i) => {
        const content = contentRefs.current[i]
        if (!card || !content) return

        if (i === activeIndex) {
          gsap.to(card, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out"
          })

          gsap.to(content, {
            height: "auto",
            opacity: 1,
            duration: 0.6,
            ease: "power3.inOut"
          })
        } else {
          gsap.to(card, {
            scale: 0.95,
            duration: 0.6,
            ease: "power3.out"
          })

          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut"
          })
        }
      })
    },
    { dependencies: [activeIndex] }
  )

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #E4E7FD, #F4DEF0)",
      }}
    >
      <h1 className="text-center text-h1 pt-16">
        OUR{" "}
        <span className="text-[var(--color-primary-mauve)]">
          STORY
        </span>
      </h1>

      <div className="absolute top-32 left-1/2 w-full max-w-6xl -translate-x-1/2 px-6">
        <div className="flex items-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-1 items-center">
              <div
                className={`z-10 flex h-10 min-w-24 items-center justify-center rounded-full border text-body-sm font-semibold transition-all duration-500 ${
                  activeIndex === i
                    ? "bg-brand-600 text-white border-transparent"
                    : "bg-[var(--color-bg-white)] text-[var(--color-primary-mauve)] border-brand-600"
                }`}
              >
                {item.year}
              </div>
              {i !== items.length - 1 && (
                <div className="h-px w-full bg-brand-600/40" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex h-full items-center gap-24 px-24"
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="shrink-0 w-[32rem] rounded-2xl bg-[var(--color-bg-white)] shadow-xl transition-transform duration-500 overflow-hidden"
          >
            <div className="flex flex-col p-8">
              <p className="text-body-xs font-semibold tracking-wide text-[var(--color-primary-mauve)]">
                {item.title?.toUpperCase()}
              </p>
              <h3 className="mt-3 text-h4 text-[var(--color-primary-mauve)]">
                {item.year}
              </h3>

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                className="overflow-hidden"
              >
                <p className="mt-5 text-body-sm">
                  {item.text}
                </p>

                <hr className="my-5 border-brand-600" />

                <div className="flex items-center justify-start rounded-3xl">
                  <img
                    src={item.logo}
                    alt=""
                    className="h-20 rounded-3xl w-auto max-w-full object-contain m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
