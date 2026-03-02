import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeyondBusiness() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const textRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".bb-fade", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(
        wordsRef.current,
        { color: "rgba(0,0,0,0.3)" },
        {
          color: "var(--color-primary-navy)",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );

      // const totalWidth = carouselRef.current.scrollWidth / 2;

      // const carouselTween = gsap.to(carouselRef.current, {
      //   x: -totalWidth,
      //   duration: 25,
      //   ease: "none",
      //   repeat: -1,
      // });

      // carouselRef.current.addEventListener("mouseenter", () => {
      //   carouselTween.pause();
      // });

      // carouselRef.current.addEventListener("mouseleave", () => {
      //   carouselTween.resume();
      // });
    },
    { scope: sectionRef },
  );

  const statement =
    "We believe that growth carries a responsibility - to give back to the world that enables it.";

  const images = [
    // "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    // "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    // "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
    // "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    // "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bb-fade">
            <h1 className="text-h1 text-[var(--color-primary-mauve)] mb-6">
              BEYOND BUSINESS
            </h1>
            <h2 ref={textRef} className="text-h3 leading-relaxed">
              {statement.split(" ").map((word, i) => (
                <span
                  key={i}
                  ref={(el) => (wordsRef.current[i] = el)}
                  className="inline-block mr-1"
                  style={{ color: "rgba(0,0,0,0.3)" }}
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <div className="bb-fade italic">
            <p className="text-body mb-4">
              At EuRadicle, every program we deliver carries a commitment beyond
              business impact. As we help organisations build capability and
              leadership, we also invest in life beyond the workplace -
              supporting environmental sustainability through tree plantation
              and extending care to old age homes and orphanages through
              essential contributions. For us, impact is both immediate and
              long-term: creating a greener tomorrow while standing with those
              who need support today. It reflects who we are - a firm that
              believes progress matters most when it is shared, intentional, and
              rooted in empathy.
            </p>
          </div>
        </div>

        {/* <div className="mt-14 overflow-hidden py-4">
          <div ref={carouselRef} className="flex gap-6 w-max">
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-32 sm:h-36 md:h-40 w-auto rounded-xl object-cover transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
