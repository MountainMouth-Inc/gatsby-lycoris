import React from "react";

import Layout from "@templates/layout.js";
import Container from "@components/container.js";
import Seo from "@components/seo.js";
import Nav from "@components/nav.js";

const About = () => (
  <Layout>
    <Nav />
    <div
      style={{
        padding: "7rem 0rem 0rem 0rem",
      }}
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <h1 class="text-lead">Hack The World</h1>
      <h3 class="text-lead">1. Laziness, Impatience, Hubris</h3>
      <h3 class="text-lead">2. Done is better than perfect</h3>
      <h3 class="text-lead">3. Talk is cheap, show me the code.</h3>
    </content>
    <div
      style={{
        padding: "0rem 0rem 7rem 0rem",
      }}
    />
  </Layout>
);

export const Head = () => <Seo title="About"></Seo>;

export default About;
