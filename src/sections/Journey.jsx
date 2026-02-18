import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Journey() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".jr-text", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".jr-card", {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".jr-cards",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full bg-[var(--color-bg-white)]">
      <div className="max-w-6xl mx-auto px-4 pb-10 pt-24">
        <h1 className="text-h1 jr-text text-[var(--color-brand-600)] mb-4 text-center">
          Begin Your
        </h1>
        <h1 className="text-h1 jr-text text-[var(--color-primary-purple)] mb-16 text-center">
          Leadership Journey
        </h1>

        <div className="jr-cards grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="jr-card rounded-2xl border border-2 border-[var(--color-bg-muted)] bg-[var(--color-bg-white)] p-8 text-center">
            <h3 className="text-h6 mb-4">Call us on</h3>
            <p className="text-body-sm">+91 40310 03306</p>
            <p className="text-body-sm">+91 96611 88313</p>
          </div>

          <div className="jr-card rounded-2xl border border-2 border-[var(--color-bg-muted)] bg-[var(--color-bg-white)] p-8 text-center">
            <h3 className="text-h6 mb-4">Email us at</h3>
            <p className="text-body-sm">info@euradicle.com</p>
          </div>

          <div className="jr-card rounded-2xl border border-2 border-[var(--color-bg-muted)] bg-[var(--color-bg-white)] p-8 text-center">
            <h3 className="text-h6 mb-4">Find us</h3>
            <p className="text-body-sm">
              2nd floor, Building no: 8-2-120/86/5/B,
              <br />
              Road No.3, Banjara Hills, Hyderabad,
              <br />
              Telangana – 500034
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
