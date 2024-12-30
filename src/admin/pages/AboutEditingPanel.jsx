import React from "react";
import { useState, useEffect } from "react";
import AdminContentForm from "../components/AddingContentForm";
import PostTable from "../components/PostTable";

const AboutEditingPanel = () => {
  return (
    <>
      <div className="relative">
        <AdminContentForm />
      </div>
    </>
  );
};

export default AboutEditingPanel;
