import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function EuradicleLife() {
  const sectionRef = useRef(null);

  const images = [
    "/Celebrations/compressed-celeb3.jpeg",
    "/Celebrations/compressed-celeb2.jpg",
    "/Celebrations/compressed-celeb4.jpg",
    "/Celebrations/compressed-celeb5.jpg",
    "/Celebrations/compressed-celeb6.jpg",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] py-12 sm:py-16 lg:py-20 mt-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TEXT SECTION */}
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="text-[var(--color-primary-navy)]">
              LIFE AT{" "}
            </span>
            <span className="text-[var(--color-primary-mauve)]">
              EURADICLE
            </span>
          </h1>

          <p className="italic text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            We believe the best work comes from people who feel valued,
            supported, and truly seen—not from burnout. We believe meaningful
            impact begins with balance, trust, and a deep sense of belonging.
            Our culture is rooted in curiosity, kindness, and open
            conversations, where ideas matter more than hierarchy and
            individuality is celebrated. We make space for growth, honest
            dialogue, shared wins, and personal pauses—because success should
            feel fulfilling, not draining. Here, you can build leaders, shape
            organizations, and create real change—while staying connected to
            who you are.
          </p>
        </div>

        {/* IMAGE GRID - Hidden on small screens */}
        <div className="hidden md:grid grid-cols-12 gap-5 auto-rows-[250px] lg:auto-rows-[300px]">
          
          <div className="col-span-7 row-span-2 overflow-hidden rounded-3xl">
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-5 overflow-hidden rounded-3xl">
            <img
              src={images[3]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-5 overflow-hidden rounded-3xl">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-8 row-span-2 overflow-hidden rounded-3xl">
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-4 row-span-2 overflow-hidden rounded-3xl">
            <img
              src={images[4]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
