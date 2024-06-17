import my_img from "../IMG/my_img.jpg";
import "../css/profession.css";
import virtusaLogo from "../IMG/Virtusa-Logo.png";
import credentekLogo from "../IMG/credentek_logo1.jpg";
import AccordionComp from "../comps/AccordionComp";

const Profession = () => {
  const frontEnd = [
    { skill: "HTML5", color: "bisque" },
    { skill: "CSS3", color: "gainsboro" },
    { skill: "JavaScript", color: "gold" },
    { skill: "React_JS", color: "greenyellow" },
    { skill: "Redux_Toolkit", color: "khaki" },
    { skill: "Material_UI", color: "moccasin" },
    { skill: "Bootstrap", color: "aqua" },
  ];

  const backEnd = [
    { skill: "Java", color: "paleturquoise" },
    { skill: "Python", color: "aquamarine" },
    { skill: "Spring Boot", color: "pink" },
    { skill: "Spring Security", color: "gainsboro" },
    { skill: "Hibernate", color: "lavender" },
  ];

  const database = [
    { skill: "MYSQL", color: "lawngreen" },
    { skill: "Oracle", color: "gold" },
  ];

  const tools = [
    { skill: "VS CODE", color: "aqua" },
    { skill: "Eclipse", color: "bisque" },
    { skill: "STS", color: "aquamarine" },
    { skill: "Postman", color: "khaki" },
    { skill: "MySql Workbench", color: "lawngreen" },
  ];

  const experience = [
    {
      companyName: "Virtusa",
      jobRole: "Associate Engineer",
      dateOfJoining: "27-01-2022",
      dateOfRelieving: "30-12-2022",
      totalExperience: "11 Months",
      companyLogo: virtusaLogo,
    },
    {
      companyName: "Credentek",
      jobRole: "Software Engineer",
      dateOfJoining: "14-02-2023",
      dateOfRelieving: "Present",
      totalExperience: "1.5 Years",
      companyLogo: credentekLogo,
    },
  ];

  return (
    <>
      <div className="container-build profession">
        <div className="row" style={{ paddingBottom: "30px" }}>
          <div className="col-md-12 pc1">
            <div className="cert1-title">
              <div className="eleven" style={{ marginTop: 0 }}>
                <h1 style={{ paddingTop: 0 }}>ABOUT ME</h1>
              </div>
            </div>
            <div className="pro-sec1">
              <div className="pro-about">
                <div className="summary">
                  <h3>Dhammapal Suradkar</h3>
                  <p>
                    " Dynamic and results-oriented Full Stack Developer with a
                    strong foundation in React JS and Java technologies{" "}
                    <mark>with 2.5 Years of hands-on experience in IT</mark>, a
                    strong foundation in both front-end and back-end
                    development. Excellent problem solving skills and ability to
                    perform well in a team. passionate about coding and learning
                    new technologies. "
                  </p>
                </div>
                <hr />
                <div className="education">
                  <h3>Higher Studies :- </h3>
                  <p>
                    <b>Course Name:</b> Bachelor of Engineering{" "}
                    <strong>
                      <mark>(B.E)</mark>
                    </strong>
                  </p>
                  <p>
                    <b>College Name:</b> Anuradha Engineering College Chikhli
                    Maharashtra India.
                  </p>
                  <p>
                    <b>University:</b> Sant Gadge Baba Amravati University.
                  </p>
                  <p>
                    <b>Passout Year:</b> 2021
                  </p>
                </div>
              </div>
              <div className="pro-img">
                <img src={my_img} alt="profile_photo" />
              </div>
            </div>
            <div className="pro-sec2">
              <div className="skills">
                <h3>SKILLS :- </h3>
                <p>
                  <strong>Front End : </strong>{" "}
                  {frontEnd.map((item, i) => (
                    <span style={{ backgroundColor: item.color }} key={i}>
                      {item.skill}
                    </span>
                  ))}
                </p>
                <p>
                  <strong>Back End : </strong>{" "}
                  {backEnd.map((item, i) => (
                    <span style={{ backgroundColor: item.color }} key={i}>
                      {item.skill}
                    </span>
                  ))}
                </p>
                <p>
                  <strong>Database : </strong>{" "}
                  {database.map((item, i) => (
                    <span style={{ backgroundColor: item.color }} key={i}>
                      {item.skill}
                    </span>
                  ))}
                </p>
                <p>
                  <strong>Tools : </strong>{" "}
                  {tools.map((item, i) => (
                    <span style={{ backgroundColor: item.color }} key={i}>
                      {item.skill}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 pc2">
            <div className="cert1-title">
              <div className="eleven" style={{ marginTop: 0 }}>
                <h1 style={{ paddingTop: 0 }}>WORK EXPERIENCE</h1>
              </div>
            </div>
            <div className="experience">
              {experience.map((item, i) => (
                <AccordionComp data={item} id={i} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profession;
