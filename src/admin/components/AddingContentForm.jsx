import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
const AddingContentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("null");
  const [content, setContent] = useState("null");
  const [titleEn, setTitleEn] = useState("null");
  const [contentEn, setContentEn] = useState("null");
  const [error, setError] = useState(null);

  //form subision logic for arabic posts
  const handleSubmitAr = async (e) => {
    e.preventDefault();
    console.log(title, content);

    // Check if title and content are provided
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        status: "error",
      });
      return; // Exit the function if validation fails
    }

    // Proceed with the insert operation
    const { data, error } = await supabase.from("ArabicNews").insert([
      {
        title,
        content,
      },
    ]);

    // Show success toast
    toast({
      title: "Post added successfully",
      description: `Published at ${new Date().toLocaleString()}`,
      status: "success",
    });

    // Check for errors after the insert operation
    if (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  //form submission logic for english posts
  const handleSubmitEn = async (e) => {
    e.preventDefault();

    // Check if title and content are provided
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        status: "error",
      });
      return; // Exit the function if validation fails
    }

    // Proceed with the insert operation
    const { data, error } = await supabase.from("News").insert([
      {
        title,
        content,
      },
    ]);

    // Show success toast
    toast({
      title: "Post added successfully",
      description: `Published at ${new Date().toLocaleString()}`,
      status: "success",
    });

    // Check for errors after the insert operation
    if (error) {
      console.log(error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
  };

  return (
    <>
      <section class=" w-full relative">
        <div class="py-8 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            اضافة خبر جديد
          </h2>

          <form action="#" class="space-y-8" onSubmit={handleSubmitAr}>
            <div className="flex flex-col items-end">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                عنوان الخبر
              </label>
              <input
                type="text"
                id="title"
                class="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
                placeholder="type the title here"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div class="sm:col-span-2 flex flex-col items-end">
              <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                محتوى الخبر
              </label>
              <textarea
                id="content"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#637C65] focus:ring-[#637C65] focus:border-[#637C65] "
                placeholder="Type the content here"
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>

            <form className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 flex flex-col items-end"
                htmlFor="user_avatar"
              >
                اضافة صورة للخبر
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
              اضافة خبر جديد
            </button>
          </form>
        </div>
      </section>
      <section class=" w-full relative">
        <div class="py-8 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Add a new Post
          </h2>

          <form action="#" class="space-y-8" onSubmit={handleSubmitEn}>
            <div className="flex flex-col items-end">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Post Title
              </label>
              <input
                type="text"
                id="title"
                class="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
                placeholder="type the title here"
                onChange={(e) => setTitleEn(e.target.value)}
                required
              />
            </div>
            <div class="sm:col-span-2 flex flex-col items-end">
              <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Post Content
              </label>
              <textarea
                id="content"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#637C65] focus:ring-[#637C65] focus:border-[#637C65] "
                placeholder="Type the content here"
                onChange={(e) => setContentEn(e.target.value)}
                required
              ></textarea>
            </div>

            <form className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 flex flex-col items-end"
                htmlFor="user_avatar"
              >
                Add a picture to the post
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
              onClick={() => {}}
            >
              Publish the post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddingContentForm;
