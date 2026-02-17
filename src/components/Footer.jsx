import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const links = gsap.utils.toArray(".footer-link");
      links.forEach((link) => {
        const underline = link.querySelector(".underline");
        link.addEventListener("mouseenter", () => {
          gsap.killTweensOf(underline);
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.45,
            ease: "power3.out",
            transformOrigin: "left",
          });
        });
        link.addEventListener("mouseleave", () => {
          gsap.killTweensOf(underline);
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.35,
            ease: "power3.inOut",
            transformOrigin: "right",
          });
        });
      });
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="bg-[var(--color-bg-muted)] text-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src="/Home/logo.webp"
            alt="EuRadicle Logo"
            className="w-40 h-auto"
          />

          <p className="text-body-sm max-w-xs">
            truly transforming developing talent that performs with purpose and
            leads with impact turning your people into your most enduring edge.
          </p>

          <div className="flex gap-6 text-xl">
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-colors duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-subheading mb-8 text-center">Our Capabilities</h3>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-body-sm">
            <Link
              to="/capabilities/leadership-development"
              className="footer-link relative"
            >
              Leadership Development
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link
              to="/capabilities/consulting-talent-management"
              className="footer-link relative"
            >
              Consulting & Talent Management
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link
              to="/capabilities/assessment-development-centers"
              className="footer-link relative"
            >
              Assessment Development Centers
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link
              to="/capabilities/power-skills-development"
              className="footer-link relative"
            >
              Power Skills Development
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link
              to="/capabilities/digital-business-transformation"
              className="footer-link relative"
            >
              Digital & Business Transformation
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link
              to="/capabilities/commercial-sales-enablement"
              className="footer-link relative"
            >
              Commercial Sales Enablement
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link
              to="/capabilities/creative-solutions"
              className="footer-link relative"
            >
              Creative Solutions
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link
              to="/capabilities/dei-culture-building"
              className="footer-link relative"
            >
              DEI & Culture Building
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-subheading mb-8">Insights</h3>

          <div className="flex flex-col gap-4 text-body-sm">
            <Link to="/blogs/power-skills" className="footer-link relative">
              Power Skills
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link to="/blogs/ai-ethics" className="footer-link relative">
              AI & Ethics
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>

            <Link to="/blogs/chatai-at" className="footer-link relative">
              Capability Building
              <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
