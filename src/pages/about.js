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
          <p>Easy does it, time will tell.</p>
          <p class="text-lead">Name : MountainMouth⛰️</p>
          <p class="text-lead">Location : Tokyo, JP🗾</p>
          <p class="text-lead">
            Business : <a href="/business/"> here ◀️</a>
          </p>
          <p class="text-lead">
            Employees :<a href="/member/"> here ◀️</a>
          </p>
          <p class="text-lead">
            Contact :<a href="https://twitter.com/syamaguc"> Twitter(X) DM</a>
          </p>
        </article>
      </Container>
    </Background>
  </Layout>
);

export const Head = () => <Seo title="About"></Seo>;

export default About;
