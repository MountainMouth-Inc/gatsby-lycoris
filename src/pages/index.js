import React from "react";

import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Container from "@components/container.js";
import Welcome from "@components/welcome.js";

const Index = () => (
  <Layout>
    <Background>
      <Container>
        <Welcome />
      </Container>
    </Background>
  </Layout>
);

export default Index;
