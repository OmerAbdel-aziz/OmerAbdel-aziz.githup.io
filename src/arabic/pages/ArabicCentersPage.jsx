import React from "react";

const ArabicCentersPage = () => {
  return (
    <>
      <div
        className="hero absolute top-0 min-h-[70vh] w-full"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
        lang="ar"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl md:justify-END md:text-right md:items-end md:left-[42%] md:relative px-10 md:px-0">
            <div className="py-8">
              <a
                href="/"
                class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <span className="ml-2"> عودة الى الصفحة الرئيسية</span>
                <svg
                  class=" w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <h1 className="mb-5 text-4xl font-bold">
              العنوان الرئيسي لمحتوى هذه الصفحة
            </h1>
            <p className="mb-5">
              يولد جميع الناس أحرارًا متساوين في الكرامة والحقوق. وقد وهبوا
              عقلاً وضميرًا وعليهم أن يعامل بعضهم بعضًا بروح الإخاء.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 px-10 md:px-20 relative top-[470px]"></div>
    </>
  );
};

export default ArabicCentersPage;
