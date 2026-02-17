import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Interns() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const interns = [
    {
      text: "What really stood out to me at EuRadicle is how people-focused the culture is. Even during my internship, I never felt like I was “just an intern.” My ideas were heard, my suggestions were considered, and I was included in real discussions. The team is very open and supportive, which made it easy for me to learn and try new things without being afraid of making mistakes. With the guidance and encouragement, I received, I slowly moved from just learning to actually taking ownership of my work. Because of that trust and support, becoming a full-time team member felt like a natural step, and it continues to motivate me to grow and do better every day.",
      name: "Maturi Sevitha",
      role: "Associate – Creative Solutions"
    },
    {
      text: "My journey with EuRadicle began as a Finance & Administration Intern, where I gained hands-on exposure to both financial management and administrative operations. During this phase, I worked closely with the leadership and operations teams, supporting financial processes, compliance, vendor coordination, documentation, and day-to-day administrative activities that ensured smooth organizational functioning. This holistic experience helped me understand how financial discipline, structured processes, and efficient administration together enable seamless client delivery and sustainable growth, laying a strong foundation for my professional development and eventually evolving into a full-time role where I continue to strengthen and streamline both finance and administrative operations across the organization.",
      name: "Lokesh Akujo",
      role: "Sr. Associate – Finance & Admin"
    },
    {
      text: "I joined EuRadicle as an intern expecting a learning opportunity, but it quickly became a phase of accelerated growth and a defining career milestone. From day one, I was treated not as “just an intern,” but as a contributor trusted with real work, real clients, and meaningful impact. What makes EuRadicle stand out is its vibrant, collaborative culture where ideas are valued, creativity thrives, and every challenge pushes you to think beyond the obvious. Even while balancing exams and classes, the team ensured I never had to choose between academics and professional growth, offering flexibility and genuine support throughout. During my internship, I worked on innovation-driven projects that expanded my thinking across strategy, creativity, and solution design, and that trust and exposure eventually led to my transition into a Senior Associate – Content Development & Solutioning. Today, I design capability programs and create research-backed learning solutions to address complex talent challenges for large organizations, contributing to enterprise-level impact. At EuRadicle, early talent isn’t just managed, it is mentored, empowered, and accelerated.",
      name: "Saba Siddique",
      role: "Sr. Associate – Content Development & Solutioning"
    }
  ]

  useGSAP(
    () => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        gsap.from(card, {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        })

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="w-full pb-48 px-6"
    >
      <div className="max-w-4xl mx-auto text-center mb-2">
        <h1 className="text-h1 mb-6">
          <span className="text-[var(--color-primary-navy)]">
            EARLY
          </span>{" "}
          <span className="text-[var(--color-primary-mauve)]">
            TALENT
          </span>
        </h1>

        <p className="text-body-lg italic">
          At EuRadicle, our Early Talent & Internship programs are built to
          give emerging professionals more than just exposure — we provide a
          true launchpad for their careers. From day one, interns are treated
          as contributors, not observers, gaining hands-on experience across
          live projects, client engagements, research, facilitation support,
          and strategic thinking. We create a space where curiosity is
          encouraged, ownership is trusted, and learning is continuous.
          Through real responsibility, structured feedback, and close
          collaboration with experienced consultants, early talent develops
          the confidence, clarity, and professional maturity needed to
          transition seamlessly into full-time roles and long-term careers.
        </p>
      </div>

      <div className="relative bottom-35">
        {interns.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-4xl bg-[var(--color-bg-muted)] rounded-2xl px-10 py-14 shadow-xl">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-brand-600" />
              </div>

              <p className="text-body italic text-center mb-10">
                “{item.text}”
              </p>

              <div className="text-right">
                <p className="text-subheading text-[var(--color-primary-navy)]">
                  {item.name}
                </p>
                <p className="text-body-sm text-[var(--color-primary-mauve)]">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
