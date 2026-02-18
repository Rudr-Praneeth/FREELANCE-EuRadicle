import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function CapabilityLayout({
  title,
  subtitle,
  image,
  intro,
  cards = [],
  children,
}) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".cap-banner", {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      if (titleRef.current) {
        const text = title;
        titleRef.current.textContent = "";
        tl.to(
          {},
          {
            duration: text.length * 0.04,
            ease: "none",
            onUpdate: function () {
              const progress = Math.floor(this.progress() * text.length);
              titleRef.current.textContent = text.slice(0, progress);
            },
          },
          "-=0.4"
        );
      }

      if (subtitleRef.current) {
        const sub = subtitle;
        subtitleRef.current.textContent = "";
        tl.to(
          {},
          {
            duration: sub.length * 0.02,
            ease: "none",
            onUpdate: function () {
              const progress = Math.floor(this.progress() * sub.length);
              subtitleRef.current.textContent = sub.slice(0, progress);
            },
          },
          "-=0.6"
        );
      }

      gsap.from(".cap-content > *", {
        opacity: 0,
        y: 32,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.4,
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="bg-[var(--color-bg-white)]">
      <div className="cap-banner relative w-full h-[70vh] overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-[var(--color-primary-navy)]/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-10">
          <h1
            ref={titleRef}
            className="text-h1 text-white mb-6 max-w-4xl"
          />
          <p
            ref={subtitleRef}
            className="text-body-lg text-white max-w-3xl"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-body-sm text-[var(--color-primary-navy)] border border-[var(--color-primary-navy)] px-5 py-2 rounded-full transition-all duration-300 hover:bg-[var(--color-primary-navy)] hover:text-white"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="cap-content text-body text-[var(--color-primary-navy)] space-y-12">
          {intro && (
            <p className="text-body-lg leading-relaxed">
              {intro}
            </p>
          )}

          {cards.length > 0 && (
            <div className="space-y-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="group border border-[var(--color-primary-navy)]/10 rounded-2xl overflow-hidden bg-white transition-all duration-500 hover:shadow-xl"
                >
                  <div className="p-8 cursor-pointer">
                    <h3 className="text-subheading-lg text-[var(--color-primary-mauve)]">
                      {card.heading}
                    </h3>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[500px]">
                    <div className="px-8 pb-8 text-body leading-relaxed text-[var(--color-primary-navy)]">
                      {card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {children}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[var(--color-primary-purple)] text-white text-subheading-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--color-primary-navy)] text-xl"
            >
              ×
            </button>
            <h3 className="text-subheading-lg text-[var(--color-primary-mauve)] mb-6">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-purple)]"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-purple)]"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-purple)]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[var(--color-primary-purple)] text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CapabilityLayout;
