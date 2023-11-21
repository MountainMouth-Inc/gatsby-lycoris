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
    <div align="center">
      <p class="text-danger">by Stable Diffusion, DALL-E-3</p>
    </div>
  </Container>
);

export default Hero;
