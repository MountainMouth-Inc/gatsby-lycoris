import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "var(--primary-light)",
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: "50px",
    }}
  >
    <div class="row flex-center">
      <div class="sm-2 col">
        © {new Date().getFullYear()}
        {` `}Nullius in verba
      </div>
      <div class="sm-2 col">
        <a href="/privacy/">privacy policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
