import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Translate } from '../../i18n/utils/translate';

import mucklesImg from '../images/CEO.jpg';
import hellotuxImg from '../images/CEO.jpg';
import freewearImg from '../images/CEO.jpg';

const vendors = [
  {
    name: "Muckles' U!",
    role: 'Ships worldwide, based in US',
    imageUrl: mucklesImg,
    link: '',
  },
  {
    name: 'HELLOTUX',
    role: 'Ships worldwide, based in EU',
    imageUrl: hellotuxImg,
    link: '',
  },
  {
    name: 'FreeWear',
    role: 'Ships worldwide, based in EU',
    imageUrl: freewearImg,
    link: '',
  },
];

const MerchPage = ({ pageContext: { locale: language } }) => {
  const translate = Translate('merch');

  return (
    <Layout>
      <Seo title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <PageHeader
        title={translate('title')}
        description={translate('description')}
      >
        <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {vendors.map((vendor) => (
                <li key={vendor.name}>
                  <a href={vendor.link}>
                    <img
                      className="w-full rounded-2xl object-fit"
                      src={vendor.imageUrl}
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-50">
                      {vendor.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {vendor.role}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default MerchPage;
