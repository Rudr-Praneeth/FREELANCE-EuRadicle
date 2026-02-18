import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function OurApproach({ data }) {

  const sectionRef = useRef(null)
  const introRef = useRef(null)
  const rowsRef = useRef([])

  useGSAP(() => {

    const ctx = gsap.context(() => {

      const isMobile = window.innerWidth < 768

      gsap.from(introRef.current, {
        opacity: 0,
        y: isMobile ? 16 : 24,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        }
      })

      rowsRef.current.forEach((row) => {

        const number = row.querySelector(".approach-number")
        const content = row.querySelector(".approach-content")

        gsap.fromTo(
          number,
          {
            x: isMobile ? -30 : -60,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            }
          }
        )

        gsap.fromTo(
          content,
          {
            x: isMobile ? 30 : 60,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            }
          }
        )

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section
      ref={sectionRef}
      className="bg-white py-24 overflow-hidden"
    >

      <div className="mx-auto max-w-6xl px-6">

        <div
          ref={introRef}
          className="text-center"
        >

          <h2 className="text-h1 font-bold tracking-tight text-primary-navy">
            OUR <span className="text-primary-mauve">APPROACH</span>
          </h2>

          <p className="italic mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-primary-navy">
            Our approach is designed to move organizations beyond isolated
            people development initiatives toward sustainable leadership and
            capability transformation.
          </p>

        </div>



        <div className="mt-16 space-y-8">

          {data.map((item, i) => (

            <div

              key={i}

              ref={(el) => rowsRef.current[i] = el}

              className="
              grid
              grid-cols-[100px_1fr]
              md:grid-cols-[160px_1fr]
              gap-6
              md:gap-12
              "

            >

              <div className="
              approach-number
              text-[4rem]
              md:text-[7rem]
              font-bold
              leading-none
              text-primary-mauve
              ">

                {item.number}

              </div>



              <div className="approach-content">

                <h3 className="text-xl md:text-2xl font-semibold text-primary-mauve">

                  {item.title}

                </h3>

                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed">

                  {item.text}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}
