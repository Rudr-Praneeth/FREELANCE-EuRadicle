// src/sections/Story1.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Catalyst } from "../data/home";

gsap.registerPlugin(ScrollTrigger);

export default function Story1() {
  const parasRef = useRef([]);
  const outcomesRef = useRef([]);
  const imagesRef = useRef([]);
  const taglineRef = useRef(null);
  const subtagRef = useRef(null);

  useEffect(() => {
    const typewriter = (el, text, callback) => {
      let idx = 0;
      const type = () => {
        if (idx <= text.length) {
          el.textContent = text.slice(0, idx);
          idx++;
          setTimeout(type, 60);
        } else if (callback) callback();
      };
      type();
    };

    typewriter(taglineRef.current, Catalyst.tagline, () => {
      typewriter(subtagRef.current, Catalyst.subtag);
    });

    parasRef.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: { trigger: el, start: "top 80%" },
          duration: 1,
          delay: idx * 0.2,
        }
      );
    });

    outcomesRef.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: { trigger: el, start: "top 80%" },
          duration: 1,
          delay: idx * 0.2,
        }
      );
    });

    imagesRef.current.forEach((el, idx) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(imagesRef.current[0], { x: -120, y: 120, duration: 0.5 });
        gsap.to(imagesRef.current[1], { x: 120, y: 120, duration: 0.5 });
        gsap.to(imagesRef.current[2], { x: 0, y: -60, duration: 0.5 });
      });
      el.addEventListener("mouseleave", () => {
        imagesRef.current.forEach((img) =>
          gsap.to(img, { x: 0, y: 0, duration: 0.5 })
        );
      });
    });
  }, []);

  return (
    <section className="w-full">
      <div
        className="relative w-full h-[400px] md:h-[500px] mt-[84px] bg-center bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Catalyst.bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <h1 ref={taglineRef} className="text-2xl md:text-4xl text-white font-heading"></h1>
          <h2 ref={subtagRef} className="text-lg md:text-xl text-white font-heading"></h2>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 flex flex-col gap-4">
          <h2 className="text-h4 font-heading text-mauve">Introduction</h2>
          {Catalyst.paras.map((para, idx) => (
            <p
              key={idx}
              ref={(el) => (parasRef.current[idx] = el)}
              className="text-body text-primary-navy"
            >
              {para}
            </p>
          ))}

          <h2 className="mt-6 text-h4 font-heading text-mauve">Outcomes</h2>
          <ul className="flex flex-col gap-2">
            {Catalyst.outcomes.map((outcome, idx) => (
              <li
                key={idx}
                ref={(el) => (outcomesRef.current[idx] = el)}
                className="text-body text-primary-navy"
              >
                {outcome}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-body text-primary-navy">{Catalyst.outro}</p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center md:items-end relative h-[400px]">
          {Catalyst.hoveerImages.map((img, idx) => {
            const isSide = idx === 0 || idx === 2;
            return (
              <img
                key={idx}
                ref={(el) => (imagesRef.current[idx] = el)}
                src={img}
                className={`absolute top-0 left-10 w-[300px] h-[300px] rounded-lg border border-gray-200 shadow-lg cursor-pointer transition-all duration-500 object-cover object-center`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
