import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import About from "./pages/About";
import Privacy from "./pages/Privacy";

import "./App.css";
import { Route, Routes } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const Home = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
      <>
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        {/* <About data={landingPageData.About} /> */}
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Testimonials data={landingPageData.Testimonials} />
        {/* <Team data={landingPageData.Team} /> */}
      </>
    );
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
