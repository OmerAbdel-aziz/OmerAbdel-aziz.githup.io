import { useState, useEffect } from "react";
import { data, useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const UpdatingContentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [error, setError] = useState(null);
  //fetching arabic post content
  useEffect(() => {
    const fetchPostContent = async (e) => {
      const { data, error } = await supabase
        .from("ArabicNews")
        .select("*")
        .eq("id", id)
        .single();

      const { dataEn, errorEn } = await supabase
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
        setTitle(data.title);
        setContent(data.content);
      }

      if (dataEn.length === 0) {
        console.error("No news found with the given ID.");
      } else if (dataEn.length > 1) {
        console.error("Multiple news items found with the same ID.");
      }
      if (dataEn) {
        setTitleEn(dataEn.title);
        setContentEn(dataEn.content);
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

      if (error) {
        console.error("Error fetching post content:", error);
        return;
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

    // Validate all required fields
    if (!title || !content || !titleEn || !contentEn) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
      });
      return;
    }

    try {
      // Update ArabicNews table
      const { error: arabicError } = await supabase
        .from("ArabicNews")
        .update({ title, content })
        .eq("id", id);

      if (arabicError) throw arabicError;

      // Update News table
      const { error: englishError } = await supabase
        .from("News")
        .update({ title: titleEn, content: contentEn })
        .eq("id", id);

      if (englishError) throw englishError;

      toast({
        title: "Success",
        description: "News updated successfully",
        status: "success",
      });
    } catch (error) {
      console.error("Error updating news:", error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const [{ error: arabicError }, { error: englishError }] =
        await Promise.all([
          supabase.from("ArabicNews").delete().eq("id", id),
          supabase.from("News").delete().eq("id", id),
        ]);

      if (arabicError) throw arabicError;
      if (englishError) throw englishError;

      toast({
        title: "Post deleted successfully",
        description: `Post with ID ${id} has been deleted.`,
        status: "success",
      });
      navigate("/admin");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: "Error",
        description: error.message || "Error deleting post",
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
            <div className="flex flex-col items-end">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                عنوان الخبر بالانجليزية
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
                محتوى الخبر بالانجليزية
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
              تعديل الخبر
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
    </>
  );
};

export default UpdatingContentForm;
