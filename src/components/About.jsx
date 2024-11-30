import tree from "../assets/images/tree.jpg";
import Logo from "../assets/images/Logo.gif";
import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" relative top-[555px]  bg-white mx-auto py-10" id="about">
      <div className="border-b  border-[#1E1E1E]/20 bg-white mx-auto max-w-[90%]">
        <div className="hero pb-10">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={Logo}
              className="max-w-xs md:max-w-sm rounded-lg shadow-2xl md:w-2/5"
            />
            <div className="text-center lg:text-left md:w-3/5">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
                Welcome to Our College
              </h2>

              <div
                id="accordion-color"
                data-accordion="collapse"
                data-active-classes="bg-blue-100  text-blue-600 "
              >
                <h2 id="accordion-color-heading-1">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(1)}
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200   hover:bg-blue-100 gap-3 ${
                      openIndex === 1 ? "bg-blue-100" : ""
                    }`}
                    data-accordion-target="#accordion-color-body-1"
                    aria-expanded={openIndex === 1}
                    aria-controls="accordion-color-body-1"
                  >
                    <span>What is Flowbite?</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-color-body-1"
                  className={`${openIndex === 1 ? "block" : "hidden"}`}
                  aria-labelledby="accordion-color-heading-1"
                >
                  <div class="p-5 border border-b-0 border-gray-200 ">
                    <p class="mb-2 text-gray-500 ">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p class="text-gray-500 ">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        class="text-blue-600  hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-color-heading-2">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(2)}
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200  hover:bg-blue-100  gap-3 ${
                      openIndex === 2 ? "bg-blue-100" : ""
                    }`}
                    data-accordion-target="#accordion-color-body-2"
                    aria-expanded={openIndex === 2}
                    aria-controls="accordion-color-body-2"
                  >
                    <span>Is there a Figma file available?</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-color-body-2"
                  className={`${openIndex === 2 ? "block" : "hidden"}`}
                  aria-labelledby="accordion-color-heading-2"
                >
                  <div class="p-5 border border-b-0 border-gray-200 ">
                    <p class="mb-2 text-gray-500 ">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p class="text-gray-500 ">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        class="text-blue-600 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-color-heading-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(3)}
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200  hover:bg-blue-100 gap-3 ${
                      openIndex === 3 ? "bg-blue-100" : ""
                    }`}
                    data-accordion-target="#accordion-color-body-3"
                    aria-expanded={openIndex === 3}
                    aria-controls="accordion-color-body-3"
                  >
                    <span>
                      What are the differences between Flowbite and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-color-body-3"
                  className={`${openIndex === 3 ? "block" : "hidden"}`}
                  aria-labelledby="accordion-color-heading-3"
                >
                  <div class="p-5 border border-t-0 border-gray-200">
                    <p class="mb-2 text-gray-500 ">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p class="mb-2 text-gray-500">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p class="mb-2 text-gray-500 ">
                      Learn more about these technologies:
                    </p>
                    <ul class="ps-5 text-gray-500 list-disc">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          class="text-blue-600 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          class="text-blue-600  hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
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
