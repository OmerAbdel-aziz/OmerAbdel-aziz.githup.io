import { useState, useEffect } from "react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "../../components/ui/table";
import { supabase } from "../../utils/supabase";

const PostTable = ({ table }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase.from(table).select("*");

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

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className=" p-5 w-full px-10">
      <h3 className="text-lg md:text-2xl font-semibold mb-5">Posts</h3>
      <Table>
        <TableCaption>A list of your recent posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            {/* <TableHead className="hidden md:table-cell">Author</TableHead> */}
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead className="text-right">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">
                {post.title || "Untitled"}
              </TableCell>

              <TableCell className="hidden md:table-cell text-right">
                <h3>{post.date || "Untitled"}</h3>
              </TableCell>
              <TableCell className="text-right">
                <a
                  href={`/admin/edit-post/${post.id}`}
                  className="inline-flex flex-row-reverse gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 hidden md:inline-flex relative bottom-0"
                >
                  تعديل الخبر
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
