import myResume from "../IMG/Dhammapal Suradkar.png";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import resume from "../IMG/Dhammapal Suradkar.pdf";

const Resume = () => {
  // download resume
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Dhammapal Suradkar Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container-build profession">
        <div className="row res">
          <div className="col-md-12 pc2">
            <div className="cert1-title">
              <div className="eleven" style={{ marginTop: 0 }}>
                <h1 style={{ paddingTop: 0 }}>RESUME</h1>
              </div>
            </div>
            <div className="resume">
              <img src={myResume} alt="resume" />
            </div>
            <div className="btn">
              <Button
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
                size="small"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
