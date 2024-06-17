import React, { useState, useEffect } from "react";
import "./compsStyle.css";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DataArrayIcon from "@mui/icons-material/DataArray";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import logo from "../IMG/Dhamma2.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.onload = () => {
      const activeItem = localStorage.getItem("active_item");
      setActiveNavItem(activeItem);
    };
  });

  // make nav item active
  const handleActiveNav = (nav_item) => {
    setActiveNavItem(nav_item);
    localStorage.setItem("active_item", nav_item);
  };

  return (
    <nav id="nav-bar" className={scrolled ? "nav-bar-scrolled" : "nav-bar-top"}>
      <div className="wrapper">
        <img className="nav-logo" src={logo} alt="Logo" />
        <input
          type="checkbox"
          id="menu-toggle"
          style={{ visibility: "hidden" }}
        />
        <label htmlFor="menu-toggle" className="label-toggle hamburger"></label>

        <ul className="menu-list">
          <li
            className={activeNavItem === "home" ? "active" : ""}
            onClick={() => handleActiveNav("home")}
          >
            <Link className="nav-link" to="/">
              <Tooltip title="HOME" arrow>
                <HomeIcon className="icon" />
              </Tooltip>
              <span className="icon-name">Home</span>
            </Link>
          </li>
          <li
            className={activeNavItem === "profession" ? "active" : ""}
            onClick={() => handleActiveNav("profession")}
          >
            <Link className="nav-link" to="/profession">
              <Tooltip title="PROFESSION" arrow>
                <BusinessCenterIcon className="icon" />
              </Tooltip>
              <span className="icon-name">Profession</span>
            </Link>
          </li>
          <li
            className={activeNavItem === "projects" ? "active" : ""}
            onClick={() => handleActiveNav("projects")}
          >
            <Link className="nav-link" to="/projects">
              <Tooltip title="PROJECTS" arrow>
                <DataArrayIcon className="icon" />
              </Tooltip>
              <span className="icon-name">Projects</span>
            </Link>
          </li>
          <li
            className={activeNavItem === "resume" ? "active" : ""}
            onClick={() => handleActiveNav("resume")}
          >
            <Link className="nav-link" to="/resume">
              <Tooltip title="RESUME" arrow>
                <DescriptionIcon className="icon" />
              </Tooltip>
              <span className="icon-name">Resume</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
