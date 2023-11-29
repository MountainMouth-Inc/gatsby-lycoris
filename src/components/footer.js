import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "var(--white)",
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: "50px",
    }}
  >
    <div class="row flex-center">
      <div class="col-12 col" align="center">
        <a
          href="https://en.wikipedia.org/wiki/Nullius_in_verba"
          target="_blank"
        >
          © {new Date().getFullYear()}
          {` `}Nullius in verba
        </a>
        {` ❤️ `}
        <a href="/privacy/">privacy policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
