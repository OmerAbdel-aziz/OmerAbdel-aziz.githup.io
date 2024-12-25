import React from "react";
import Navbar from "../english/components/Navbar";
import Footer from "../english/components/Footer";
const EnglishLayout = ({ children }) => {
  return (
    <div>
      <Navbar lang="en" />
      <main>{children}</main>
      <Footer lang="en" />
    </div>
  );
};

export default EnglishLayout;
