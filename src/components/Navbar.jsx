import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const NavLinks = ["HOME", "WHY EURADICLE", "OUR CAPABILITIES", "GROW WITH US"];

const capabilities = [
  "Leadership Development",
  "Consulting & Talent Management",
  "Assessment Development Centers",
  "Power Skills Development",
  "Digital & Business Transformation",
  "Commercial Sales Enablement",
  "DEI & Culture Building",
  "Creative Solutions",
];

function Navbar() {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const ctaRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  useGSAP(
    () => {
      const links = gsap.utils.toArray(".nav-link");
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
    { scope: navRef },
  );

  useGSAP(
    () => {
      if (openDropdown) {
        gsap.fromTo(
          dropdownRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
        );
      }
    },
    { dependencies: [openDropdown] },
  );

  useGSAP(
    () => {
      if (openMobile) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" },
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [openMobile] },
  );

  useGSAP(
    () => {
      const btn = ctaRef.current;
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          boxShadow: "0 0 24px var(--color-primary-mauve)",
          duration: 0.3,
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          boxShadow: "0 0 0px transparent",
          duration: 0.3,
        });
      });
    },
    { scope: navRef },
  );

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-[var(--color-brand-400)] shadow-sm z-50"
    >
      <div className="w-full flex items-center justify-between px-8 py-4">
        <div className="w-1/4 flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/Home/logo.webp"
              alt="Euradicle Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex w-1/2 items-center justify-center gap-12">
          {NavLinks.map((item) => {
            const isDropdown = item === "OUR CAPABILITIES";
            return (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => isDropdown && setOpenDropdown(true)}
              >
                <Link
                  to={
                    item === "HOME"
                      ? "/"
                      : item === "WHY EURADICLE"
                        ? "/why-euradicle"
                        : item === "OUR CAPABILITIES"
                          ? "/capabilities"
                          : item === "GROW WITH US"
                            ? "/grow-with-us"
                            : "/"
                  }
                  className="nav-link relative text-body text-[var(--color-primary-navy)]"
                >
                  {item}
                  <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex w-1/4 items-center justify-end">
          <a
            ref={ctaRef}
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-primary-mauve)] text-white text-subheading-sm"
          >
            GET IN TOUCH
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpenMobile(!openMobile)}
        >
          <span className="w-6 h-[2px] bg-[var(--color-primary-navy)]"></span>
          <span className="w-6 h-[2px] bg-[var(--color-primary-navy)]"></span>
          <span className="w-6 h-[2px] bg-[var(--color-primary-navy)]"></span>
        </button>
      </div>

      {openDropdown && (
        <div
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setOpenDropdown(false)}
          className="hidden md:block absolute left-0 top-full w-full"
        >
          <div
            ref={dropdownRef}
            className="w-full bg-black/80 text-white py-12"
          >
            <div className="w-full px-20 grid grid-cols-4 gap-10">
              {capabilities.map((cap) => (
                <a
                  key={cap}
                  href={`/capabilities/${cap
                    .toLowerCase()
                    .replace(/&/g, "")
                    .replace(/\s+/g, "-")}`}
                  className="text-body-sm hover:text-[var(--color-brand-500)] transition-colors duration-300"
                >
                  {cap}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden bg-[var(--color-bg-white)] px-6"
        style={{ height: 0 }}
      >
        <div className="flex flex-col gap-6 py-6">
          {NavLinks.map((item) => (
            <Link
              key={item}
              to={
                item === "HOME"
                  ? "/"
                  : item === "WHY EURADICLE"
                    ? "/why-euradicle"
                    : item === "OUR CAPABILITIES"
                      ? "/capabilities"
                      : item === "GROW WITH US"
                        ? "/grow-with-us"
                        : "/"
              }
              className="text-subheading text-[var(--color-primary-navy)]"
            >
              {item}
            </Link>
          ))}
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-primary-mauve)] text-white text-subheading-sm"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
