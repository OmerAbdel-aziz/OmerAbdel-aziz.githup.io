// src/layouts/AdminLayout.js
import React from "react";
import AdminNav from "@/admin/components/AdminNav";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNav lang="ar" />
      <div className="relative w-full justify-center items-center" lang="ar">
        <main>{children}</main>
      </div>
    </>
  );
};

export default AdminLayout;
