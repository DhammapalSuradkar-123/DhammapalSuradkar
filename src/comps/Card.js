import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";

export default function CardComp({ img, cert, issued, link, class_name }) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className={`c1 ${class_name}`}
    >
      <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
      <CardContent className="card-body">
        <Typography gutterBottom variant="h5" component="div" className="title">
          <ArrowRightIcon sx={{ verticalAlign: "bottom", color: "#1976d2" }} />{" "}
          {cert}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ArrowCircleRightIcon
            fontSize="small"
            sx={{
              verticalAlign: "bottom",
              color: "#1976d2",
              marginRight: "10px",
            }}
          />
          {issued}
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <Button
          variant="outlined"
          size="small"
          onClick={() => window.open(link, "_blank")}
          className="btn"
          startIcon={<DriveFileMoveIcon />}
        >
          Certificate
        </Button>
      </CardActions>
    </Card>
  );
}
