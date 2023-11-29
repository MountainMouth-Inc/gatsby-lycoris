import React from "react";

import Layout from "@templates/layout.js";
import Container from "@components/container.js";
import Seo from "@components/seo.js";
import Nav from "@components/nav.js";

const LINK = () => (
  <Layout>
    <Nav />
    <Container>
      <content
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "space-evenly",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
        }}
      >
        <article class="article">
          <h1 class="article-title">
            <a href="">Links</a>
          </h1>
          <p class="text-lead">
            <a href="https://syamaguc.dev/" target="_blank">
              Blog
            </a>
          </p>
          <p class="text-lead">
            <a
              href="https://syamaguc-diffusion.vercel.app/grid"
              target="_blank"
            >
              Gallery
            </a>
          </p>
          <p class="text-lead">
            <a href="https://twitter.com/syamaguc" target="_blank">
              Twitter
            </a>
          </p>
          <p class="text-lead">
            <a
              href="https://www.instagram.com/mountainmouth.xyz/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
          <p class="text-lead">
            <a
              href="https://www.facebook.com/people/MountainMouth/61553585831594"
              target="_blank"
            >
              Facebook
            </a>
          </p>
          <p class="text-lead">
            <a href="" target="_blank">
              LINE (WIP)
            </a>
          </p>
        </article>
        <div>
          <img
            src="https://i.gyazo.com/d61011e3647f5fdcd6f0e4f63cb8d5ec.jpg"
            alt="img"
          />
        </div>
      </content>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Link"></Seo>;

export default LINK;
