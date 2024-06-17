import * as React from "react";
import Button from "@mui/material/Button";

export default function ProjectCard(props) {
  return (
    <div className="container card">
      <div className="wrapper">
        <h2>{props.data.name}</h2>
        <p>
          Technologies Used : <br />
          {props.data.technologies}
        </p>
        <p style={{ marginTop: "0" }}>Status : {props.data.status}</p>
      </div>
      <div className="btn">
        <Button
          variant="contained"
          size="small"
          className="btn1"
          onClick={() => window.open(props.data.link, "_blank")}
          disabled={props.data.status !== "Completed"}
        >
          Check Out
        </Button>
      </div>
    </div>
  );
}
