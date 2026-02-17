import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function Jobs() {
  const sectionRef = useRef(null)

  const roles = [
    { title: "Business Development Executive", location: "Dallas, Texas" },
    { title: "Operations - Associate/Sr. Associate", location: "" },
    { title: "Content & Solutioning - Associate/Intern", location: "" }
  ]

  useGSAP(() => {
    const cards = gsap.utils.toArray(".jobs-card")
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    )

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, scale: 1.03, duration: 0.4, ease: "power3.out" })
      })
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power3.out" })
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-muted)] py-16 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-h1 mb-2 jobs-animate">
          <span className="text-[var(--color-primary-navy)]">OPEN</span>{" "}
          <span className="text-[var(--color-primary-mauve)]">ROLES</span>
        </h1>

        <p className="text-subheading-lg italic mb-4 jobs-animate">
          Work That Shapes You - and the World
        </p>

        <p className="text-body-lg italic jobs-animate">
          Join a global consulting firm where impact is intentional and growth
          is personal. At EuRadicle, curious minds come together in a culture
          of trust, collaboration, and continuous learning — where high
          performance coexists with balance and authenticity. You’ll be
          encouraged to think deeply, contribute meaningfully, and take
          ownership of the impact you create. This is a place where your ideas
          matter, your growth is supported, and your individuality is
          respected. Grow with purpose. Lead with intent.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-8">
        {roles.map((role, i) => (
          <div
            key={i}
            className="jobs-card jobs-animate bg-[var(--color-bg-white)] rounded-2xl p-8 shadow-lg cursor-pointer transition-all duration-500 border border-transparent hover:border-brand-600"
          >
            <p className="text-subheading text-[var(--color-primary-mauve)] mb-3">
              Open Role
            </p>

            <h3 className="text-h5 text-[var(--color-primary-navy)]">
              {role.title}
            </h3>

            {role.location && (
              <p className="mt-4 text-body-sm text-[var(--color-primary-mauve)]">
                {role.location}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
