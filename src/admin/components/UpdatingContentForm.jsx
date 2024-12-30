import { useState, useEffect } from "react";
import { data, useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const UpdatingContentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("null");
  const [content, setContent] = useState("null");
  const [titleEn, setTitleEn] = useState("null");
  const [contentEn, setContentEn] = useState("null");
  const [error, setError] = useState(null);
  //fetching arabic post content
  useEffect(() => {
    const fetchPostContent = async (e) => {
      const { data, error } = await supabase
        .from("ArabicNews")
        .select("*")
        .eq("id", id)
        .single();

      if (data.length === 0) {
        console.error("No news found with the given ID.");
      } else if (data.length > 1) {
        console.error("Multiple news items found with the same ID.");
      }
      if (data) {
        setTitle(data.title);
        setContent(data.content);
      }
    };
    fetchPostContent();
  }, [id, navigate]);

  //fetching English post content
  useEffect(() => {
    const fetchPostContentEn = async (e) => {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("id", id)
        .single();

      if (data.length === 0) {
        console.error("No news found with the given ID.");
      } else if (data.length > 1) {
        console.error("Multiple news items found with the same ID.");
      }
      if (data) {
        setTitleEn(data.title);
        setContentEn(data.content);
      }
    };
    fetchPostContentEn();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("ArabicNews")
      .update({ title, content })
      .eq("id", id);

    if (!title || !content) {
    }

    if (data) {
    }
  };
  const handleSubmitEn = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("News")
      .update({ title, content })
      .eq("id", id);

    if (!title || !content) {
    }

    if (data) {
    }
  };

  const handleDelete = async (id) => {
    // Confirm deletion
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return; // Exit if the user cancels

    console.log("Deleting post with ID:", id); // Log the ID being deleted

    const { data, error } = await supabase
      .from("ArabicNews")
      .delete()
      .eq("id", id); // Ensure you are using the correct column name for the ID

    if (error) {
      console.error("Error deleting post:", error.message || error); // Log the error message
      toast({
        title: "Error",
        description:
          error.message || "An error occurred while deleting the post.",
        status: "error",
      });
    } else {
      toast({
        title: "Post deleted successfully",
        description: `Post with ID ${id} has been deleted.`,
        status: "success",
      });

      // Optionally, update the state to remove the deleted post from the UI
      // setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
    }
  };
  return (
    <>
      <section class=" w-full relative">
        <div class="py-8 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            اضافة خبر جديد
          </h2>

          <form action="#" class="space-y-8" onSubmit={handleSubmit}>
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
                value={title}
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
                value={content}
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
              onClick={() => {
                toast({
                  title: "تمت اضافة الخبر بنجاح",
                  description: `تمت الاضافة بتاريخ ${new Date().toLocaleString()}`,
                  status: "success",
                });
              }}
            >
              اضافة خبر جديد
            </button>
            <button
              type="button"
              className="block w-full rounded-md bg-[#F95454] hover:bg-[#C62E2E] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65]"
              onClick={() => handleDelete(id)}
            >
              حذف الخبر
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
                value={titleEn}
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
                value={contentEn}
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
              onClick={() => {
                toast({
                  title: "Post added successfully",
                  description: `Published at ${new Date().toLocaleString()}`,
                  status: "success",
                });
              }}
            >
              Publish the post
            </button>
            <button
              type="submit"
              className="block w-full rounded-md bg-[#F95454] hover:bg-[#C62E2E] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65] "
              onClick={() => handleDelete(id)}
            >
              Delete the post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdatingContentForm;
