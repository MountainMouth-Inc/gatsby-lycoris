import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Business/Hero';

const BusinessPage = ({ pageContext: { locale: language } }) => {
  return (
    <Layout>
      <Header pageContext="{locale: language}" />
      <Hero pageContext="{locale: language}" />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default BusinessPage;
export const Head = ({}) => <Seo title="Business" />;
