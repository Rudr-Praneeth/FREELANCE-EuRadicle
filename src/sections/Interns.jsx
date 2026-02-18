import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Interns({ interns }) {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  cardsRef.current = []

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 640px)": () => {
          cardsRef.current.forEach((card) => {
            if (!card) return
            gsap.fromTo(
              card,
              { y: 120, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  end: "top 40%",
                  scrub: true
                }
              }
            )
          })
        },
        "(max-width: 639px)": () => {}
      })
    }, sectionRef)

    return () => {
      ctx.revert()
      ScrollTrigger.clearMatchMedia()
    }
  }, [interns])

  return (
    <section ref={sectionRef} className="w-full bg-[var(--color-bg-white)] pb-20 sm:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-h1 sm:text-h2 mb-6">
            <span className="text-[var(--color-primary-navy)]">EARLY </span>
            <span className="text-[var(--color-primary-mauve)]">TALENT</span>
          </h1>
          <div className="italic text-body sm:text-body-lg max-w-3xl mx-auto space-y-4">
            <p>
              At EuRadicle, our Early Talent & Internship programs are built to
              give emerging professionals more than just exposure — we provide a
              true launchpad for their careers. From day one, interns are treated
              as contributors, not observers, gaining hands-on experience across
              live projects, client engagements, research, facilitation support,
              and strategic thinking.
            </p>
            <p>
              We create a space where curiosity is encouraged, ownership is
              trusted, and learning is continuous. Through real responsibility,
              structured feedback, and close collaboration with experienced
              consultants, early talent develops the confidence, clarity, and
              professional maturity needed to transition seamlessly into
              full-time roles and long-term careers.
            </p>
          </div>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {interns.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-3xl bg-[var(--color-bg-muted)] rounded-2xl px-8 sm:px-12 py-10 sm:py-14 shadow-lg">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-brand-600)]" />
                </div>
                <p className="text-body sm:text-body-lg italic text-center text-[var(--color-primary-purple)] mb-10 leading-relaxed">
                  “{item.text}”
                </p>
                <div className="text-center">
                  <p className="text-subheading text-[var(--color-primary-navy)]">
                    {item.name}
                  </p>
                  <p className="text-body-sm text-[var(--color-primary-mauve)] mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
