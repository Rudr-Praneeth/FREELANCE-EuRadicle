import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  const closeTimeoutRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const resetScrolls = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch {}
    try {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch {}
    try {
      document.querySelectorAll("*").forEach((el) => {
        try {
          const s = getComputedStyle(el);
          if (s.overflowX === "auto" || s.overflowX === "scroll" || s.overflowX === "overlay") el.scrollLeft = 0;
          if (s.overflowY === "auto" || s.overflowY === "scroll" || s.overflowY === "overlay") el.scrollTop = 0;
        } catch {}
      });
    } catch {}
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useGSAP(
    () => {
      const links = gsap.utils.toArray(".nav-link");
      links.forEach((link) => {
        const underline = link.querySelector(".underline");
        link.addEventListener("mouseenter", () => {
          gsap.killTweensOf(underline);
          gsap.to(underline, { scaleX: 1, duration: 0.45, ease: "power3.out", transformOrigin: "left" });
        });
        link.addEventListener("mouseleave", () => {
          gsap.killTweensOf(underline);
          gsap.to(underline, { scaleX: 0, duration: 0.35, ease: "power3.inOut", transformOrigin: "right" });
        });
      });
    },
    { scope: navRef },
  );

  useGSAP(
    () => {
      if (openDropdown && dropdownRef.current) {
        gsap.fromTo(dropdownRef.current, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
      }
    },
    { dependencies: [openDropdown] },
  );

  useGSAP(
    () => {
      if (openMobile && mobileMenuRef.current) {
        gsap.fromTo(mobileMenuRef.current, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" });
      } else if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.35, ease: "power3.inOut" });
      }
    },
    { dependencies: [openMobile] },
  );

  useGSAP(
    () => {
      const btn = ctaRef.current;
      if (!btn) return;
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { boxShadow: "0 0 24px var(--color-primary-mauve)", duration: 0.3 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { boxShadow: "0 0 0px transparent", duration: 0.3 });
      });
    },
    { scope: navRef },
  );

  const handleNavClick = () => {
    setOpenMobile(false);
    setOpenDropdown(false);
    setTimeout(() => resetScrolls(), 60);
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

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-[var(--color-brand-400)] shadow-sm z-50">
      <div className="w-full flex items-center justify-between px-6 py-4">
        <div className="w-1/4 flex items-center">
          <Link to="/" onClick={handleNavClick} className="flex items-center">
            <img src="/Home/logo.webp" alt="Euradicle Logo" className="h-12 w-auto ml-4" />
          </Link>
        </div>

        <nav className="hidden md:flex w-1/2 items-center justify-center gap-12" aria-label="Primary navigation">
          {NavLinks.map((item) => {
            const isDropdown = item === "OUR CAPABILITIES";
            const to =
              item === "HOME"
                ? "/"
                : item === "WHY EURADICLE"
                ? "/why-euradicle"
                : item === "OUR CAPABILITIES"
                ? "/capabilities"
                : item === "GROW WITH US"
                ? "/grow-with-us"
                : "/";

            if (!isDropdown) {
              return (
                <div key={item}>
                  <Link to={to} onClick={handleNavClick} className="nav-link relative text-body text-[var(--color-primary-navy)]">
                    {item}
                    <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
                  </Link>
                </div>
              );
            }

            return (
              <div
                key={item}
                className="relative"
                onMouseEnter={openDropdownImmediate}
                onMouseLeave={() => closeDropdownDelayed(120)}
                onFocus={openDropdownImmediate}
                onBlur={() => closeDropdownDelayed(120)}
              >
                <Link to={to} aria-haspopup="menu" aria-expanded={openDropdown} className="nav-link relative text-body text-[var(--color-primary-navy)]">
                  {item}
                  <span className="underline absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-primary-mauve)] scale-x-0"></span>
                </Link>

                {openDropdown && (
                  <div className="fixed left-0 top-[72px] w-screen" onMouseEnter={openDropdownImmediate} onMouseLeave={() => closeDropdownDelayed(120)}>                    
                  <div ref={dropdownRef} className="w-screen bg-black/80 text-white py-12">
                    <div className="max-w-screen-xl mx-auto px-20 grid grid-cols-4 gap-10">
                        {capabilities.map((cap) => {
                          const path = `/capabilities/${cap.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-")}`;
                          return (
                            <Link
                              key={cap}
                              to={path}
                              onClick={handleNavClick}
                              role="menuitem"
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
          })}
        </nav>

        <div className="hidden md:flex w-1/4 items-center justify-end">
          <Link ref={ctaRef} to="/get-in-touch" onClick={handleNavClick} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--color-primary-mauve)] text-white text-subheading-xs mr-4">
            GET IN TOUCH
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpenMobile(!openMobile)} aria-label="Toggle menu">
          <span className="w-6 h-[2px] bg-[var(--color-primary-navy)]"></span>
          <span className="w-6 h-[2px] bg-[var(--color-primary-navy)]"></span>
          <span className="w-6 h-[2px] bg-[var(--color-primary-navy)]"></span>
        </button>
      </div>

      <div ref={mobileMenuRef} className="md:hidden overflow-hidden bg-[var(--color-bg-white)] px-6" style={{ height: 0 }}>
        <div className="flex flex-col gap-6 py-6">
          {NavLinks.map((item) => {
            const to =
              item === "HOME"
                ? "/"
                : item === "WHY EURADICLE"
                ? "/why-euradicle"
                : item === "OUR CAPABILITIES"
                ? "/capabilities"
                : item === "GROW WITH US"
                ? "/grow-with-us"
                : "/";
            return (
              <Link key={item} to={to} onClick={handleNavClick} className="text-subheading text-[var(--color-primary-navy)]">
                {item}
              </Link>
            );
          })}
          <Link to="/contact" onClick={handleNavClick} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-primary-mauve)] text-white text-subheading-sm">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
