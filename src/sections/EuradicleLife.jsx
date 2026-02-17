import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function EuradicleLife() {
  const headingRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <section className="w-full bg-[var(--color-bg-white)] py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-h1 mb-4"
        >
          <span className="text-[var(--color-primary-navy)]">
            LIFE AT
          </span>{" "}
          <span className="text-[var(--color-primary-mauve)]">
            EURADICLE
          </span>
        </h1>

        <div className="italic text-body-lg space-y-2">
           <p>
                        Life At EuRadicle: Culture, People & Lifestyles
            At EuRadicle, we believe great work doesn’t come from burnout - it
            comes from balance, belonging, and a bit of joy along the way. We
            are deeply committed to building leaders, shaping organisations, and
            creating impact that truly matters. At the same time, we place equal
            importance on the people doing that work, because sustainable impact
            begins with people who feel valued, trusted, and supported.
            Our culture is driven by curiosity, purpose, and ownership.
            Hierarchies don’t define us - ideas, intent, and thoughtful
            conversations do. You’ll find open dialogue, respectful
            disagreements, and a constant appetite for learning. EuRadicle is
            home to thinkers, facilitators, consultants, and creators who bring
            their authentic selves to work, celebrate individuality, and
            understand that growth looks different for everyone - and that’s
            perfectly okay.
            While we take our work seriously, we don’t take ourselves too
            seriously. We make space for personal time, passions, and pauses,
            celebrate both small wins and big milestones, and share moments
            beyond meetings. Life at EuRadicle is about doing meaningful work
            with good people - without losing yourself in the process. And
            that’s a culture we’re proud to build, every single day.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[400px]">
        <div className="row-span-2 overflow-hidden rounded-2xl">
          <img
            src="/Celebrations/celeb2.jpeg"
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/Celebrations/celeb1.jpeg"
            alt=""
            className="w-full h-full object-cover  transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/Celebrations/celeb3.jpeg"
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="overflow-hidden rounded-2xl col-span-2">
          <img
            src="/Celebrations/celeb4.jpeg"
            alt=""
            className="w-full h-full object-cover object-bottom transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
