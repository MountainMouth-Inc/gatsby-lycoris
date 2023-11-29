import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Container from "@components/container.js";

const Hero = ({ title, desc }) => (
  <Container>
    <h2 style={{ textAlign: "center" }}>{title}</h2>
    <h4 style={{ textAlign: "center" }}>{desc}</h4>
    <div style={{ margin: 20, position: "relative" }}>
      <StaticImage src="../images/chisato-red.jpg" />
    </div>
    <div align="center">
      <p class="text-danger">by Stable Diffusion</p>
    </div>
  </Container>
);

export default Hero;
