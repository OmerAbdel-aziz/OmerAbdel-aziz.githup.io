import React from "react";
import Hero from "./components/Hero";
import About from "../arabic/components/About";
import Staff from "./components/Staff";
import Students from "./components/Students";
import Centers from "./components/Centers";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../index.css";

const ArabicHomePage = () => {
  return (
    <div lang="ar">
      <Hero />
      <About className="font-cairo" />
      <Staff className="font-cairo" />
      <Students />
      <Centers />
      <News isHome={true} />
      <Contact />
    </div>
  );
};

export default ArabicHomePage;
