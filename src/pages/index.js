import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import NewsSection from '../components/Home/NewsSection';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Header pageContext="{locale: language}" />
      <Hero pageContext="{locale: language}" />
      <Features pageContext="{locale: language}" />
      <NewsSection pageContext="{locale: language}" />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default IndexPage;
