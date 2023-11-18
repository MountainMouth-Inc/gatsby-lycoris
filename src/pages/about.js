import React from "react";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Container from "@components/container.js";
import Seo from "@components/seo.js";
import Nav from "@components/nav.js";

const About = () => (
  <Layout>
    <Background>
      <Nav />
      <Container>
        <article class="article">
          <h1 class="article-title">
            <a href="">About</a>
          </h1>
          <p class="article-meta">
            information by{" "}
            <a href="https://twitter.com/syamaguc" target="_blank">
              syamaguc
            </a>
          </p>
          <p class="text-lead">Name : MountainMouth co.,ltd. ⛰️</p>
          <p class="text-lead">Location : Tokyo, JP 🗾</p>
          <p class="text-lead">
            Business : <a href="/business/"> ▶️ here</a>
          </p>
          <p class="text-lead">
            Employees :<a href="/member/"> ▶️ here</a>
          </p>
          <p class="text-lead">Capital stock : secret 🖤</p>
        </article>
      </Container>
    </Background>
  </Layout>
);

export const Head = () => <Seo title="About"></Seo>;

export default About;
