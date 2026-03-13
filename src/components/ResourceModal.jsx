import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function ResourcesModal({ modalType, closeModal }) {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [certificateNumber, setCertificateNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [leadId, setLeadId] = useState(null);
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (modalType === "certificate") {
      setLoading(true);
      setStatus(null);

      const certificate_code = `${firstName}_${lastName}_${certificateNumber}`;

      try {
        const res = await fetch(
          "https://backend.euradicle.com/wp-json/custom/v1/certificate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              certificate_code,
            }),
          }
        );

        const data = await res.json();

        if (data.success) {
          window.open(data.download_url, "_blank");
          handleClose();
        } else {
          setStatus("Certificate not found");
        }
      } catch {
        setStatus("Network error");
      }

      setLoading(false);
    }

    if (modalType === "brochure") {
      setLoading(true);
      setStatus(null);

      try {
        const res = await fetch(
          "https://backend.euradicle.com/wp-json/custom/v1/brochure/request",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: `${firstName} ${lastName}`,
              email,
              phone,
            }),
          }
        );

        const data = await res.json();

        if (data.success) {
          setLeadId(data.lead_id);
          setStep("otp");
        } else {
          setStatus("Failed to send OTP");
        }
      } catch {
        setStatus("Network error");
      }

      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://backend.euradicle.com/wp-json/custom/v1/brochure/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lead_id: leadId,
            otp,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        window.open(data.download_url, "_blank");
        handleClose();
      } else {
        setStatus(data.message);
      }
    } catch {
      setStatus("Network error");
    }

    setLoading(false);
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

        {status && (
          <div className="mb-4 text-center text-red-600 text-sm">
            {status}
          </div>
        )}

        {modalType === "brochure" && step === "form" && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-body-sm mb-2">First Name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-body-sm mb-2">Last Name</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-body-sm mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-body-sm mb-2">Phone</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide bg-primary-mauve"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {modalType === "brochure" && step === "otp" && (
          <form className="space-y-5" onSubmit={handleVerifyOtp}>
            <div>
              <label className="block text-body-sm mb-2">Enter OTP</label>
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide bg-primary-mauve"
            >
              {loading ? "Verifying..." : "Verify & Download"}
            </button>
          </form>
        )}

        {modalType === "certificate" && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-body-sm mb-2">First Name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-body-sm mb-2">Last Name</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-body-sm mb-2">
                Certificate Number
              </label>
              <input
                type="text"
                required
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide bg-primary-purple"
            >
              {loading ? "Checking..." : "Download"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}