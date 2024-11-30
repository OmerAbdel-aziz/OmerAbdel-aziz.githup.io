const StudentCard = ({ title, description, image, link }) => {
  return (
    <div className="flex  items-center justify-center bg-transparent rounded-xl">
      <div className="group relative items-center justify-center overflow-hidden cursor-pointer ">
        <div className="h-full w-80 overflow-hidden md:w-80 rounded-lg py-0">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="photo"
            className="h-full w-full transition duration-500 group-hover:scale-110 rounded-xl"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 transition duration-500 group-hover:opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  px-9 text-center translate-y-[75%] transition duration-500 group-hover:translate-y-[15%]">
          <h2 className="text-3xl font-bold text-white pb-8">{title}</h2>
          <p className="text-xl text-white  py-2 text-center">{description}</p>
          <a
            href={link}
            class="inline-flex items-center px-3 py-2 mb-8 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Learn More
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </div>
    </div>
  );
};

export default StudentCard;
