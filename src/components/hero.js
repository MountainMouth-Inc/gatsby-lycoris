import React from "react";

import headerImage from "@images/chisato-bluesky.jpg";
import mainImage from "@images/chisato-red.jpg";
import Paper from "@components/paper.js";

import "../styles/font.css";

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "8rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${mainImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "110vh",
        width: "110vw",
        opacity: 0.5,
      }}
    />
    <Paper>
      <h2 style={{ textAlign: "center" }}>Mountain Mouth</h2>
      <p style={{ textAlign: "center" }}>development agency</p>
      <div style={{ margin: 60, position: "relative" }}>
        <img src={mainImage} alt="chisato" />
      </div>
    </Paper>
  </div>
);

export default Header;
