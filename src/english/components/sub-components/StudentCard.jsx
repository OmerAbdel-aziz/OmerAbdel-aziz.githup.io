const StudentCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg p-2 shadow-md border border-gray-200 ">
      <div className="flex  items-center justify-center bg-transparent ">
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer ">
          <div className="h-full w-80 overflow-hidden md:w-80 rounded-lg py-0">
            <img
              src={image}
              alt="photo"
              className="h-52 w-full transition duration-500 group-hover:scale-110 rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-0 transition duration-500 group-hover:opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center  px-9 text-center translate-y-[75%] transition duration-500 group-hover:translate-y-[-10%]">
            <div className="pb-2">
              <h2 className="text-3xl font-bold text-white pb-24">{title}</h2>

              <div className="">
                <a
                  href={link}
                  className="flex-row-reverse gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 hidden md:inline-flex"
                >
                  <svg
                    class="  w-3.5 h-3.5 ms-2"
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
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
