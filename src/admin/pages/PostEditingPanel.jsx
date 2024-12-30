import React, { useState, useEffect } from "react";
import AdminContentForm from "../components/AddingContentForm";
import PostTable from "../components/PostTable";
import UpdatingContentForm from "../components/UpdatingContentForm";

const PostEditingPanel = () => {
  return (
    <div className="w-full">
      <UpdatingContentForm />
    </div>
  );
};

export default PostEditingPanel;
