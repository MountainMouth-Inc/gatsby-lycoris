import React from "react";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Container from "@components/container.js";
import Content from "@components/content.js";
import Tab from "@components/tab.js";

import chisato from "@images/takina.jpg";
import me from "@images/chisato-red.jpg";
import neovim from "@images/chisato-white.jpg";
import deepl from "@images/chisato-black.jpg";
import chatgpt from "@images/takina.jpg";

const contents = [
  {
    title: "syamaguc",
    desc: "Miracle Cute Programmer, Genius Data scientist, Famous Spaghetti coder and Bitcoin maximalist",
    img: me,
    h3: "",
    p: "",
  },
  {
    title: "Neovim",
    desc: "Editing staff, Free",
    img: neovim,
    h3: "",
    p: "",
  },
  {
    title: "DeepL",
    desc: "Translation staff, 750yen/month",
    img: deepl,
    h3: "",
    p: "",
  },
  {
    title: "ChatGPT",
    desc: "Bull shit jobs staff, $20/month",
    img: chatgpt,
    h3: "",
    p: "",
  },
];

const About = () => (
  <Layout>
    <Background>
      <Container>
        <Tab contents={contents} />
      </Container>
    </Background>
  </Layout>
);

export default About;
