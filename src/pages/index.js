import React from "react";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Nav from "@components/nav.js";
import Hero from "@components/hero.js";
import Seo from "@components/seo.js";

const Index = () => (
  <Layout>
    <Background>
      <Nav />
      <Hero
        title="Mountain Mouth Co., Ltd."
        desc="Talk is cheap, show me the code."
      />
    </Background>
  </Layout>
);

export const Head = () => <Seo title="Home"></Seo>;

export default Index;
