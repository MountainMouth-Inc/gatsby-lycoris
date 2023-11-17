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
    <div class="row">
      <div class="col-10 col"></div>
      <div class="col-2 col">
        © {new Date().getFullYear()}
        {` `}Nullius in verba
      </div>
    </div>
  </footer>
);

export default Footer;
