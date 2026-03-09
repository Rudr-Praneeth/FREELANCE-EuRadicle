import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Jobs() {
  const sectionRef = useRef(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isPdfExpanded, setIsPdfExpanded] = useState(false);

  const roles = [
    {
      id: "bde-dallas",
      title: "Business Development Executive",
      location: "Dallas, Texas",
      pdfPath: "/JDs/Business Development Executive.pdf",
    },
    {
      id: "ops-hyd",
      title: "Operations - Associate/Sr. Associate",
      location: "Hyderabad, India",
      pdfPath: "/JDs/Operations Associate.pdf",
    },
    {
      id: "content-hyd",
      title: "Content & Solutioning - Associate/Intern",
      location: "Hyderabad, India",
      pdfPath: "/JDs/Content & Solutioning Associate.pdf",
    },
    {
      id: "bde-delhi",
      title: "Business Development Executive",
      location: "Delhi, India",
      pdfPath: "/JDs/Business Development Executive.pdf",
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
          gsap.to(card, { y: -10, scale: 1.03, duration: 0.4, ease: "power3.out" });
        };
        const leave = () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power3.out" });
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
      if (e.key === "Escape") {
        setSelectedRole(null);
        setIsPdfExpanded(false);
      }
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
            performance coexists with balance and authenticity. You'll be
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
              onClick={() => {
                setSelectedRole(role);
                setIsPdfExpanded(false);
              }}
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
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-6"
            onClick={() => {
              setSelectedRole(null);
              setIsPdfExpanded(false);
            }}
          >
            <div
              className="bg-[var(--color-bg-white)] w-full max-w-6xl rounded-2xl p-6 md:p-10 relative shadow-xl flex flex-col max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setSelectedRole(null);
                  setIsPdfExpanded(false);
                }}
                className="absolute top-4 right-6 text-[var(--color-primary-navy)] text-3xl font-light hover:rotate-90 transition-transform duration-300"
                aria-label="Close"
              >
                ×
              </button>

              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7 flex flex-col">
                  <h2 className="text-h3 text-[var(--color-primary-navy)] mb-1">
                    {selectedRole.title}
                  </h2>
                  <p className="text-body-sm text-[var(--color-primary-mauve)] mb-6">
                    {selectedRole.location}
                  </p>
                  
                  <div className="block lg:hidden mb-4">
                    <button 
                      onClick={() => setIsPdfExpanded(!isPdfExpanded)}
                      className="w-full flex items-center justify-between px-5 py-3 bg-gray-50 border border-[var(--color-primary-mauve)] rounded-xl text-[var(--color-primary-navy)] font-medium"
                    >
                      <span>{isPdfExpanded ? "Close Job Description" : "View Job Description"}</span>
                      <span className={`transition-transform duration-300 ${isPdfExpanded ? 'rotate-180' : ''}`}>↓</span>
                    </button>
                  </div>

                  <div className={`
                    w-full border border-[var(--color-primary-mauve)] rounded-xl overflow-hidden transition-all duration-500 ease-in-out
                    ${isPdfExpanded ? 'h-[60vh] opacity-100 mt-2' : 'h-0 lg:h-[60vh] opacity-0 lg:opacity-100 lg:mt-0'}
                  `}>
                    <iframe 
                      src={selectedRole.pdfPath} 
                      className="w-full h-full"
                      title={`${selectedRole.title} Job Description`}
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-start pt-2">
                  <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-semibold text-[var(--color-primary-navy)] mb-6">Apply for this position</h4>
                    <form
                      className="space-y-5"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="space-y-1">
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          className="w-full border border-gray-300 rounded-xl px-4 py-3.5 bg-white focus:border-[var(--color-primary-mauve)] focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          className="w-full border border-gray-300 rounded-xl px-4 py-3.5 bg-white focus:border-[var(--color-primary-mauve)] focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          className="w-full border border-gray-300 rounded-xl px-4 py-3.5 bg-white focus:border-[var(--color-primary-mauve)] focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="w-full flex items-center justify-between border border-dashed border-gray-400 rounded-xl px-4 py-3.5 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                          <span className="text-gray-500 text-sm">Upload Resume (PDF/DOC)</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Browse</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            className="hidden"
                          />
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[var(--color-primary-mauve)] text-white py-4 rounded-xl font-bold tracking-wide hover:shadow-lg hover:brightness-110 transition-all active:scale-[0.98]"
                      >
                        SUBMIT APPLICATION
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}