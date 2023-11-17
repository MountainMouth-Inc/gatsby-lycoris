import React from "react";

import Footer from "@components/footer.js";
import Nav from "@components/nav.js";
import Seo from "@components/seo.js";
import "@styles/paper.css";

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
