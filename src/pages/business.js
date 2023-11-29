import React from "react";

import Layout from "@templates/layout.js";
import Container from "@components/container.js";
import Tab from "@components/tab.js";
import Seo from "@components/seo.js";
import Nav from "@components/nav.js";
import { business } from "@constants/business.js";

const Business = () => (
  <Layout>
    <Nav />
    <Container>
      <Tab children={business} />
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Business"></Seo>;

export default Business;
