import { useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

gsap.config({
  autoSleep: 60,
  force3D: true,
})

export default function StoryTimelineSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cardsRef = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      year: "2020",
      title: "The Inception",
      text:
        "Founded with a clear intent to help organizations build leadership and capability that turns strategy into performance. Beginning with core leadership development and capability-building solutions for global & local organizations, a strong virtual delivery model was established to deliver impact even despite uncertainty of the covid era.",
    },
    {
      year: "2021",
      title: "Building Resilience",
      text:
        "Expanded partnerships with enterprise organizations and global industry leaders, while scaling delivery across India. This phase strengthened consultant-led execution and established long-term trust as a partner for complex, large-scale service delivery engagements.",
    },
    {
      year: "2022",
      title: "Gaining Momentum",
      text:
        "Expanded client footprints as credibility and goodwill grew through human capital and capability consulting engagements delivered across India and Europe, strengthening long-term enterprise relationships.",
    },
    {
      year: "2023",
      title: "The Strategic Shift",
      text:
        "Transitioned into a capability consulting model, building specialized teams across consulting, creative solutions, content development, and research in Hyderabad to support global operations and enable long-term enterprise engagements beyond standalone engagements.",
    },
    {
      year: "2024",
      title: "Deepening Consulting Impact",
      text:
        "Strengthened positioning as a trusted consulting partner, delivering leadership journeys, behavioural transformation, and assessment-led development for large organizations and growing enterprises. Expanded global readiness by progressing firm registration in Texas to support a growing US-based client ecosystem.",
    },
    {
      year: "2025–26",
      title: "Where We Are Today",
      text:
        "A global talent and capability consulting firm with consultants and delivery capabilities across India, the USA, and the UAE. Work with organizations across industries—including enterprises with Fortune 500 footprints—is guided by three core commitments: end-to-end accountability, deep expertise, and agile, co-created solutions.",
    },
  ]

  useGSAP(
    () => {
      const totalScroll =
        trackRef.current.scrollWidth - window.innerWidth

      const horizontalTween = gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        willChange: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll * 1.5}`,
          scrub: 1.5,
          pin: true,
          snap: {
            snapTo: 1 / (items.length - 1),
            duration: 0.8,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const index = Math.round(
              self.progress * (items.length - 1)
            )
            setActiveIndex(index)
          },
        },
      })

      cardsRef.current.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          containerAnimation: horizontalTween,
          start: "center center",
          onEnter: () =>
            gsap.to(card, {
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
            }),
          onLeaveBack: () =>
            gsap.to(card, {
              scale: 0.95,
              duration: 0.6,
              ease: "power3.out",
            }),
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #E4E7FD, #F4DEF0)",
      }}
    >
      <h1 className="text-center text-h1 pt-10">
        OUR <span className="text-primary-mauve">STORY</span>
      </h1>

      <div className="absolute top-32 left-1/2 w-full max-w-6xl -translate-x-1/2 px-6">
        <div className="flex items-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-1 items-center">
              <div
                className={`z-10 flex h-10 min-w-[4.75rem] items-center justify-center rounded-full border text-sm font-semibold transition-all ${
                  activeIndex === i
                    ? "bg-[#9b7ba1] text-white border-transparent"
                    : "bg-white text-primary-mauve border-[#9b7ba1]"
                }`}
              >
                {item.year}
              </div>
              {i !== items.length - 1 && (
                <div className="h-px w-full bg-[#9b7ba1]/40" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex h-full items-center gap-24 px-32"
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`shrink-0 h-[40vh] w-[30rem] rounded-2xl bg-white shadow-xl transition-transform duration-500 ${
              activeIndex === i ? "scale-100" : "scale-95"
            }`}
          >
            <div className="flex h-full flex-col p-8">
              <p className="text-xs font-semibold tracking-wide text-primary-mauve">
                {item.title.toUpperCase()}
              </p>
              <h3 className="mt-2 text-3xl font-bold text-primary-mauve">
                {item.year}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
