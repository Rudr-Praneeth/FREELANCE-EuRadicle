import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function BeyondBusiness() {
  const sectionRef = useRef(null)
  const wordsRef = useRef([])

  useGSAP(
    () => {
      gsap.from(".bb-fade", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      })

      gsap.fromTo(
        wordsRef.current,
        { color: "rgba(0,0,0,0.3)" },
        {
          color: "var(--color-primary-navy)",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".bb-box",
            start: "top 75%",
            end: "bottom 60%",
            scrub: true
          }
        }
      )
    },
    { scope: sectionRef }
  )

  const statement =
    "Beyond Business is not separate from what we do. It is embedded in how we grow, partner, and contribute – with empathy, intention, and purpose."

  return (
    <section ref={sectionRef} className="w-full bg-[var(--color-bg-white)]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bb-fade">
            <h1 className="text-h1 text-[var(--color-primary-mauve)] mb-6">
              BEYOND BUSINESS
            </h1>
            <h2 className="text-h2">
              We believe that growth carries a responsibility – to give back to
              the world that enables it.
            </h2>
          </div>

          <div className="bb-fade">
            <p className="text-body mb-4">
              At EuRadicle, every program we deliver is tied to a simple yet
              powerful commitment. As we work with organizations to build
              capability and leadership, we invest in nurturing life beyond the
              workplace. This means planting trees to support environmental
              sustainability, while also extending care to old age homes and
              orphanages through food, clothing, and essential support.
            </p>
            <p className="text-body">
              For us, impact is both long-term and immediate. It’s about creating
              a greener tomorrow while standing beside those who need care and
              dignity today. These actions reflect who we are – a firm that
              believes progress is most meaningful when it is shared.
            </p>
          </div>
        </div>

        <div className="bb-box mt-16 rounded-2xl border border-[var(--color-primary-mauve)] bg-[var(--color-primary-mauve)]/10 px-8 py-12">
          <p className="text-h2 text-center">
            {statement.split(" ").map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordsRef.current[i] = el)}
                className="inline-block mr-1"
                style={{ color: "rgba(0,0,0,0.3)" }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
