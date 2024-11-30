import banner11 from "../assets/images/banner11.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const Hero = () => {
  return (
    <>
      <div className="carousel w-full absolute top-0">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${banner11})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content text-center md:text-left md:justify-start md:items-start">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start md:right-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome to Ghibaish College of Science & Technology
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❮ </span>
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❯</span>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            id="second-hero"
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start md:right-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold">Our Vision</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❮ </span>
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❯</span>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start md:right-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold">Our Mission</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❮ </span>
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❯</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
