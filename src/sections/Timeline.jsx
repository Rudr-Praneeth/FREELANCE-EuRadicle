import { useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

gsap.config({
  autoSleep: 60,
  force3D: true
})

export default function StoryTimelineSection({ items }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cardsRef = useRef([])
  const contentRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useGSAP(
    () => {
      if (!items.length) return

      const mm = gsap.matchMedia()

      mm.add("(min-width: 768px)", () => {
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
      })

      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card, i) => {
          const content = contentRefs.current[i]
          if (!card) return

          if (i !== activeIndex) {
            gsap.set(content, { height: 0, opacity: 0 })
          }

          ScrollTrigger.create({
            trigger: card,
            start: "top 70%",
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i)
          })
        })
      })

      return () => mm.revert()
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
      className="relative w-full overflow-hidden min-[768px]:h-screen py-16 min-[768px]:py-0"
      style={{
        background: "linear-gradient(to bottom right, #E4E7FD, #F4DEF0)",
      }}
    >
      <h1 className="text-center text-h1 pt-10 min-[600px]:pt-12 min-[768px]:pt-16 text-[clamp(28px,5vw,56px)]">
        OUR{" "}
        <span className="text-[var(--color-primary-mauve)]">
          STORY
        </span>
      </h1>

      <div className="relative min-[768px]:absolute top-20 min-[768px]:top-32 left-1/2 w-full max-w-[95%] min-[768px]:max-w-6xl -translate-x-1/2 px-4 min-[600px]:px-6 mb-10 min-[768px]:mb-0">
        <div className="flex items-center overflow-x-auto min-[768px]:overflow-visible">
          {items.map((item, i) => (
            <div key={i} className="flex items-center min-w-max flex-1">
              <div
                className={`z-10 flex h-9 min-[600px]:h-10 min-w-20 min-[600px]:min-w-24 items-center justify-center rounded-full border text-body-sm font-semibold transition-all duration-500 ${
                  activeIndex === i
                    ? "bg-brand-600 text-white border-transparent"
                    : "bg-[var(--color-bg-white)] text-[var(--color-primary-mauve)] border-brand-600"
                }`}
              >
                {item.year}
              </div>
              {i !== items.length - 1 && (
                <div className="h-px w-12 min-[600px]:w-20 min-[768px]:w-full bg-brand-600/40" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex flex-col min-[768px]:flex-row h-auto min-[768px]:h-full items-center gap-10 min-[768px]:gap-24 px-4 min-[600px]:px-6 min-[768px]:px-24"
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="shrink-0 w-full max-w-md min-[768px]:w-[32rem] rounded-2xl bg-[var(--color-bg-white)] shadow-xl transition-transform duration-500 overflow-hidden"
          >
            <div className="flex flex-col p-6 min-[600px]:p-7 min-[768px]:p-8">
              <p className="text-body-xs font-semibold tracking-wide text-[var(--color-primary-mauve)]">
                {item.title?.toUpperCase()}
              </p>
              <h3 className="mt-2 min-[600px]:mt-3 text-h4 text-[var(--color-primary-mauve)]">
                {item.year}
              </h3>

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                className="overflow-hidden"
              >
                <p className="mt-4 min-[600px]:mt-5 text-body-sm">
                  {item.text}
                </p>

                <hr className="my-4 min-[600px]:my-5 border-brand-600" />

                <div className="flex items-center justify-start rounded-3xl">
                  <img
                    src={item.logo}
                    alt=""
                    className="h-16 min-[600px]:h-18 min-[768px]:h-20 rounded-3xl w-auto max-w-full object-contain m-auto"
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
