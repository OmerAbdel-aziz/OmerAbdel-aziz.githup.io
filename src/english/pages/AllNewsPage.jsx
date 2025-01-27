import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import Postcard from "../components/sub-components/PostCard";
const AllNewsPage = ({ isHome = false }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("News")
          .select()
          .limit(isHome ? 3 : undefined);

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
        className="hero absolute top-0 min-h-[70vh] w-full"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start md:right-[42%] md:relative px-10 md:px-0">
            <div className="py-8">
              <a
                href="/english"
                class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
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
                <span className="ml-2"> Back to Home Page </span>
              </a>
            </div>
            <h1 className="mb-5 text-5xl font-bold">
              Here Comes The Specific Content For This Page
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 my-10">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 relative top-[400px]">
          {error && <p>{error}</p>}
          {posts.length > 0 ? (
            posts.map((post) => (
              <Postcard
                key={post.id}
                id={post.id}
                title={post.title}
                content={
                  post.content.length > 100
                    ? post.content.substring(0, 150) + "..."
                    : post.content
                }
                image={post.image}
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

export default AllNewsPage;
