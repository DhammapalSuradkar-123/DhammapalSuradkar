import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import metaLogo from "../IMG/meta.png";

// Crisp Brand SVG Logos matching the screenshot
const OracleLogo = () => (
  <svg
    height="28"
    viewBox="0 0 160 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5 0H7.5C3.36 0 0 3.36 0 7.5V22.5C0 26.64 3.36 30 7.5 30H22.5C26.64 30 30 26.64 30 22.5V7.5C30 3.36 26.64 0 22.5 0ZM22.5 22.5H7.5V7.5H22.5V22.5Z"
      fill="#EA2A2A"
    />
    <text
      x="36"
      y="22"
      fontFamily="Plus Jakarta Sans, sans-serif"
      fontWeight="800"
      fontSize="22"
      fill="#EA2A2A"
      letterSpacing="1"
    >
      ORACLE
    </text>
  </svg>
);

const MicrosoftLogo = () => (
  <svg
    height="26"
    viewBox="0 0 160 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="13" height="13" fill="#F25022" />
    <rect x="15" width="13" height="13" fill="#7FBA00" />
    <rect y="15" width="13" height="13" fill="#00A4EF" />
    <rect x="15" y="15" width="13" height="13" fill="#FFB900" />
    <text
      x="36"
      y="21"
      fontFamily="Plus Jakarta Sans, sans-serif"
      fontWeight="700"
      fontSize="20"
      fill="#737373"
    >
      Microsoft
    </text>
  </svg>
);

const IBMLogo = () => (
  <svg
    height="26"
    viewBox="0 0 100 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="22"
      fontFamily="Plus Jakarta Sans, sans-serif"
      fontWeight="800"
      fontSize="24"
      fill="#0F62FE"
      letterSpacing="2"
    >
      IBM
    </text>
  </svg>
);

const CertificationsGrid = ({ onViewAll }) => {
  const certifications = [
    {
      logo: <OracleLogo />,
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      date: "July 2022",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=84E0461EB55B744F473F51FC436B9ED60CDC2B21505A86091CDEDF7C91D8524F",
    },
    {
      logo: <img src={metaLogo} alt="meta-logo" />,
      title: "Meta Front-End Developer Professional",
      date: "March 13, 2024",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/77KT5MXQZ8RY",
    },
    {
      logo: <MicrosoftLogo />,
      title: "Microsoft Certified Virtual Internship Program",
      date: "August 2020",
      link: "https://insidesherpa.s3.amazonaws.com/completion-certificates/Microsoft/ms2CK9b2SCWGXwPMS_Microsoft_ytMfTLZ8TkCDNWS3n_completion_certificate.pdf",
    },
    {
      logo: <IBMLogo />,
      title: "Python For Data Science IBM",
      date: "August 2020",
      link: "https://www.credly.com/badges/b941b03c-eeb1-403b-a4e3-b6e2537ee84e?source=linked_in_profile",
    },
  ];

  return (
    <div className="section-wrapper" id="certificates-preview">
      <div className="section-header-flex">
        <div>
          <div className="section-eyebrow">CERTIFICATIONS</div>
          <h2 className="section-title">Professional Certifications</h2>
        </div>
        <span className="section-link-action" onClick={onViewAll}>
          View All <ArrowForwardIcon style={{ fontSize: 16 }} />
        </span>
      </div>

      <div className="cert-grid">
        {certifications.map((item, i) => (
          <div className="cert-card-item" key={i}>
            <div>
              <div className="cert-logo-box">{item.logo}</div>
              <h3 className="cert-card-title">{item.title}</h3>
              <div className="cert-card-date">
                <CalendarTodayIcon style={{ fontSize: 14 }} />
                <span>{item.date}</span>
              </div>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card-link"
            >
              View Credential <ArrowForwardIcon style={{ fontSize: 14 }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsGrid;
