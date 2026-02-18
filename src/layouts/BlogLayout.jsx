import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";

gsap.registerPlugin(useGSAP);

function BlogLayout({ children, title, subtitle, date, category, image }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".blog-back", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".blog-meta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".blog-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".blog-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          heroRef.current,
          {
            scale: 1.05,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".blog-content > *",
          {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const img = heroRef.current;
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.08, duration: 0.6, ease: "power3.out" });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.6, ease: "power3.out" });
      });

      const btn = ctaRef.current;
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          y: -4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          duration: 0.3,
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          y: 0,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section>
      <section
        ref={containerRef}
        className="relative w-full min-h-screen bg-[var(--color-bg-white)] pt-32 pb-24 px-6 mt-25"
      >
        <div className="absolute top-[-20px] left-0 w-full h-[60vh] overflow-hidden">
          <img
            src={image}
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-[40px] px-10 md:px-16 py-8 shadow-xl relative z-10 -mt-[20vh]">
            <Link
              to="/"
              state={{ scrollTo: "blogs" }}
              className="blog-back inline-flex items-center text-sm text-[var(--color-primary-mauve)] mb-2"
            >
              ← Back
            </Link>

            <div className="blog-meta flex items-center gap-4 mb-2">
              <span className="px-4 py-1 rounded-full bg-gray-100 text-sm text-gray-600">
                {category}
              </span>
            </div>

            <h1 className="blog-title text-4xl md:text-5xl font-semibold text-[var(--color-primary-navy)] leading-tight">
              {title}
            </h1>

            <p className="blog-subtitle my-4 text-lg text-[var(--color-primary-navy)]/70 max-w-3xl italic">
              {subtitle}
            </p>

            <div className="overflow-hidden rounded-[30px]">
              <img
                ref={heroRef}
                src={image}
                alt="Blog"
                className="w-full h-[420px] object-cover transition-transform duration-500"
              />
            </div>

            <div
              ref={contentRef}
              className="blog-content mt-12 space-y-8 text-gray-700 text-lg leading-relaxed"
            >
              {children}
            </div>

            <div className="mt-16 flex justify-center">
              <button
                ref={ctaRef}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[var(--color-primary-mauve)] text-white font-semibold"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--color-primary-navy)] text-xl"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold text-[var(--color-primary-mauve)] mb-6">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-mauve)]"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-mauve)]"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-mauve)]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[var(--color-primary-mauve)] text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
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

export default BlogLayout;
