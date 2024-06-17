import React from "react";
import "../css/gallary.css";
import img1 from "../IMG/Certificates/meta_cert.jpg";
import img2 from "../IMG/Certificates/oracle_cert.jpg";
import img3 from "../IMG/Certificates/cert14.png";
import img4 from "../IMG/Certificates/microsoft_cert.jpg";
import img5 from "../IMG/Certificates/cert13.jpg";
import img6 from "../IMG/Certificates/cert15.jpg";
import img7 from "../IMG/Certificates/cert3.jpg";
import img8 from "../IMG/Certificates/cert1.png";
import img9 from "../IMG/Certificates/cert7.png";
import img10 from "../IMG/Certificates/cert4.jpg";
import img11 from "../IMG/Certificates/cert5.jpg";
import img12 from "../IMG/Certificates/cert6.jpg";
import img13 from "../IMG/Certificates/cert2.jpg";
import img14 from "../IMG/Certificates/cert8.jpg";
import img15 from "../IMG/Certificates/cert9.jpg";
import img16 from "../IMG/Certificates/cert10.jpg";
import img17 from "../IMG/Certificates/cert12.png";
import DialogComp from "../comps/DialogComp";

const Certificates = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dialogBox, setDialogBox] = React.useState("");
  const all_img = [
    { img: img1, alt: "image 1" },
    { img: img2, alt: "image 2" },
    { img: img3, alt: "image 3" },
    { img: img4, alt: "image 4" },
    { img: img5, alt: "image 5" },
    { img: img6, alt: "image 6" },
    { img: img7, alt: "image 7" },
    { img: img8, alt: "image 8" },
    { img: img9, alt: "image 9" },
    { img: img10, alt: "image 10" },
    { img: img11, alt: "image 11" },
    { img: img12, alt: "image 12" },
    { img: img13, alt: "image 13" },
    { img: img14, alt: "image 14" },
    { img: img15, alt: "image 15" },
    { img: img16, alt: "image 16" },
    { img: img17, alt: "image 17" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenImg = (img) => {
    setIsOpen(!isOpen);
    setDialogBox(<DialogComp imgData={img} func={handleClose} />);
  };

  return (
    <>
      <div className="container gallary">
        <div className="row r1">
          <div className="col-md-12 sec1">
            <h3 className="title">ALL CERTIFICATIONS</h3>
          </div>
        </div>
        <div className="row r2">
          {all_img.map((item, i) => (
            <div className="img-grid" key={i}>
              <img
                src={item.img}
                alt={item.alt}
                onClick={() => handleOpenImg(item)}
              />
            </div>
          ))}
        </div>
        <div className="row r3">{isOpen && dialogBox}</div>
      </div>
    </>
  );
};

export default Certificates;
