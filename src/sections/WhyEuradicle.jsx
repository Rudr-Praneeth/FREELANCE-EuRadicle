import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function WhyEuradicle() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  const items = [
    {
      title: "Work That Shapes Leaders, Not Just Slides",
      text: "At EuRadicle, your work directly influences how professionals think, lead, and grow. Every project you touch contributes to real transformation—across leadership, consulting capability, and organizational impact. This isn’t back-end work; this is front-row participation in shaping future-ready leaders."
    },
    {
      title: "A Consulting Mindset from Day One",
      text: "You don’t just execute—you think, question, and co-create. We operate like a consulting firm, encouraging structured thinking, client empathy, and outcome-driven solutions. From strategy discussions to delivery, you’re treated as a problem-solver, not just a role-holder."
    },
    {
      title: "Learn Fast, Grow Faster",
      text: "Startups teach speed—but we add depth. You’ll gain exposure across consulting, L&D, operations, and client engagement, building skills that compound over time. With high ownership and real accountability, growth here isn’t promised—it’s practiced every day."
    },
    {
      title: "Global Exposure, Human Culture",
      text: "With a footprint across the US, Middle East, and India, you work in a global context while staying rooted in a people-first culture. We value trust, curiosity, and collaboration—because high performance is sustainable only when humans come first."
    }
  ]

  useGSAP(
    () => {
      const totalScroll =
        trackRef.current.scrollWidth - window.innerWidth

      gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=40",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true
        }
      })

      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=40",
            end: () => `+=${totalScroll}`,
            scrub: 1
          }
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[var(--color-bg-white)] mx-10"
    >
      <div className="pt-10 text-center">
        <h1 className="text-h1">
          <span className="text-[var(--color-primary-navy)]">
            WHY JOIN
          </span>{" "}
          <span className="text-[var(--color-primary-mauve)]">
            EURADICLE
          </span>
        </h1>
      </div>

      <div
        ref={trackRef}
        className="flex items-start h-[60vh] gap-16 px-20 mt-12"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="shrink-0 w-[42rem] h-[15rem] rounded-2xl bg-[var(--color-bg-muted)] px-10 py-8 flex flex-col justify-start"
          >
            <h3 className="text-h5 text-[var(--color-primary-mauve)] mb-4">
              {item.title}
            </h3>

            <p className="text-body leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-40 left-0 w-full h-1 bg-brand-600/30 overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-brand-600 origin-left scale-x-0"
        />
      </div>
    </section>
  )
}
