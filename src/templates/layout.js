import React from "react";
import "@styles/paper.css";
import StaticBackground from "@components/staticBackground.js";
import Footer from "@components/footer.js";

const Layout = ({ children }) => {
  return (
    <html>
      <StaticBackground />
      <main>{children}</main>
      <Footer />
    </html>
  );
};

export default Layout;
