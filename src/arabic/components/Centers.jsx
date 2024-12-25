import React from "react";

const Centers = () => {
  return (
    <div
      className="flex w-full flex-col px-10 py-10 bg-base-200 relative top-[555px]"
      id="centers"
    >
      <section className="bg-white  rounded-lg">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg text-end">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              استكشف المراكز والمعاهد
            </h2>
            <p className="mb-4">
              لا يعرض أحد لتدخل تعسفي في حياته الخاصة أو أسرته أو مسكنه أو
              مراسلاته أو لحملات على شرفه وسمعته. ولكل شخص الحق في حماية القانون
              من مثل هذا التدخل أو تلك الحملات. لكل شخص الحق في حرية التفكير
              والضمير والدين. ويشمل هذا الحق حرية تغيير ديانته أو عقيدته، وحرية
              الإعراب عنهما بالتعليم والممارسة وإقامة الشعائر ومراعاتها سواء
              أكان ذلك سرا أم مع الجماعة. لكل شخص الحق في حرية الرأي والتعبير.
              ويشمل هذا الحق حرية اعتناق الآراء دون أي تدخل، واستقاء الأنباء
              والأفكار وتلقيها وإذاعتها بأية وسيلة كانت دون تقيد بالحدود
              الجغرافية. لكل شخص بصفته عضوا في المجتمع الحق في الضمانة
              الاجتماعية وفي أن تحقق بوساطة المجهود القومي والتعاون الدولي وبما
              يتفق ونظم كل دولة ومواردها الحقوق الاقتصادية والاجتماعية والتربوية
              التي لا غنى عنها لكرامته وللنمو الحر لشخصيته.
            </p>

            <a
              href="/centers"
              class="inline-flex flex-row-reverse gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 hidden md:inline-flex"
            >
              اكتشف المزيد
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Centers;
