import { useState } from "react";
import "../css/projects.css";
import ProjectCard from "../comps/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "News WebSite",
      technologies: "HTML5, CSS3, JavaScript, Bootstrap4, PHP, MySql",
      link: "https://github.com/DhammapalSuradkar-123/Dhammapal_Suradkar_News_Project.github.io",
      status: "Completed",
    },
    {
      name: "ATM Application In Python",
      technologies: "Python, Oracle",
      link: "https://github.com/DhammapalSuradkar-123/ATM-Application-In-Python",
      status: "Completed",
    },
    {
      name: "Exam Portal",
      technologies:
        "React JS, Redux Toolkit, Material UI, Java, Spring Boot, Hibernate, JWT Authentication, Spring Security, MySql",
      link: "",
      status: "Under Work",
    },
  ]);

  return (
    <>
      <div className="container projects">
        <div className="row r1">
          <div className="col-md-12 sec1">
            <h3 className="title">PROJECTS</h3>
          </div>
        </div>
        <div className="row r2">
          {projects.map((item, i) => (
            <div className="p-card" key={i}>
              <ProjectCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
