import React from "react";
import "@styles/paper.css";
import Footer from "@components/footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
