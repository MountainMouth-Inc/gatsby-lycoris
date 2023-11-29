import React from "react";

import Layout from "@templates/layout.js";
import Nav from "@components/nav.js";
import Hero from "@components/hero.js";
import Seo from "@components/seo.js";

const Index = () => (
  <Layout>
    <Nav />
    <Hero
      title="Mountain Mouth Corp."
      desc="Talk is cheap, show me the code."
    />
  </Layout>
);

export const Head = () => <Seo title="Home"></Seo>;

export default Index;
