import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import OurTechnology from "../OurTechnology/OurTechnology";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/OurTechnology" element={<OurTechnology />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
