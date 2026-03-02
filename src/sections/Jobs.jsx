import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Jobs() {
  const sectionRef = useRef(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: "bde-dallas",
      title: "Business Development Executive",
      location: "Dallas, Texas",
      description:
        "Drive strategic growth initiatives, build client relationships, and identify new market opportunities. You will work closely with leadership to expand market presence, develop new revenue streams, and build long-term enterprise partnerships. The role requires strong communication skills, strategic thinking, and a proactive approach to identifying growth opportunities.",
    },
    {
      id: "ops-hyd",
      title: "Operations - Associate/Sr. Associate",
      location: "Hyderabad, India",
      description:
        "Manage internal workflows, streamline processes, and ensure operational excellence across teams. You will coordinate cross-functional teams, optimize reporting systems, and implement scalable processes that improve efficiency and performance across departments.",
    },
    {
      id: "content-hyd",
      title: "Content & Solutioning - Associate/Intern",
      location: "Hyderabad, India",
      description:
        "Develop research-driven content and support consulting solution design for global clients. Responsibilities include conducting structured research, synthesizing insights, preparing executive-ready documents, and supporting client-facing solution development initiatives.",
    },
    {
      id: "bde-delhi",
      title: "Business Development Executive",
      location: "Delhi, India",
      description:
        "Lead regional expansion efforts and manage key enterprise partnerships. You will identify new business channels, nurture strategic alliances, and drive revenue growth through consultative selling and strong stakeholder engagement.",
    },
  ];

  useGSAP(
    (context) => {
      const q = context.selector;
      const cards = q(".jobs-card");

      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        context.add(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedRole(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
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

          <p className="italic text-body-sm mt-6 max-w-5xl mx-auto jobs-animate">
            Join a global consulting firm where impact is intentional and growth
            is personal. At EuRadicle, curious minds come together in a culture
            of trust, collaboration, and continuous learning, where high
            performance coexists with balance and authenticity. You’ll be
            encouraged to think deeply, contribute meaningfully, and take
            ownership of the impact you create. This is a place where your ideas
            matter, your growth is supported, and your individuality is
            respected. Grow with purpose. Lead with intent.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role)}
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

      {selectedRole &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6"
            onClick={() => setSelectedRole(null)}
          >
            <div
              className="bg-[var(--color-bg-white)] w-full max-w-5xl rounded-2xl p-10 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-6 right-6 text-[var(--color-primary-navy)] text-2xl"
                aria-label="Close"
              >
                ×
              </button>

              <div className="grid md:grid-cols-2 gap-10 max-h-[80vh]">
                <div className="overflow-y-auto pr-4">
                  <h2 className="text-h3 text-[var(--color-primary-navy)] mb-2">
                    {selectedRole.title}
                  </h2>

                  <p className="text-body-sm text-[var(--color-primary-mauve)] mb-6">
                    {selectedRole.location}
                  </p>

                  <p className="text-body-lg whitespace-pre-line">
                    {selectedRole.description}
                  </p>
                </div>

                <div className="overflow-y-auto">
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full border border-[var(--color-primary-mauve)] rounded-xl px-4 py-3 bg-transparent focus:outline-none"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full border border-[var(--color-primary-mauve)] rounded-xl px-4 py-3 bg-transparent focus:outline-none"
                    />

                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                      className="w-full border border-[var(--color-primary-mauve)] rounded-xl px-4 py-3 bg-transparent focus:outline-none"
                    />

                    <label className="w-full flex items-center justify-center border border-[var(--color-primary-mauve)] rounded-xl px-4 py-3 cursor-pointer">
                      <span className="text-gray-400">
                        Attach your resume
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                      />
                    </label>

                    <button
                      type="submit"
                      className="w-full bg-[var(--color-primary-mauve)] text-white py-3 rounded-xl hover:opacity-90 transition"
                    >
                      APPLY
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}