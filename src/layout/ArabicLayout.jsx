import React from "react";
import Navbar from "../arabic/components/Navbar";
import Footer from "../arabic/components/Footer";
const ArabicLayout = ({ children }) => {
  return (
    <>
      <Navbar lang="ar" />
      <main>{children}</main>
      <Footer lang="ar" />
    </>
  );
};

export default ArabicLayout;
