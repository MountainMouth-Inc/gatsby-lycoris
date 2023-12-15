import React from 'react';
import CodeSnippet from './CodeSnippet';
import SolutionItem from './SolutionItem';

const Hero = ({ pageContext: { locale: language } }) => {
  const solutions = [
    {
      title: 'Web development',
      description:
        'We can provide Full Stack solutions for web development, from front-end to back-end and infrastructures.',
    },
    {
      title: 'DX Consulting',
      description:
        'We can provide Full Stack solutions for web development, from front-end to back-end and infrastructures.',
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
            />
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-cyan-600/10 ring-1 ring-cyan-50 dark:ring-cyan-900 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl">
                <div className="bg-cyan-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  <div
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-cyan-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                    aria-hidden="true"
                  />
                  {solution.source ? (
                    <img
                      className="relative mx-auto bg-gray-50 dark:bg-gray-700 rounded-md py-10 px-10"
                      src={solution.source}
                      alt={`Slide ${idx}`}
                    />
                  ) : (
                    <CodeSnippet />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
