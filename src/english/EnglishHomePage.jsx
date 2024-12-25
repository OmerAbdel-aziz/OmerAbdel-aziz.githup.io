import About from "./components/About";
import Centers from "./components/Centers";
import Hero from "./components/Hero";
import Staff from "./components/Staff";
import Students from "./components/Students";
import News from "./components/News";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <div lang="en">
      <Hero />
      <About className="font-roboto" />
      <Staff className="font-roboto" />
      <Students className="font-roboto" />
      <Centers className="font-roboto" />
      <News className="font-roboto" isHome={true} />
      <Contact className="font-roboto" />
    </div>
  );
};

export default HomePage;
