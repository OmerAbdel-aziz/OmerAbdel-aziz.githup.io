import StudentCard from "./sub-components/StudentCard";
import Admission from "../../../public/assets/images/addmission.jpg";
import Academic from "../../../public/assets/images/academics.jpg";
import Departments from "../../../public/assets/images/departments.jpg";

const Students = () => {
  return (
    <div
      className="flex w-full flex-col px-10 justify-center items-center py-10 relative top-[555px] bg-white"
      id="students"
    >
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
          Students Affairs
        </h2>
        <p class="font-light lg:mb-16 sm:text-xl ">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-16 px-10 md:px-0">
        {/* first card */}
        <StudentCard
          title={"Admission"}
          link={"/english/admission"}
          image={Admission}
        />
        {/* second card */}
        <StudentCard
          title={"Academics"}
          link={"/english/academic"}
          image={Academic}
        />
        {/* third card */}
        <StudentCard
          title={"Departments"}
          link={"/english/departments"}
          image={Departments}
        />
      </div>
    </div>
  );
};

export default Students;
