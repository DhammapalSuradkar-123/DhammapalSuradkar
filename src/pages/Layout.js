import { Outlet } from "react-router-dom";
import Navbar from "../comps/Navbar";
import "../comps/compsStyle.css";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="blank-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
