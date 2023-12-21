import React from 'react';
import { CodeSnippetPython } from './CodeSnippet';
import FullStack from '../../images/0_cl7fc6pt1MHjIF4K.webp';
import Python from '../../images/915d+qI9NAL._SL1500_.jpg';
import GrowthHack from '../../images/growth-hacking-2.jpg';
import SolutionItem from './SolutionItem';

const Hero = ({ pageContext: { locale: language } }) => {
  const solutions = [
    {
      title: 'Web development',
      description: '現在は時間が足りないため、新規のお仕事はストップ中です。 ',
      badges: (
        <div className="items-center justify-between">
          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            React
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
            Next.js
          </span>
          <span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
            Gatsby
          </span>
          <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
            Nest.js
          </span>
          <span class="bg-cyan-100 text-cyan-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
            FastAPI
          </span>
          <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
            Tailwind CSS
          </span>
        </div>
      ),
      source: FullStack,
    },
    {
      title: 'DX Consulting',
      description:
        '退屈なことはPythonにやらせよう。業務というのは時の流れに伴い変化するので、大規模なシステムではなく、lambda等のサーバレス環境を利用した、Function単位のマイクロサービスを実装することで仕様変更に強いシステムを設計します。',
      badges: (
        <div className="items-center justify-between">
          <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
            Python
          </span>
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
            Google Apps Script
          </span>
          <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
            AWS
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            GCP
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
            GitHub Actions
          </span>
        </div>
      ),
      source: Python,
    },
    {
      title: 'Growth Hack 支援',
      description:
        '過去に転職サイトやマッチングアプリのグロースハックを担当した経験に基づき、新規サービスのグロースハックをお手伝いします。',
      badges: (
        <div className="items-center justify-between">
          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            BigQuery
          </span>
          <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
            Redash
          </span>
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
            Search Console
          </span>
          <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
            Google Analytics
          </span>
        </div>
      ),
      source: GrowthHack,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cyan-100/20">
        {solutions.map((solution, idx) => (
          <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
            <SolutionItem
              title={solution.title}
              description={solution.description}
              badges={solution.badges}
            />
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 dark:ring-cyan-900 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl">
                {solution.source ? (
                  <img
                    className="relative mx-auto bg-gray-50 dark:bg-gray-700 rounded-md py-10 px-10"
                    src={solution.source}
                    width="500"
                    height="500"
                    alt={`Slide ${idx}`}
                  />
                ) : (
                  <div className="bg-cyan-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                    <div
                      className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-cyan-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                      aria-hidden="true"
                    />
                    <CodeSnippetPython />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
