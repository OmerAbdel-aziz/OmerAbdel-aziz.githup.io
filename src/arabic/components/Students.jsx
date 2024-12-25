import React from "react";
import StudentCard from "./sub-components/StudentCard";
const Students = () => {
  return (
    <div
      className="flex w-full flex-col px-10 justify-center items-center py-10 relative top-[555px] bg-white"
      id="students"
    >
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
          شؤون الطلاب
        </h2>
        <p class="font-light lg:mb-16 sm:text-xl ">
          كل الناس سواسية أمام القانون ولهم الحق في التمتع بحماية متكافئة عنه
          دون أية تفرقة، كما أن لهم جميعاً الحق في حماية متساوية ضد أي تمييز
          يُخل بهذا الإعلان وضد أي تحريض على تمييز كهذا.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-16 px-10 md:px-0">
        {/* first card */}
        <StudentCard
          title={"القبول والتسجيل"}
          description={
            "لا يعرض أحد لتدخل تعسفي في حياته الخاصة أو أسرته أو مسكنه أو مراسلاته أو لحملات على شرفه وسمعته. ولكل شخص الحق في حماية القانون من مثل هذا التدخل أو "
          }
          link={"/admission"}
        />
        {/* second card */}
        <StudentCard
          title={"الارشاد الاكاديمي"}
          description={
            "لا يعرض أحد لتدخل تعسفي في حياته الخاصة أو أسرته أو مسكنه أو مراسلاته أو لحملات على شرفه وسمعته. ولكل شخص الحق في حماية القانون من مثل هذا التدخل  "
          }
          link={"/academic"}
        />
        {/* third card */}
        <StudentCard
          title={"اقسام الكلية"}
          description={
            "لا يعرض أحد لتدخل تعسفي في حياته الخاصة أو أسرته أو مسكنه أو مراسلاته أو لحملات على شرفه وسمعته. ولكل شخص الحق في حماية القانون "
          }
          link={"/departments"}
        />
      </div>
    </div>
  );
};

export default Students;
