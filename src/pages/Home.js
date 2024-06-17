import "../css/home.css";
import my_photo from "../IMG/my_photo.JPG";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardComp from "../comps/Card";
import oracle_logo from "../IMG/cert-company-logo/oracle-logo.png";
import microsoft_logo from "../IMG/cert-company-logo/microsoft-logo.png";
import IBM_logo from "../IMG/cert-company-logo/IBM-logo.jpg";
import meta_logo from "../IMG/cert-company-logo/meta-logo.jpg";
import cert_img1 from "../IMG/Certificates/meta_cert.jpg";
import cert_img2 from "../IMG/Certificates/oracle_cert.jpg";
import cert_img3 from "../IMG/Certificates/cert14.png";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const cert_card = [
    {
      img: oracle_logo,
      cert: "Oracle Certified Associate, Java SE 8 Programmer - Oracle",
      issued: "July 2022",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=84E0461EB55B744F473F51FC436B9ED60CDC2B21505A86091CDEDF7C91D8524F",
      class_name: "oracle-class",
    },
    {
      img: meta_logo,
      cert: "Meta Front-End Developer Professional",
      issued: "March 13, 2024",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/77KT5MXQZ8RY",
      class_name: "meta-class",
    },
    {
      img: microsoft_logo,
      cert: "Microsoft Certified Virtual Internship Program - Microsoft",
      issued: "Augast 2020",
      link: "https://insidesherpa.s3.amazonaws.com/completion-certificates/Microsoft/ms2CK9b2SCWGXwPMS_Microsoft_ytMfTLZ8TkCDNWS3n_completion_certificate.pdf",
      class_name: "microsoft-class",
    },
    {
      img: IBM_logo,
      cert: "Python For Data Science - IBM",
      issued: "Augast 2020",
      link: "https://www.credly.com/badges/b941b03c-eeb1-403b-a4e3-b6e2537ee84e?source=linked_in_profile",
      class_name: "ibm-class",
    },
  ];

  const navigate = useNavigate();

  const handleRadioChange = (itemId) => {
    setSelectedItem(itemId);
  };

  const [selectedItem, setSelectedItem] = useState(1);
  const [certDetials, setCertDetails] = useState([
    {
      id: "1",
      img: cert_img1,
    },
    {
      id: "2",
      img: cert_img2,
    },
    {
      id: "3",
      img: cert_img3,
    },
  ]);

  return (
    <>
      <div className="container-build home">
        <div className="row">
          {/* First Section */}
          <div className="col-md-12">
            <div className="home-sec1">
              <div className="box1">
                <img src={my_photo} alt="photo" className="img1" />
                <div className="title">
                  <h1>
                    <span style={{ marginRight: "8px" }}>Hi!</span> I'm <br />{" "}
                    <span className="main">Dhammapal Suradkar</span>
                    <br /> a front end <br />{" "}
                    <span className="main">"React JS Developer"</span>.
                  </h1>
                  <div className="main-btns">
                    <Button
                      variant="contained"
                      startIcon={<LinkedInIcon />}
                      className="btn"
                      size="small"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/dhammapalsuradkar/",
                          "_blank"
                        )
                      }
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      style={{ marginLeft: "20px" }}
                      className="btn btn2"
                      size="small"
                      onClick={() =>
                        window.open(
                          "https://github.com/DhammapalSuradkar-123",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Section */}
          <div className="col-md-12 home-sec2">
            <div className="cert1-title">
              <div className="eleven">
                <h1>CERTIFICATIONS</h1>
              </div>
            </div>
            <div className="cert1-body">
              <div className="card-comp">
                {cert_card.map((item, i) => (
                  <div className="card-comp-sec" key={i}>
                    <CardComp
                      img={item.img}
                      cert={item.cert}
                      issued={item.issued}
                      link={item.link}
                      class_name={item.class_name}
                      key={i}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Third Section */}
          <div className="col-md-12 other-cert">
            <div className="cert1-title">
              <div className="eleven ele">
                <h1>OTHER CERTIFICATIONS</h1>
              </div>
            </div>
            <div className="other-cert-sec2">
              <input
                type="radio"
                name="slider"
                id="item-1"
                checked={selectedItem === 1}
                onChange={() => handleRadioChange(1)}
              />
              <input
                type="radio"
                name="slider"
                id="item-2"
                checked={selectedItem === 2}
                onChange={() => handleRadioChange(2)}
              />
              <input
                type="radio"
                name="slider"
                id="item-3"
                checked={selectedItem === 3}
                onChange={() => handleRadioChange(3)}
              />
              <div className="cards">
                {certDetials.map((item, index) => (
                  <label
                    className="card"
                    htmlFor={`item-${item.id}`}
                    id={`song-${item.id}`}
                    key={index}
                  >
                    <img src={item.img} alt="song" key={index} />
                  </label>
                ))}
              </div>
            </div>
            <div className="other-cert3">
              <Button
                variant="outlined"
                startIcon={<CloudDoneIcon />}
                onClick={() => navigate("/certificates")}
              >
                All Certificates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
