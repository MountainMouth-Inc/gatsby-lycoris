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
        <content
          style={{
            display: "grid",
            alignItems: "stretch",
            justifyContent: "space-evenly",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
          }}
        >
          <article class="article">
            <h1 class="article-title">
              <a href="">About</a>
            </h1>
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
          <div>
            <img
              src="https://i.gyazo.com/b33be8aa01498547543df768a5965988.jpg"
              alt="img"
            />
          </div>
        </content>
      </Container>
    </Background>
  </Layout>
);

export const Head = () => <Seo title="About"></Seo>;

export default About;
