import { supabase } from "../../utils/supabase";

import AddingContentForm from "../components/AddingContentForm";

const PostAddingPage = () => {
  return (
    <div className="flex flex-col w-full  " lang="ar">
      <AddingContentForm />
    </div>
  );
};

export default PostAddingPage;
