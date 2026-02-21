import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ResourcesModal({ modalType, closeModal }) {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current || !modalContentRef.current) return;

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
  }, []);

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
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-4"
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
            <label className="block text-body-sm mb-2">First Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-mauve"
            />
          </div>

          <div>
            <label className="block text-body-sm mb-2">Last Name</label>
            <input
              type="text"
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
          {modalType === "brochure" && (
            <div>
              <label className="block text-body-sm mb-2">
                Email
              </label>
              <input
                type="email"
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
  );
}