import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef(null)
  const linesRef = useRef([])
  const logoRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      tl.from(logoRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      }).from(
        linesRef.current,
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
        },
        "-=0.6"
      )
    },
    { scope: sectionRef }
  )

  const lines = [
    "EuRadicle is a global talent and capability consulting firm that partners with organizations to build leadership depth, accelerate performance, and enable sustainable transformation.",
    "We work at the intersection of strategy, leadership, and human capability, helping enterprises translate intent into execution through consulting-led learning journeys, assessments, and culture-shaping interventions.",
    "With consultants and delivery capabilities across India, the United States, and the Middle East, we support organizations across industries in solving complex people and performance challenges.",
    "Our work is grounded in real business contexts, driven by data and insight, and designed to create measurable impact by building leaders, teams, and systems that are future-ready, resilient, and aligned to organizational goals.",
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        
        <div className="flex justify-center items-center">
          <img
            ref={logoRef}
            src="/Home/logo.webp"
            alt="EuRadicle Logo"
            className="w-48 md:w-56"
          />
        </div>

        {/* RIGHT: Text aligned left */}
        <div className="space-y-4 text-left">
          {lines.map((line, i) => (
            <p
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              className="text-body-lg text-primary-navy"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
