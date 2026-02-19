import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavLinks = [
  "HOME",
  "WHY EURADICLE",
  "OUR CAPABILITIES",
  "BROCHURES & E-CERTIFICATES",
  "GROW WITH US",
];

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

function Navbar({ openModal }) {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const brochureDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const ctaRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const closeBrochureTimeoutRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [openBrochureDropdown, setOpenBrochureDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (closeBrochureTimeoutRef.current)
        clearTimeout(closeBrochureTimeoutRef.current);
    };
  }, []);

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
      if (openDropdown && dropdownRef.current) {
        gsap.fromTo(
          dropdownRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
        );
      }
    },
    { dependencies: [openDropdown] },
  );

  useGSAP(
    () => {
      if (openBrochureDropdown && brochureDropdownRef.current) {
        gsap.fromTo(
          brochureDropdownRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
        );
      }
    },
    { dependencies: [openBrochureDropdown] },
  );

  useGSAP(
    () => {
      if (openMobile && mobileMenuRef.current) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" },
        );
      } else if (mobileMenuRef.current) {
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
      if (!btn) return;
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

  const handleNavClick = () => {
    setOpenMobile(false);
    setOpenDropdown(false);
    setOpenBrochureDropdown(false);
  };

  const openDropdownImmediate = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(true);
  };

  const closeDropdownDelayed = (delay = 120) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
      closeTimeoutRef.current = null;
    }, delay);
  };

  const openBrochureImmediate = () => {
    if (closeBrochureTimeoutRef.current) {
      clearTimeout(closeBrochureTimeoutRef.current);
      closeBrochureTimeoutRef.current = null;
    }
    setOpenBrochureDropdown(true);
  };

  const closeBrochureDelayed = (delay = 120) => {
    if (closeBrochureTimeoutRef.current)
      clearTimeout(closeBrochureTimeoutRef.current);
    closeBrochureTimeoutRef.current = setTimeout(() => {
      setOpenBrochureDropdown(false);
      closeBrochureTimeoutRef.current = null;
    }, delay);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-[var(--color-brand-400)] shadow-sm z-50"
    >
      <div className="w-full flex items-center justify-between px-6 py-4">
        <div className="flex w-1/2 md:w-1/6 items-center">
          <Link to="/" onClick={handleNavClick} className="flex items-center">
            <img
              src="/Home/logo.webp"
              alt="Euradicle Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex w-4/6 items-center justify-center gap-8">
          {NavLinks.map((item) => {
            const isCapabilities = item === "OUR CAPABILITIES";
            const isBrochure = item === "BROCHURES & E-CERTIFICATES";

            const to =
              item === "HOME"
                ? "/"
                : item === "WHY EURADICLE"
                  ? "/why-euradicle"
                  : item === "OUR CAPABILITIES"
                    ? "/capabilities"
                    : item === "BROCHURES & E-CERTIFICATES"
                      ? "/brochures"
                      : item === "GROW WITH US"
                        ? "/grow-with-us"
                        : "/";

            if (!isCapabilities && !isBrochure) {
              return (
                <div key={item}>
                  <Link
                    to={to}
                    onClick={handleNavClick}
                    className="nav-link relative text-body text-[var(--color-primary-navy)]"
                  >
                    {item === "WHY EURADICLE"
                      ? "Why EuRadicle"
                      : item.slice(0, 1) + item.slice(1).toLowerCase()}
                    <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
                  </Link>
                </div>
              );
            }
            if (isCapabilities) {
              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={openDropdownImmediate}
                  onMouseLeave={() => closeDropdownDelayed(120)}
                >
                  <Link
                    to={to}
                    className="nav-link relative text-body text-[var(--color-primary-navy)]"
                  >
                    Our Capabilities
                    <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
                  </Link>

                  {openDropdown && (
                    <div
                      className="fixed left-0 top-[72px] w-screen"
                      onMouseEnter={openDropdownImmediate}
                      onMouseLeave={() => closeDropdownDelayed(120)}
                    >
                      <div
                        ref={dropdownRef}
                        className="w-screen bg-black/80 text-white py-12"
                      >
                        <div className="max-w-screen-xl mx-auto px-20 grid grid-cols-4 gap-10">
                          {capabilities.map((cap) => {
                            const path = `/capabilities/${cap
                              .toLowerCase()
                              .replace(/&/g, "")
                              .replace(/\s+/g, "-")}`;
                            return (
                              <Link
                                key={cap}
                                to={path}
                                onClick={handleNavClick}
                                className="text-body-sm hover:text-[var(--color-brand-500)] transition-colors duration-300"
                              >
                                {cap}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                key={item}
                className="relative"
                onMouseEnter={openBrochureImmediate}
                onMouseLeave={() => closeBrochureDelayed(120)}
              >
                <Link
                  to={to}
                  className="nav-link relative text-body text-[var(--color-primary-navy)]"
                >
                  Brochures & E-Certificates
                  <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
                </Link>

                {openBrochureDropdown && (
                  <div
                    className="fixed left-0 top-[72px] w-screen"
                    onMouseEnter={openBrochureImmediate}
                    onMouseLeave={() => closeBrochureDelayed(120)}
                  >
                    <div
                      ref={brochureDropdownRef}
                      className="w-screen bg-black/80 text-white py-16"
                    >
                      <div className="max-w-screen-xl mx-auto px-20 flex flex-col gap-8">
                        <button
                          onClick={() => {
                            handleNavClick();
                            openModal("brochure");
                          }}
                          className="text-body hover:text-[var(--color-brand-500)] transition-colors duration-300 text-left"
                        >
                          Download Brochures
                        </button>

                        <button
                          onClick={() => {
                            handleNavClick();
                            openModal("certificate");
                          }}
                          className="text-body hover:text-[var(--color-brand-500)] transition-colors duration-300 text-left"
                        >
                          Download E-Certificates
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex w-1/6 items-center justify-end">
          <Link
            to="/get-in-touch"
            onClick={handleNavClick}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--color-primary-mauve)] text-white text-subheading-xs"
          >
            GET IN TOUCH
          </Link>
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

      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden bg-[var(--color-bg-white)]"
        style={{ height: 0 }}
      >
        <div className="flex flex-col gap-4 py-6 px-4">
          {NavLinks.map((item) => {
            const to =
              item === "HOME"
                ? "/"
                : item === "WHY EURADICLE"
                  ? "/why-euradicle"
                  : item === "OUR CAPABILITIES"
                    ? "/capabilities"
                    : item === "BROCHURES & E-CERTIFICATES"
                      ? "/brochures"
                      : item === "GROW WITH US"
                        ? "/grow-with-us"
                        : "/";
            return (
              <Link
                key={item}
                to={to}
                onClick={handleNavClick}
                className="text-body-sm text-[var(--color-primary-navy)]"
              >
                {item}
              </Link>
            );
          })}
          <Link
            to="/get-in-touch"
            onClick={handleNavClick}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-primary-mauve)] text-white text-subheading-sm"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
