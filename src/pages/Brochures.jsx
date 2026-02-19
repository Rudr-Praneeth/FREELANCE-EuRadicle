import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ResourcesSection({ modalType, closeModal, openModal }) {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(blocksRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    if (!modalType || !modalRef.current || !modalContentRef.current) return;

    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      modalContentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [modalType]);

  const handleClose = () => {
    if (!modalRef.current) return;

    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: closeModal,
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-4xl min-[992px]:max-w-5xl min-[1200px]:max-w-6xl mx-auto py-12 px-5 min-[600px]:py-16 min-[768px]:py-20 min-[992px]:py-24 min-[1200px]:py-28"
      >
        <h1 className="text-h1 text-center mb-10 text-[clamp(28px,5vw,56px)] leading-tight">
          Download <span className="text-primary-mauve">Resources</span>
        </h1>

        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-8">
          <div
            ref={(el) => (blocksRef.current[0] = el)}
            className="bg-bg-muted rounded-2xl p-8 min-[768px]:p-10 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h2 className="text-h3 mb-4">Brochures</h2>
              <p className="text-body-lg text-primary-navy mb-6 leading-relaxed">
                Explore our detailed brochures to understand our consulting
                solutions, leadership programs, capability-building frameworks,
                and transformation journeys.
              </p>
            </div>
            <button
              onClick={() => openModal("brochure")}
              className="inline-block text-center px-6 py-3 rounded-lg bg-primary-mauve text-white font-semibold uppercase tracking-wide hover:opacity-90 transition"
            >
              Download Brochure
            </button>
          </div>

          <div
            ref={(el) => (blocksRef.current[1] = el)}
            className="bg-bg-muted rounded-2xl p-8 min-[768px]:p-10 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h2 className="text-h3 mb-4">E-Certificates</h2>
              <p className="text-body-lg text-primary-navy mb-6 leading-relaxed">
                Access your program completion certificates issued after
                successful participation in our engagements.
              </p>
            </div>
            <button
              onClick={() => openModal("certificate")}
              className="inline-block text-center px-6 py-3 rounded-lg bg-primary-purple text-white font-semibold uppercase tracking-wide hover:opacity-90 transition"
            >
              Download Certificate
            </button>
          </div>
        </div>
      </section>

      {modalType && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        >
          <div
            ref={modalContentRef}
            className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-2xl relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-primary-navy text-xl"
            >
              ×
            </button>

            <h3 className="text-h4 mb-6 text-center">
              {modalType === "brochure"
                ? "Download Brochure"
                : "Download E-Certificate"}
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-body-sm mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-mauve"
                />
              </div>

              <div>
                <label className="block text-body-sm mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-mauve"
                />
              </div>

              {modalType === "certificate" && (
                <div>
                  <label className="block text-body-sm mb-2">
                    Certificate Number
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-purple"
                  />
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide ${
                  modalType === "brochure"
                    ? "bg-primary-mauve"
                    : "bg-primary-purple"
                } hover:opacity-90 transition`}
              >
                Download
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
