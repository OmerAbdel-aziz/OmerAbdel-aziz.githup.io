// src/layouts/AdminLayout.js
import React from "react";
import AdminSideBar from "../admin/AdminSideBar";
import AdminNav from "../admin/AdminNav";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNav lang="ar" />
      <div style={{ display: "flex" }}>
        <AdminSideBar lang="ar" />
        <div
          className="relative w-full left-[20%] justify-center items-center"
          lang="ar"
        >
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
