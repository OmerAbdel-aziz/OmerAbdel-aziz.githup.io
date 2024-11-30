import About from "../components/About";
import Centers from "../components/Centers";
import Hero from "../components/Hero";
import Staff from "../components/Staff";
import Students from "../components/Students";
import News from "../components/News";
import Contact from "../components/Contact";
import AboutAlter from "../components/AboutAlter";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About className="font-roboto" />
      <Staff className="font-roboto" />
      {/* <AboutAlter className="font-roboto" /> */}
      <Students className="font-roboto" />
      <Centers className="font-roboto" />
      <News className="font-roboto" />
      <Contact className="font-roboto" />
    </>
  );
};

export default HomePage;
