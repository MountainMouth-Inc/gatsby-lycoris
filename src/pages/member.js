import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Ryo from '../images/ryoyamada-cigarettes.png';
import Asuna from '../images/asuna.png';
import AsunaElf from '../images/asuna-elf.png';
import Miorine from '../images/miorine.png';

const MemberPage = ({ data, pageContext: { locale: language } }) => {
  const members = [
    {
      name: `syamaguc`,
      is_board: true,
      title: `CEO, Founder`,
      blurb: `Miracle cute programmer`,
      source: `${Ryo}`,
      link: '#',
    },
    {
      name: `Neovim`,
      is_board: true,
      title: `Co-Founder`,
      blurb: `Special thanks`,
      source: `${Miorine}`,
      link: '#',
    },
    {
      name: `DeepL`,
      is_board: false,
      title: `Translator`,
      source: `${Asuna}`,
      link: '#',
    },
    {
      name: `Chat GPT`,
      is_board: false,
      title: `CBO (Chief Bullshit-job Officer)`,
      source: `${Ryo}`,
      link: '#',
    },
    {
      name: `Stable Diffusion`,
      is_board: false,
      title: `Creative Director`,
      source: `${AsunaElf}`,
      link: '#',
    },
  ];

  const BoardMembers = members.filter(function (partner) {
    return partner.is_board === true;
  });

  const Members = members.filter(function (partner) {
    return partner.is_board === false;
  });

  return (
    <Layout>
      <Header pageContext="{locale: language}" />
      <PageHeader title="Ourt Team" description="small group of elite">
        <div className="pb-16 bg-white dark:bg-gray-900 overflow-hidden lg:pb-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
              {BoardMembers.map((partner) => (
                <>
                  <div
                    className="mb-10 -mx-4 relative lg:mb-0"
                    aria-hidden="true"
                  >
                    <img
                      className="relative mx-auto bg-gray-50 dark:bg-gray-700 rounded-md py-10 px-10"
                      width={400}
                      src={partner.source}
                      alt={partner.name}
                    />
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight sm:text-3xl font-display">
                      {partner.name}
                    </h3>
                    <p className="block text-xl font-medium text-gray-500 dark:text-gray-50 pointer-events-none font-display">
                      {partner.title}
                    </p>
                    <p className="mt-3 text-lg text-gray-500 dark:text-gray-50">
                      {partner.blurb}
                    </p>
                    <a
                      href={partner.link}
                      className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent dark:border-gray-700 rounded-md shadow-sm text-base font-medium text-cyan-500 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800"
                    >
                      more
                    </a>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-16 bg-white dark:bg-gray-900 overflow-hidden lg:pb-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {Members.map((partner) => (
                <a href={partner.link}>
                  <li key={partner.source} className="relative">
                    <div className="group block w-full rounded-lg bg-gray-100 dark:bg-gray-600 py-10 px-10">
                      <img
                        src={partner.source}
                        alt=""
                        className="object-fit pointer-events-none"
                      />
                    </div>
                    <p className="mt-2 block text-base font-bold text-gray-900 dark:text-gray-300 truncate pointer-events-none font-display">
                      {partner.name}
                    </p>
                    <p className="block text-sm font-medium text-gray-500 dark:text-gray-50 pointer-events-none font-display">
                      {partner.title}
                    </p>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default MemberPage;
export const Head = ({}) => <Seo title="Member" />;
