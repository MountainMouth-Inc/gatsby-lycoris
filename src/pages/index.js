import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Tab from "../components/tab";
import Content from "../components/content";
import CallToAction from "../components/cta";

const Index = () => (
  <Layout>
    <Nav />
    <Hero />
    <Tab />
    <Content />
    <CallToAction />
  </Layout>
);

export default Index;
