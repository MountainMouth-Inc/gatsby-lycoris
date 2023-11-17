import React from "react";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Container from "@components/container.js";
import Tab from "@components/tab.js";

import darkred from "@images/chisato-darkred.jpg";
import green from "@images/chisato-green.jpg";
import beige from "@images/chisato-beige.jpg";
import bluesky from "@images/chisato-bluesky.jpg";

const contents = [
  {
    label: "Web Development",
    title: "Full stack Support",
    desc: "We can provide full stack solutions for web development, from front-end to back-end and infrastructure.",
    h3: "Experience",
    p: `Next, Gatsby, Astro, Hugo, Svelte...,
        Nestjs, FastAPI, Django...,
        Python, Node, C/C++, Go...,
        AWS, GCP ... etc`,
    img: bluesky,
  },
  {
    label: "Data Science",
    title: "Data Science All in One",
    desc: "Analyze/utilize existing data, collect data through scraping, build data analysis infrastructure.",
    h3: "Projects",
    p: `Building a growth hack infrastructure for a matching app, 
        Construction of a system to determine abandoned farmland using satellite imagery,
        Creation of horse racing AI ... etc`,
    img: beige,
  },
  {
    label: "DX Consulting",
    title: "Let python do the boring stuff.",
    desc: "",
    h3: "Projects",
    p: "Support for accounting firms , real estate companies ... etc",
    img: green,
  },
  {
    label: "Marketing",
    title: "Why does strategy make a difference?",
    desc: "",
    h3: "Projects",
    p: "Job search site, Matching App ... etc",
    img: darkred,
  },
];

const About = () => (
  <Layout>
    <Background>
      <Container>
        <Tab children={contents} />
      </Container>
    </Background>
  </Layout>
);

export default About;
