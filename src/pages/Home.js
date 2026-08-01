import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import myPhoto from "../IMG/my_photo.JPG";
import resumePdf from "../IMG/Dhammapal Suradkar.pdf";
import virtusaLogo from "../IMG/Virtusa-Logo.png";
import credentekLogo from "../IMG/credentek_logo1.jpg";

import StatsBanner from "../comps/StatsBanner";
import CertificationsGrid from "../comps/CertificationsGrid";

// Certificate Gallery Images
import img1 from "../IMG/Certificates/meta_cert.jpg";
import img2 from "../IMG/Certificates/oracle_cert.jpg";
import img3 from "../IMG/Certificates/cert14.png";
import img4 from "../IMG/Certificates/microsoft_cert.jpg";
import img5 from "../IMG/Certificates/cert13.jpg";
import img6 from "../IMG/Certificates/cert15.jpg";
import img7 from "../IMG/Certificates/cert3.jpg";
import img8 from "../IMG/Certificates/cert1.png";
import img9 from "../IMG/Certificates/cert7.png";

const Home = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllCertsModal, setShowAllCertsModal] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Dhammapal Suradkar Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const frontEnd = ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux Toolkit", "Material UI", "Bootstrap"];
  const backEnd = ["Java", "Python", "Spring Boot", "Spring Security", "Hibernate"];
  const database = ["MySQL", "Oracle"];
  const tools = ["VS Code", "Eclipse", "STS", "Postman", "MySQL Workbench", "Git / GitHub"];

  const experiences = [
    {
      company: "Credentek",
      role: "Software Engineer",
      period: "Feb 2023 - Present (1.5+ Years)",
      logo: credentekLogo,
      description: "Developing scalable front-end web applications with React.js, Redux Toolkit, and Material UI. Implementing responsive UI design and RESTful APIs integration.",
    },
    {
      company: "Virtusa",
      role: "Associate Engineer",
      period: "Jan 2022 - Dec 2022 (11 Months)",
      logo: virtusaLogo,
      description: "Worked on enterprise software applications using Java, Spring Boot, and modern Web frontend technologies in an Agile team environment.",
    },
  ];

  const projects = [
    {
      name: "Exam Portal Application",
      tech: "React JS, Redux Toolkit, Material UI, Java, Spring Boot, Spring Security, MySQL",
      status: "Completed",
      link: "https://github.com/DhammapalSuradkar-123",
    },
    {
      name: "News Web Application",
      tech: "HTML5, CSS3, JavaScript, Bootstrap4, PHP, MySQL",
      status: "Completed",
      link: "https://github.com/DhammapalSuradkar-123/Dhammapal_Suradkar_News_Project.github.io",
    },
    {
      name: "ATM Banking Simulator in Python",
      tech: "Python, Oracle Database, SQL",
      status: "Completed",
      link: "https://github.com/DhammapalSuradkar-123/ATM-Application-In-Python",
    },
  ];

  const allCerts = [
    { img: img1, title: "Meta Front-End Developer Professional" },
    { img: img2, title: "Oracle Certified Associate, Java SE 8 Programmer" },
    { img: img3, title: "Full Stack Development Certificate" },
    { img: img4, title: "Microsoft Virtual Internship Certificate" },
    { img: img5, title: "Python Programming Certification" },
    { img: img6, title: "Web Development Certification" },
    { img: img7, title: "React Developer Certification" },
    { img: img8, title: "Java Programming Badge" },
    { img: img9, title: "Software Engineering Certification" },
  ];

  return (
    <div className="main-container">
      {/* 1. Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-greeting">
              Hello <span>👋</span>
            </div>
            <h1 className="hero-title">
              I'm Dhammapal <br />
              <span className="name-blue">Suradkar</span>
            </h1>

            <div className="hero-role-wrapper">
              <div className="hero-role">Frontend Developer</div>
            </div>

            <p className="hero-description">
              I build scalable, responsive and user-friendly web applications with React, Next.js and TypeScript.
            </p>

            <div className="hero-actions">
              <button className="btn-primary-action" onClick={handleDownloadResume}>
                <DownloadIcon style={{ fontSize: 20 }} />
                <span>View Resume</span>
              </button>

              <a
                href="https://github.com/DhammapalSuradkar-123"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <GitHubIcon style={{ fontSize: 20 }} />
              </a>

              <a
                href="https://www.linkedin.com/in/dhammapalsuradkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon style={{ fontSize: 20 }} />
              </a>

              <a
                href="mailto:dsuradkar111@gmail.com"
                className="social-icon-btn"
                aria-label="Email"
              >
                <EmailIcon style={{ fontSize: 20 }} />
              </a>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="hero-visual">
            <div className="hero-bg-circle-top"></div>
            <div className="hero-bg-circle-bottom"></div>

            {/* Dotted Grid SVG Top Right */}
            <svg className="dot-grid dot-grid-top" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <pattern id="dot-pattern-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="2.5" fill="#93c5fd" opacity="0.6" />
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern-1)" />
            </svg>

            {/* Dotted Grid SVG Bottom Left */}
            <svg className="dot-grid dot-grid-bottom" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <pattern id="dot-pattern-2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="2.5" fill="#93c5fd" opacity="0.6" />
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern-2)" />
            </svg>

            <div className="photo-card">
              <img src={myPhoto} alt="Dhammapal Suradkar" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Banner */}
      <StatsBanner />

      {/* 3. Featured Professional Certifications */}
      <CertificationsGrid onViewAll={() => setShowAllCertsModal(true)} />

      {/* 4. About Me Section */}
      <section className="section-wrapper" id="about">
        <div className="section-eyebrow">ABOUT ME</div>
        <h2 className="section-title" style={{ marginBottom: "20px" }}>
          Full Stack & Frontend Engineer
        </h2>
        <div className="info-card">
          <p style={{ fontSize: "16px", color: "#334155", lineHeight: "1.7", marginBottom: "20px" }}>
            Dynamic and results-oriented Software Engineer with a strong foundation in React.js, Next.js, and Java technologies. 
            With <strong>2.5+ Years of hands-on experience in IT</strong>, I specialize in crafting performant, accessible, and user-centric web applications.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", borderTop: "1px solid #f1f5f9", paddingTop: "20px" }}>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#2563eb", marginBottom: "6px" }}>HIGHER EDUCATION</h4>
              <p style={{ fontSize: "14px", color: "#475569", fontWeight: "600" }}>Bachelor of Engineering (B.E)</p>
              <p style={{ fontSize: "13px", color: "#64748b" }}>Anuradha Engineering College Chikhli, Maharashtra</p>
              <p style={{ fontSize: "13px", color: "#64748b" }}>Sant Gadge Baba Amravati University (Graduated 2021)</p>
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#2563eb", marginBottom: "6px" }}>LOCATION & CONTACT</h4>
              <p style={{ fontSize: "14px", color: "#475569" }}>📍 Pune, Maharashtra, India</p>
              <p style={{ fontSize: "14px", color: "#475569" }}>✉️ dsuradkar111@gmail.com</p>
              <p style={{ fontSize: "14px", color: "#475569" }}>📞 +91 9657531971</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills Section */}
      <section className="section-wrapper" id="skills">
        <div className="section-eyebrow">SKILLS & EXPERTISE</div>
        <h2 className="section-title" style={{ marginBottom: "24px" }}>
          Technical Stack
        </h2>
        <div className="info-card">
          <div className="skill-category-title">Frontend Technologies</div>
          <div className="skill-pills-row">
            {frontEnd.map((skill, i) => (
              <span className="skill-pill" key={i}>{skill}</span>
            ))}
          </div>

          <div className="skill-category-title">Backend Technologies</div>
          <div className="skill-pills-row">
            {backEnd.map((skill, i) => (
              <span className="skill-pill" key={i}>{skill}</span>
            ))}
          </div>

          <div className="skill-category-title">Databases</div>
          <div className="skill-pills-row">
            {database.map((skill, i) => (
              <span className="skill-pill" key={i}>{skill}</span>
            ))}
          </div>

          <div className="skill-category-title">Tools & Environment</div>
          <div className="skill-pills-row">
            {tools.map((skill, i) => (
              <span className="skill-pill" key={i}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Work Experience Section */}
      <section className="section-wrapper" id="experience">
        <div className="section-eyebrow">CAREER PATH</div>
        <h2 className="section-title" style={{ marginBottom: "24px" }}>
          Work Experience
        </h2>
        <div>
          {experiences.map((exp, idx) => (
            <div className="exp-card" key={idx}>
              <img src={exp.logo} alt={exp.company} className="exp-logo" />
              <div className="exp-details">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-date">📅 {exp.period}</div>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Featured Projects Section */}
      <section className="section-wrapper" id="projects">
        <div className="section-eyebrow">PORTFOLIO</div>
        <h2 className="section-title" style={{ marginBottom: "24px" }}>
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div>
                <h3 className="project-title">{proj.name}</h3>
                <p className="project-tech"><strong>Technologies:</strong> {proj.tech}</p>
              </div>
              <div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card-link"
                >
                  View Repository <ArrowForwardIcon style={{ fontSize: 14 }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Full Certificates Gallery View */}
      {(showAllCertsModal || selectedCert) && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => {
            setShowAllCertsModal(false);
            setSelectedCert(null);
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "32px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a" }}>All Certificates & Credentials</h3>
              <button
                onClick={() => {
                  setShowAllCertsModal(false);
                  setSelectedCert(null);
                }}
                style={{
                  background: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            {selectedCert ? (
              <div style={{ textAlign: "center" }}>
                <img src={selectedCert.img} alt={selectedCert.title} style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
                <p style={{ marginTop: "16px", fontWeight: "600", color: "#334155" }}>{selectedCert.title}</p>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="btn-primary-action"
                  style={{ marginTop: "16px" }}
                >
                  Back to All Certificates
                </button>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
                {allCerts.map((cert, i) => (
                  <div
                    key={i}
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img src={cert.img} alt={cert.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                    <p style={{ padding: "10px", fontSize: "12px", fontWeight: "600", color: "#334155", textAlign: "center" }}>{cert.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
