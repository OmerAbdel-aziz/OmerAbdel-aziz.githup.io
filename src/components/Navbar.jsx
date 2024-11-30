import Logo from "../assets/images/Logo.gif";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(scrollY / 200, 1);
      setBgOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex w-full bg-[#1E1E1E] text-black text-[18px] md:text-3xl md:font-medium z-50 justify-start items-center px-4 py-2 sticky top-0 transition duration-500`}
      style={{
        backgroundColor: `rgba(54,87,60, ${bgOpacity})`,
      }}
    >
      <div className="flex items-center justify-between flex-row-reverse w-full md:w-fit">
        {/*Mobile menu*/}
        <div className=" bg-transparent hover:bg-[#637C65] border-white text-white text-[14px] rounded-full px-3 py-3 right-0 block md:hidden ">
          <a id="navbar-language" href="#language" className=" ">
            <Languages className="h-4 w-4" />
          </a>
        </div>
        <div className="dropdown flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              id="navbar-menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow top-14 text-white"
          >
            <li>
              <a href="/" className="text-[14px] font-roboto text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-[14px] font-roboto text-black">
                About
              </a>
            </li>
            <li>
              <a
                href="#students"
                className="text-[14px] font-roboto text-black"
              >
                Students
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black"
                  >
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black"
                  >
                    Academic Guidance
                  </a>
                </li>
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black"
                  >
                    Departments
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#course-info"
                className="text-[14px] font-roboto text-black"
              >
                Course Info
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#course-admission"
                    className="text-[14px] font-roboto text-black"
                  >
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="#course-guidance"
                    className="text-[14px] font-roboto text-black"
                  >
                    Academic Guidance
                  </a>
                </li>
                <li>
                  <a
                    href="#course-departments"
                    className="text-[14px] font-roboto text-black"
                  >
                    Departments
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#centers" className="text-[14px] font-roboto text-black">
                Centers
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#center1"
                    className="text-[14px] font-roboto text-black"
                  >
                    Um Qusai center
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] font-roboto text-black"
                  >
                    Indegnous Knowledge center
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] font-roboto text-black"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact" className="text-[14px] font-roboto text-black">
                Contact us
              </a>
            </li>
          </ul>

          <img
            src={Logo}
            alt="university logo"
            width={50}
            height={50}
            className="mt-1 rounded-full block md:hidden w-12 h-12"
          />
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex items-center gap-4 w-full text-white font-thin">
        <a href="/">
          <img
            src={Logo}
            alt="university logo"
            width={50}
            height={50}
            className="mt-1"
          />
        </a>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/" className="text-[14px] md:text-lg font-roboto">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[14px] md:text-lg font-roboto">
              About
            </a>
          </li>

          <li>
            <details>
              <summary className="text-[14px] md:text-lg font-roboto">
                Students
              </summary>
              <ul className="p-2 z-10 text-black">
                <li>
                  <a
                    href="#students"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="#guidance"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Academic Guidance
                  </a>
                </li>
                <li>
                  <a
                    href="#departments"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Departments
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-[14px] md:text-lg font-roboto">
                Course Info
              </summary>
              <ul className="p-2 z-10 text-black">
                <li>
                  <a
                    href="#course-link1"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#course-link2"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    href="#course-link3"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-[14px] md:text-lg font-roboto">
                Centers
              </summary>
              <ul className="p-2 z-10 text-black">
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Um Qusai Center
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Indegnous Knowldege Center
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] md:text-lg font-roboto"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#news" className="text-[14px] md:text-lg font-roboto">
              News
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[14px] md:text-lg font-roboto">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className=" bg-[#343300] hover:bg-[#637C65] border-white text-white text-[14px] rounded-full px-3 py-3 right-0 hidden md:block">
        <a id="navbar-language" href="#language" className="bg-[#343300] ">
          <Languages className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
