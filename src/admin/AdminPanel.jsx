import React, { useState } from "react";

const AdminPanel = () => {
  const [content, setContent] = useState({
    hero: { title: "", description: "", image: null },
    navbar: { links: [""] },
    faq: [{ question: "", answer: "" }],
  });

  // Update Content
  const updateContent = (section, field, value) => {
    setContent((prevContent) => ({
      ...prevContent,
      [section]: { ...prevContent[section], [field]: value },
    }));
  };

  const handleFileUpload = (section, field, file) => {
    const reader = new FileReader();
    reader.onload = () => {
      updateContent(section, field, reader.result); // Store Base64
    };
    reader.readAsDataURL(file);
  };

  const saveContent = () => {
    // Save to localStorage or backend
    localStorage.setItem("siteContent", JSON.stringify(content));
    alert("Content Saved!");
  };

  return (
    <div className="relative top-10  flex w-full">
      <section class=" w-full relative right-[20%]">
        <div class="py-8 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Edit Section
          </h2>

          <form action="#" class="space-y-8">
            <div>
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Section Title
              </label>
              <input
                type="text"
                id="title"
                class="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
                placeholder="type the title here"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Content
              </label>
              <textarea
                id="content"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#637C65] focus:ring-[#637C65] focus:border-[#637C65] "
                placeholder="Type the content here"
              ></textarea>
            </div>

            <form className="max-w-lg">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="user_avatar"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </form>

            <button
              type="submit"
              className="block w-full rounded-md bg-[#1E1E1E] hover:bg-[#637C65] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65] "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
