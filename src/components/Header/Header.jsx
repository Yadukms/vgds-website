 import { Link } from "react-router-dom";

 import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= RESIZE ================= */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* LOGO */}
        <div className="logo">
          <img
            src={isMobile || scrolled ? "/logo-light.png" : "/logo-dark.png"}
            alt="VGDS Global"
          />
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="nav">
         <Link to="/our-work">Our Work</Link>

          {/* SERVICES */}
          <div
            className="nav-item services-item"
            onMouseEnter={() => !isMobile && setServicesOpen(true)}
            onMouseLeave={() => !isMobile && setServicesOpen(false)}
          >
            <Link to="/services" className="nav-link">
  Services
</Link>


            {/* DESKTOP MEGA MENU */}
            {servicesOpen && !isMobile && (
              <div className="services-mega">
                <div className="services-arrow" />

                <div className="services-grid">
                  <div className="service-card">
                    <img
                      src="/services/presentation-design.png"
                      alt="Presentation Design"
                    />
                    <p className="service-title">Presentation Design</p>
                  </div>

                  <div className="service-card">
                    <img
                      src="/services/graphics-print-design.png"
                      alt="Graphics & Print Design"
                    />
                    <p className="service-title">
                      Graphics & Print Design
                    </p>
                  </div>

                  <div className="service-card">
                    <img
                      src="/services/other-services.png"
                      alt="Other Services"
                    />
                    <p className="service-title">Other Services</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#solutions">Solutions</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#blogs">Blogs</a>
        </nav>

        {/* CTA */}
        <div className="header-cta">
          <button>Order Now</button>
        </div>

        {/* HAMBURGER */}
        {isMobile && !menuOpen && (
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </div>
        )}
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && isMobile && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <img src="/logo-light.png" alt="VGDS Global" />
            <button
              className="mobile-close"
              onClick={() => {
                setMenuOpen(false);
                setServicesOpen(false);
              }}
            >
              ✕
            </button>
          </div>

          {/* <a href="#work">Our Work</a> */}
          <Link to="/our-work" onClick={() => setMenuOpen(false)}>
  Our Work
</Link>

          {/* MOBILE SERVICES */}
          <div className="mobile-services">
            <button
              className="mobile-services-btn"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
            </button>

            {servicesOpen && (
              <div className="mobile-services-list">
                  <div className="mobile-services-heading">Services</div>
                <div className="mobile-service-card">
                  <img
                    src="/services/presentation-design.png"
                    alt="Presentation Design"
                  />
                  <p className="mobile-service-title">
                    Presentation Design
                  </p>
                </div>

                <div className="mobile-service-card">
                  <img
                    src="/services/graphics-print-design.png"
                    alt="Graphics & Print Design"
                  />
                  <p className="mobile-service-title">
                    Graphics & Print Design
                  </p>
                </div>

                <div className="mobile-service-card">
                  <img
                    src="/services/other-services.png"
                    alt="Other Services"
                  />
                  <p className="mobile-service-title">
                    Other Services
                  </p>
                </div>
              </div>
            )}
          </div>

          <a href="#solutions">Solutions</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#blogs">Blogs</a>

          <button className="mobile-cta">Order Now</button>
        </div>
      )}
    </header>
  );
}

export default Header;
