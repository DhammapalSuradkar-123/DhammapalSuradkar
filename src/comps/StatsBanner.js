import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StatsBanner = () => {
  const stats = [
    {
      icon: <PersonOutlineIcon style={{ fontSize: 24 }} />,
      value: "2+",
      label: "Years Experience",
    },
    {
      icon: <FolderOpenIcon style={{ fontSize: 24 }} />,
      value: "15+",
      label: "Projects Completed",
    },
    {
      icon: <WorkspacePremiumOutlinedIcon style={{ fontSize: 24 }} />,
      value: "8+",
      label: "Certifications",
    },
    {
      icon: <StarBorderIcon style={{ fontSize: 24 }} />,
      value: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <div className="stats-banner-container">
      <div className="stats-card">
        {stats.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <div className="stat-icon-badge">{stat.icon}</div>
            <div className="stat-info">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
