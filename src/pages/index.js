import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import NewsSection from '../components/Home/NewsSection';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <Header pageContext="{locale: language}" />
      <Hero pageContext="{locale: language}" />
      <Features pageContext="{locale: language}" />
      <NewsSection pageContext="{locale: language}" />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default IndexPage;
export const Head = ({}) => <Seo title="Home" />;
