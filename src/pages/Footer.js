import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="main-container footer-banner-wrapper" id="contact">
      <footer className="footer-bar">
        <div className="footer-contacts">
          <div className="footer-contact-item">
            <LocationOnOutlinedIcon
              style={{ fontSize: 18, color: "#475569" }}
            />
            <span>Buldhana, Maharashtra, India</span>
          </div>
          <a
            href="mailto:dsuradkar111@gmail.com"
            className="footer-contact-item"
            style={{ textDecoration: "none" }}
          >
            <EmailOutlinedIcon style={{ fontSize: 18, color: "#475569" }} />
            <span>dsuradkar111@gmail.com</span>
          </a>
          <a
            href="tel:+919657531971"
            className="footer-contact-item"
            style={{ textDecoration: "none" }}
          >
            <LocalPhoneOutlinedIcon
              style={{ fontSize: 18, color: "#475569" }}
            />
            <span>+91 9657531971</span>
          </a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/DhammapalSuradkar-123"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <GitHubIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhammapalsuradkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://www.instagram.com/_dhamma_1999_/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <InstagramIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://x.com/Dhammapal__S"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="X (Twitter)"
          >
            <XIcon style={{ fontSize: 18 }} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
