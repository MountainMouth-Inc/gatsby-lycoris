import React from 'react';

const SolutionItem = ({ title, description }) => {
  return (
    <div className="px-6 lg:px-0 lg:pt-4">
      <div className="mx-auto max-w-2xl">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 font-display">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
            {description}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionItem;
