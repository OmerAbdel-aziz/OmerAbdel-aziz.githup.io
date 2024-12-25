import Logo from "../../assets/images/Logo.gif";
import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null); // No need for TypeScript type annotations

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative top-[555px] bg-white py-10" id="about">
      <div className="border-b border-[#1E1E1E]/20 bg-white">
        <div className="hero pb-10">
          <div className="hero-content flex-col lg:flex-row justify-between lg:w-[90%]">
            <img
              src={Logo}
              className="max-w-xs md:max-w-sm rounded-lg md:w-1/4"
              alt="College Logo"
            />
            <div className="text-center lg:text-left md:w-3/4">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
                Welcome to Our College
              </h2>

              <div id="accordion-custom">
                {/* Accordion Item 1 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>What is Flowbite?</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === 1 ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === 1 && (
                    <div className="py-5 border-b border-gray-200">
                      <p className="mb-2 text-gray-500">
                        Flowbite is an open-source library of interactive
                        components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                      </p>
                      <p className="text-gray-500">
                        Check out this guide to learn how to{" "}
                        <a
                          href="/docs/getting-started/introduction/"
                          className="text-blue-600 hover:underline"
                        >
                          get started
                        </a>{" "}
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>Is there a Figma file available?</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === 2 ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === 2 && (
                    <div className="py-5 border-b border-gray-200">
                      <p className="mb-2 text-gray-500">
                        Flowbite is first conceptualized and designed using the
                        Figma software so everything you see in the library has
                        a design equivalent in our Figma file.
                      </p>
                      <p className="text-gray-500">
                        Check out the{" "}
                        <a
                          href="https://flowbite.com/figma/"
                          className="text-blue-600 hover:underline"
                        >
                          Figma design system
                        </a>{" "}
                        based on the utility classes from Tailwind CSS and
                        components from Flowbite.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>
                      What are the differences between Flowbite and Tailwind UI?
                    </span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === 3 ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === 3 && (
                    <div className="py-5 border-b border-gray-200">
                      <p className="mb-2 text-gray-500">
                        The main difference is that the core components from
                        Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product.
                      </p>
                      <p className="mb-2 text-gray-500">
                        We recommend using both Flowbite, Flowbite Pro, and even
                        Tailwind UI to combine their strengths.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
