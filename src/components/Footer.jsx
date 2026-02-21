import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);

  return (
    <footer
      ref={footerRef}
      className="bg-[var(--color-bg-muted)] text-black py-20 px-6 z-90"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <img
            src="/Home/logo.gif"
            alt="EuRadicle Logo"
            className="w-auto h-30"
          />

          <div className="flex gap-6 text-xl">
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-primary-mauve)] transition-all duration-300 transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-subheading mb-8">Our Capabilities</h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-body-sm">
            <Link
              to="/capabilities/leadership-development"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              Leadership Development
            </Link>

            <Link
              to="/capabilities/consulting-talent-management"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              Consulting & Talent Management
            </Link>

            <Link
              to="/capabilities/assessment-development-centers"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              Assessment Development Centers
            </Link>

            <Link
              to="/capabilities/power-skills-development"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              Power Skills Development
            </Link>

            <Link
              to="/capabilities/digital-business-transformation"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              Digital & Business Transformation
            </Link>

            <Link
              to="/capabilities/commercial-sales-enablement"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              Commercial Sales Enablement
            </Link>

            <Link
              to="/capabilities/creative-solutions"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              Creative Solutions
            </Link>

            <Link
              to="/capabilities/dei-culture-building"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
            >
              DEI & Culture Building
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-subheading mb-8">Contact Us</h3>

          <div className="flex flex-col text-body-sm">
            <p className="footer-link relative">
              <a
                href="mailto:info@euradicle.com"
                className="hover:text-[var(--color-primary-mauve)]"
              >
                info@euradicle.com
              </a>
            </p>
            <p className="footer-link relative">
              <a
                href="tel:+914031003306"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
              >
                +91 40 3100 3306
              </a>
            </p>
            <p className="footer-link relative">
              <a
                href="tel:+919661188313"
              className="footer-link relative hover:text-[var(--color-primary-mauve)] transform transition-all duration-300 hover:scale-105"
              >
                +91 966 118 8313
              </a>
            </p>
            {/* </p> */}
            <div className="flex items-center justify-evenly gap-6 mt-2">
              <div>
                <p className="footer-link relative text-body">India</p>
              <p className="footer-link relative">
                2nd floor
                Building no: 8-2-120/86/5/B
                <br />
                Road No 3, Banjara Hills
                <br />
                Hyderabad, Telangana - 500034
              </p>
              </div>
              <div>
                
              <p className="footer-link relative text-body">USA</p>
              {/* <p className="footer-link relative">
                <a
                  href="tel:+17134293753"
                  className="hover:text-[var(--color-primary-mauve)]"
                >
                  +1 (713) 429 3753
                </a>
              </p> */}
              <p className="footer-link relative">
                EuRadicle Learning Inc
                <br />
                10301 Northwest Freeway, Suite 314
                <br />
                Houston Texas - 77092
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
