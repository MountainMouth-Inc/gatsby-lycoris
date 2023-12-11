import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/business/Hero';

const BusinessPage = ({ pageContext: { locale: language } }) => {
  return (
    <Layout>
      <SEO title="Business on Mountain Mouth" />
      <Header pageContext="{locale: language}" />
      <Hero pageContext="{locale: language}" />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default BusinessPage;
