import React from "react";
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
          <div className="hero-content flex-col lg:flex-row-reverse justify-between lg:w-[90%]">
            <img
              src={Logo}
              className="max-w-xs md:max-w-sm rounded-lg md:w-1/4"
              alt="College Logo"
            />
            <div className="text-center lg:text-right md:w-3/4">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
                مرحبا بك في كليتنا
              </h2>

              <div id="accordion-custom text-right">
                {/* Accordion Item 1 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="flex flex-row-reverse items-center justify-between w-full py-5 font-medium text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>النشأة</span>
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
                        لكل شخص الحق في أن يلجأ إلى المحاكم الوطنية لإنصافه عن
                        أعمال فيها اعتداء على الحقوق الأساسية التي يمنحها له
                        القانون. لا يجوز القبض على أي إنسان أو حجزه أو نفيه
                        تعسفاً. لكل إنسان الحق،
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="flex flex-row-reverse items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>الرؤية</span>
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
                        لكل شخص الحق في أن يلجأ إلى المحاكم الوطنية لإنصافه عن
                        أعمال فيها اعتداء على الحقوق الأساسية التي يمنحها له
                        القانون. لا يجوز القبض على أي إنسان أو حجزه أو نفيه
                        تعسفاً. لكل إنسان الحق،
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="flex flex-row-reverse items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>الأهداف</span>
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
                        لكل شخص الحق في أن يلجأ إلى المحاكم الوطنية لإنصافه عن
                        أعمال فيها اعتداء على الحقوق الأساسية التي يمنحها له
                        القانون. لا يجوز القبض على أي إنسان أو حجزه أو نفيه
                        تعسفاً. لكل إنسان الحق،
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
