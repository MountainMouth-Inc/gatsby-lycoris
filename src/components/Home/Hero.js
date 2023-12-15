import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import LocalizedLink from '../LocalizedLink';
import Carousel from './Carousel';
import HeroImage1 from '../../images/txt2img-20231213-193600-0.png';
import HeroImage2 from '../../images/txt2img-20231213-192513-0.png';
import HeroImage3 from '../../images/txt2img-20231213-170551-0.png';

const Hero = ({ pageContext: { locale: language } }) => {
  const images = [HeroImage1, HeroImage2, HeroImage3];

  return (
    <div className="pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-20">
              <div>
                <LocalizedLink
                  to="/new-release-2023-12-07"
                  language={language}
                  className="inline-flex space-x-4"
                >
                  <span className="rounded bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-600 tracking-wide uppercase">
                    新着情報
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-cyan-600 space-x-1">
                    <span>
                      New Release 2023-07-07 -
                      法人における仮想通貨税制の改正の可能性
                    </span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </LocalizedLink>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-5xl font-display">
                  Hack the World.
                </h1>
                <p className="mt-6 text-xl text-gray-500 dark:text-gray-50">
                  株式会社MountainMouthは、LinuxとVimとBitcoinが大好きなエンジニアの会社です。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-100 dark:bg-gray-800 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200 dark:text-gray-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-2 pr-2 -mr-40 w-full sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <Carousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
