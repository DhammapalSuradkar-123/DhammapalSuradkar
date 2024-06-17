import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profession from "./pages/Profession";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profession" element={<Profession />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<Certificates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
