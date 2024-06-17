import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./compsStyle.css";

const AccordionComp = ({ data, id }) => {
  return (
    <>
      <Accordion defaultExpanded={id !== 1} className="accordion-comp">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <strong>{data.companyName}</strong>
          </Typography>
        </AccordionSummary>
        <hr style={{ margin: 0 }} />
        <AccordionDetails>
          <div className="company-info">
            <div className="details">
              <div className="det">
                <strong>Company Name </strong> : <span>{data.companyName}</span>
              </div>
              <div className="det">
                <strong>Job Role </strong> : <span>{data.jobRole}</span>
              </div>
              <div className="det">
                <strong>Date of Joining </strong> :{" "}
                <span>{data.dateOfJoining}</span>
              </div>
              <div className="det">
                <strong>Date of Relieving </strong> :{" "}
                <span>{data.dateOfRelieving}</span>
              </div>
              <div className="det">
                <strong>Total Experience </strong> :{" "}
                <span>{data.totalExperience}</span>
              </div>
            </div>
            <div className="logo">
              <img src={data.companyLogo} alt="virtusa_logo" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionComp;
