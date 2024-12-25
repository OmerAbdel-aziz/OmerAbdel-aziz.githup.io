import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";

const SingleNewsPage = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("id", id);
      if (!error) setNewsData(data);
    };
    fetchNews();
  }, [id]);

  return <>{newsData && <div>{newsData.title}</div>}</>;
};

export default SingleNewsPage;
