import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./compsStyle.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogComp({ imgData, func }) {
  const handleClose = () => {
    func();
  };

  return (
    <React.Fragment>
      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="dia-log"
      >
        <DialogContent>
          <div className="img">
            <img src={imgData.img} alt={imgData.alt} />
          </div>
        </DialogContent>
        {/* <DialogActions className="btns">
          <Button
            variant="contained"
            onClick={handleClose}
            size="small"
            startIcon={<ExitToAppIcon />}
          >
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
