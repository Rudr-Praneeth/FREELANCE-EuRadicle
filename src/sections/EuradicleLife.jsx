import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function EuradicleLife() {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)

  const images = [
    "/Celebrations/compressed-celeb1.jpeg",
    "/Celebrations/compressed-celeb2.jpeg",
    "/Celebrations/compressed-celeb3.jpeg",
    "/Celebrations/compressed-celeb4.jpeg",
    "/Celebrations/compressed-celeb5.jpeg",
    "/Celebrations/compressed-celeb6.jpeg",
  ]

  useGSAP(
    () => {
      const totalWidth = carouselRef.current.scrollWidth / 2
      gsap.to(carouselRef.current, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        <div className="text-center mb-12">
          <h1 className="text-h1 sm:text-h2 mb-6">
            <span className="text-[var(--color-primary-navy)]">LIFE AT </span>
            <span className="text-[var(--color-primary-mauve)]">EURADICLE</span>
          </h1>

          <div className="italic text-body sm:text-body-lg max-w-3xl mx-auto space-y-4">
            <p>
              At EuRadicle, we believe great work doesn’t come from burnout - it
        comes from balance, belonging, and a bit of joy along the way. We
        are deeply committed to building leaders, shaping organisations, and
        creating impact that truly matters. At the same time, we place equal
        importance on the people doing that work, because sustainable impact
        begins with people who feel valued, trusted, and supported. Our
        culture is driven by curiosity, purpose, and ownership. Hierarchies
        don’t define us - ideas, intent, and thoughtful conversations do.
        You’ll find open dialogue, respectful disagreements, and a constant
        appetite for learning. EuRadicle is home to thinkers, facilitators,
        consultants, and creators who bring their authentic selves to work,
        celebrate individuality, and understand that growth looks different
        for everyone - and that’s perfectly okay. While we take our work
        seriously, we don’t take ourselves too seriously. We make space for
        personal time, passions, and pauses, celebrate both small wins and
        big milestones, and share moments beyond meetings. Life at EuRadicle
        is about doing meaningful work with good people - without losing
        yourself in the process. And that’s a culture we’re proud to build,
        every single day.
            </p>
          </div>
        </div>

        <div className="hidden md:grid h-[75vh] max-h-[700px] grid-cols-3 grid-rows-4 gap-5">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl">
            <img
              src={images[3]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <img
              src={images[4]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
            <img
              src={images[5]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="md:hidden mt-8 overflow-hidden">
          <div ref={carouselRef} className="flex gap-4 w-max">
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-64 w-auto rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
