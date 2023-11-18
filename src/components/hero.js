import React from "react";

import welcomeImage from "@images/chisato-red.jpg";
import Container from "@components/container.js";

const Hero = ({ title, desc }) => (
  <Container>
    <h2 style={{ textAlign: "center" }}>{title}</h2>
    <h4 style={{ textAlign: "center" }}>{desc}</h4>
    <div style={{ margin: 20, position: "relative" }}>
      <img src={welcomeImage} alt="chisato-red" />
    </div>
  </Container>
);

export default Hero;
