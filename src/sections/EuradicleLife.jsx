import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function EuradicleLife() {
const headingRef = useRef(null);

useEffect(() => {
gsap.fromTo(
headingRef.current,
{ y: 40, opacity: 0 },
{ y: 0, opacity: 1, duration: 1, ease: "power3.out" },
);
}, []);

return ( <section className="w-full bg-[var(--color-bg-white)] overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 xl:py-32"> <div className="w-full max-w-5xl mx-auto text-center"> <h1
       ref={headingRef}
       className="text-h1 sm:text-h2 md:text-h1 mb-4"
     > <span className="text-[var(--color-primary-navy)]">LIFE AT</span>{" "} <span className="text-[var(--color-primary-mauve)]">EURADICLE</span> </h1>

    <div className="italic text-body sm:text-body-lg space-y-4 max-w-4xl mx-auto">
      <p>
        At EuRadicle, we believe great work doesn’t come from burnout - it
        comes from balance, belonging, and a bit of joy along the way. We
        are deeply committed to building leaders, shaping organisations, and
        creating impact that truly matters. At the same time, we place equal
        importance on the people doing that work, because sustainable impact
        begins with people who feel valued, trusted, and supported. Our
        culture is driven by curiosity, purpose, and ownership. Hierarchies
        don’t define us - ideas, intent, and thoughtful conversations do.
        You’ll find open dialogue, respectful disagreements, and a constant
        appetite for learning. EuRadicle is home to thinkers, facilitators,
        consultants, and creators who bring their authentic selves to work,
        celebrate individuality, and understand that growth looks different
        for everyone - and that’s perfectly okay. While we take our work
        seriously, we don’t take ourselves too seriously. We make space for
        personal time, passions, and pauses, celebrate both small wins and
        big milestones, and share moments beyond meetings. Life at EuRadicle
        is about doing meaningful work with good people - without losing
        yourself in the process. And that’s a culture we’re proud to build,
        every single day.
      </p>
    </div>
  </div>

  <div className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px] lg:auto-rows-[400px]">
    <div className="overflow-hidden rounded-2xl sm:row-span-2">
      <img
        src="/Celebrations/compressed-celeb2.jpeg"
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>

    <div className="overflow-hidden rounded-2xl">
      <img
        src="/Celebrations/compressed-celeb1.jpeg"
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>

    <div className="overflow-hidden rounded-2xl">
      <img
        src="/Celebrations/compressed-celeb3.jpeg"
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>

    <div className="overflow-hidden rounded-2xl sm:col-span-2">
      <img
        src="/Celebrations/compressed-celeb4.jpeg"
        alt=""
        className="w-full h-full object-cover object-bottom transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
</section>

);
}
