import "../css/home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sec1">
          <div className="footer-sec1">
            <span className="fs">&#10100;</span>
            <div className="title-footer">Software Engineer</div>
            <span className="title-footer">|</span>
            <div
              className="title-footer"
              style={{ color: "#ffdb1a", fontWeight: "bold" }}
            >
              Dhammapal Suradkar
            </div>
            <span className="title-footer">|</span>
            <div className="title-footer">React JS Developer</div>
            <span className="fs">&#10101;</span>
          </div>
          <div className="footer-sec2">
            <div
              className="social-icon si1"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/dhammapalsuradkar/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon />
            </div>
            <div
              className="social-icon si2"
              onClick={() =>
                window.open(
                  "https://github.com/DhammapalSuradkar-123",
                  "_blank"
                )
              }
            >
              <GitHubIcon />
            </div>
            <div
              className="social-icon si3"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/_dhamma_1999_/",
                  "_blank"
                )
              }
            >
              <InstagramIcon />
            </div>
            <div
              className="social-icon si4"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCbr-6PStZ4h8rTduAYlJJqg",
                  "_blank"
                )
              }
            >
              <YouTubeIcon />
            </div>
            <div
              className="social-icon si5"
              onClick={() =>
                window.open("https://x.com/Dhammapal__S", "_blank")
              }
            >
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div className="f-sec2">
          <div className="col-md-12 sec2">
            <div className="sec2-1 com1">
              <div className="c-icon">
                <PlaceIcon className="i" />
              </div>
              <p className="c-text">Pune, Maharashtra, India</p>
            </div>
            <div className="sec2-1 com2">
              <div className="c-icon">
                <EmailIcon className="i" />
              </div>
              <p className="c-text">dsuradkar111@gmail.com</p>
            </div>
            <div className="sec2-1 com3">
              <div className="c-icon">
                <PhoneEnabledIcon className="i" />
              </div>
              <p className="c-text">+91 9657531971</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
