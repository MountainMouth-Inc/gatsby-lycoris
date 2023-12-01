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
      <h1 class="text-lead"> - Values - </h1>
      <h2 class="text-lead"> 😴 Laziness</h2>
      <h2 class="text-lead"> 🤨 Impatience</h2>
      <h2 class="text-lead"> 🤪 Hubris</h2>
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
