import React from "react";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Container from "@components/container.js";
import Tab from "@components/tab.js";
import Seo from "@components/seo.js";
import Nav from "@components/nav.js";
import { contents } from "@constants/constants.js";

const Business = () => (
  <Layout>
    <Background>
      <Nav />
      <Container>
        <Tab children={contents} />
      </Container>
    </Background>
  </Layout>
);

export const Head = () => <Seo title="Business"></Seo>;

export default Business;
