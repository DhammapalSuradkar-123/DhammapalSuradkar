import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../comps/Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
