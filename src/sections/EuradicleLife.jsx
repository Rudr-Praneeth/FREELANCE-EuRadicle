import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function EuradicleLife() {
  const sectionRef = useRef(null);

  const images = [
    "/Celebrations/compressed-celeb3.jpeg",
    "/Celebrations/Start.jpeg",
    "/Celebrations/compressed-celeb4.jpg",
    "/Celebrations/compressed-celeb5.jpg",
    "/Celebrations/compressed-celeb6.jpg",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] py-12 sm:py-16 lg:py-20 mt-6 max-[660px]:mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-h1 sm:text-h2 lg:text-h1 font-semibold mb-4">
            <span className="text-[var(--color-primary-navy)]">LIFE AT </span>
            <span className="text-[var(--color-primary-mauve)]">EURADICLE</span>
          </h1>

          <p className="italic text-body-sm mt-6 max-w-6xl mx-auto leading-relaxed">
            We believe great work comes from people who feel valued, not burned
            out. At EuRadicle, impact begins with balance, trust, and belonging.
            Our culture champions curiosity, open dialogue, and individuality
            over hierarchy. We create space for growth, shared wins, and
            meaningful pauses, so you can shape leaders and organisations while
            staying true to yourself.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-5 auto-rows-[250px] lg:auto-rows-[300px]">
          <div className="col-span-7 row-span-2 overflow-hidden rounded-3xl">
            <img
              src={images[1]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-5 overflow-hidden rounded-3xl">
            <img
              src={images[3]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-5 overflow-hidden rounded-3xl">
            <img
              src={images[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-8 row-span-2 overflow-hidden rounded-3xl">
            <img
              src={images[2]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-4 row-span-2 overflow-hidden rounded-3xl">
            <img
              src={images[4]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
