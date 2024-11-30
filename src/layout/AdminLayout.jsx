// src/layouts/AdminLayout.js
import React from "react";
import AdminSideBar from "../admin/AdminSideBar";
import AdminNav from "../admin/AdminNav";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNav />
      <div style={{ display: "flex", height: "100vh" }}>
        <AdminSideBar />
        <div className="relative w-full left-[20%] justify-center items-center">
          <header
            style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}
          >
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-start text-gray-900 pt-10">
              Admin Panel Header
            </h2>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
