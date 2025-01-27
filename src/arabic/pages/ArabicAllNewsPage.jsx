import React from "react";
import Postcard from "../../english/components/sub-components/PostCard";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";

const ArabicAllNewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase.from("ArabicNews").select();

        if (error) {
          throw new Error(error.message);
        }

        setPosts(data);
      } catch (error) {
        setError("Could not fetch news: " + error.message);
        setPosts([]);
        console.error(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <>
      <div
        className="hero absolute top-0 min-h-[50vh] w-full"
        style={{
          backgroundImage: "url(../../assets/images/banner11.jpg)",
        }}
        lang="ar"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl md:justify-END md:text-right md:items-end md:left-[42%] md:relative px-10 md:px-0">
            <div className="py-8">
              <a
                href="/"
                class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <span className="ml-2"> عودة الى الصفحة الرئيسية</span>
                <svg
                  class=" w-3.5 h-3.5 ms-2"
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
            <h1 className="mb-5 text-4xl font-bold">
              اطلع على اخر الأخبار و المستجدات المتعلقة بالكلية
            </h1>
          </div>
        </div>
      </div>
      <div className=" px-10 md:px-20 relative top-[350px]">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Postcard
                key={post.id}
                id={post.id}
                title={post.title}
                content={
                  post.content.length > 150
                    ? post.content.substring(0, 150) + "..."
                    : post.content
                }
                image={post.image}
                lang="ar"
              />
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ArabicAllNewsPage;
