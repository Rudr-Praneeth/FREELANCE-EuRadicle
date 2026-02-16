import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function CapabilityLayout({ title, subtitle, image, children }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const navigate = useNavigate();

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
          "-=0.3",
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
          "-=0.2",
        );
      }

      tl.from(
        ".cap-content > *",
        {
          opacity: 0,
          y: 32,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="bg-[var(--color-bg-white)]">
      <div className="cap-banner relative w-full h-[70vh] overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-[var(--color-primary-navy)]/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 ref={titleRef} className="text-h1 text-white mb-6 max-w-4xl"></h1>

          <p
            ref={subtitleRef}
            className="text-body-lg text-white max-w-3xl"
          ></p>
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
        <div className="cap-content text-body text-[var(--color-primary-navy)] space-y-8">
          {children}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[var(--color-primary-purple)] text-white text-subheading-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CapabilityLayout;
