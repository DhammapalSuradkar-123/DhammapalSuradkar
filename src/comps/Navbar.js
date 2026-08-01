import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import resumePdf from "../IMG/Dhammapal Suradkar.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Section scrollSpy logic
      const sections = ["home", "about", "skills", "projects", "experience", "certificates", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Dhammapal Suradkar Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-wrapper">
        <div className="logo-container" onClick={() => handleNavClick("home")}>
          <div className="logo-avatar">DS</div>
          <span className="logo-text">Dhammapal Suradkar</span>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <span
                  className={`nav-link-item ${activeSection === item.id ? "active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button className="header-cta-btn" onClick={handleDownloadResume}>
            <DownloadIcon style={{ fontSize: 18 }} />
            <span>Resume</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {navItems.map((item) => (
            <span
              key={item.id}
              className={`nav-link-item ${activeSection === item.id ? "active" : ""}`}
              style={{ fontSize: "16px", padding: "8px 0" }}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
