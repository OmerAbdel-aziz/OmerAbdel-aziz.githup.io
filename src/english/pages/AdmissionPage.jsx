import { useEffect, useState } from "react";

const AdmissionPage = () => {
  return (
    <>
      <div
        className="hero absolute top-0 min-h-[50vh] w-full"
        style={{
          backgroundImage: "url(../../assets/images/banner11.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start md:right-[62%] md:relative px-10 md:px-0">
            <div className="py-8">
              <a
                href="/english"
                class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <svg
                  class="rotate-180 w-3.5 h-3.5 ms-2"
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
                <span className="ml-2"> Back to Home Page </span>
              </a>
            </div>
            <h1 className="mb-5 text-5xl font-bold">
              Student Affairs Department
            </h1>
          </div>
        </div>
      </div>
      <section class="bg-white  relative top-[45vh] min-h-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg  ">
            <div>
              <h2 className="text-4xl text-black font-bold">This Department</h2>
              <p>
                This department encompasses admissions, registration, and
                academic advising. The Admissions and Registration Section
                provides the following services to students:
              </p>
              <ul>
                <li>
                  Receiving files and lists of applicants seeking enrollment in
                  the college's programs.
                </li>
                <li>Issuing receipts for tuition fee payments.</li>
                <li>
                  Sorting files, reviewing applicant data, and verifying
                  compliance with enrollment requirements.
                </li>
                <li>
                  Preparing admission tests, organizing committees, and
                  reviewing the data and files of accepted students after the
                  admission process is complete.
                </li>
                <li>
                  Assigning accepted students to designated sections based on
                  the academic schedules.
                </li>
                <li>
                  Issuing student ID cards, enrollment certificates, and status
                  statements.
                </li>
                <li>
                  Managing transfer and enrollment procedures to and from the
                  college, including transfers from other higher education
                  institutions.
                </li>
                <li>
                  Preparing for examinations and issuing exam seat numbers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionPage;
