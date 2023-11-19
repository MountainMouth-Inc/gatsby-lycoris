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
      <div>
        <p>
          © {new Date().getFullYear()}
          {` `}Nullius in verba
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
