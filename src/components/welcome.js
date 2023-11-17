import React from "react";

import welcomeImage from "@images/chisato-red.jpg";

import "../styles/font.css";

const Welcome = ({}) => (
  <>
    <h2 style={{ textAlign: "center" }}>Mountain Mouth Co., Ltd.</h2>
    <h4 style={{ textAlign: "center" }}>talk is cheap, show me the code.</h4>
    <div style={{ margin: 30, position: "relative" }}>
      <img src={welcomeImage} alt="chisato-red" />
    </div>
  </>
);

export default Welcome;
