import React from "react";

const ArabicAcademicPage = () => {
  return (
    <>
      <div
        className="hero absolute top-0 min-h-[50vh] w-full"
        style={{
          backgroundImage: "url(../../assets/images/banner11.jpg)",
        }}
        lang="ar"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl md:justify-END md:text-right md:items-end md:left-[150%] md:relative px-10 md:px-0">
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
            <h1 className="mb-5 text-4xl font-bold">قسم شؤون الطلاب</h1>
          </div>
        </div>
      </div>
      <section
        class="bg-white dark:bg-gray-900 relative top-[250px] justify-end items-end flex flex-col w-full px-10 "
        lang="ar"
      >
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              يقدم قسم شئون الطلاب الخدمات التالية للطلاب
            </h2>
            <ol>
              <li>
                <p> إعتماد قيد الطلبة الجدد وتسجيلهم .</p>
              </li>
              <li>
                <p> إعداد أذون سداد الرسوم الدراسية .</p>
              </li>
              <li>
                <p> إستخراج البطاقات الدراسية .</p>
              </li>
              <li>
                <p> استخراج شهادات القيد وبيان الحالة .</p>
              </li>
              <li>
                <p> إجراءات التحويل ونقل القيد بين الكليات الأخرى .</p>
              </li>
              <li>
                <p>الإعداد للامتحانات واستخراج أرقام الجلوس .</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArabicAcademicPage;
