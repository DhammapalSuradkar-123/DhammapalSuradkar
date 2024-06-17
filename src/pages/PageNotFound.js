import pageNotFoundImg from "../IMG/404-page.png";
import "../css/pageNotFound.css";

const PageNotFound = () => {
  return (
    <>
      <div className="container pageNotFound">
        <div className="row">
          <div className="col-md-12 pnf">
            <img src={pageNotFoundImg} alt="404 page" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
