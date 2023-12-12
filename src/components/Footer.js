import React from 'react';
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  TranslateIcon,
} from '@heroicons/react/solid';
import { Translate, Trans } from '../../i18n/utils/translate';
import { useLocalization } from 'gatsby-theme-i18n';
import LocalizedLink from '../components/LocalizedLink';

const Footer = ({ pageContext: { locale: language } }) => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  const translate = Translate();
  const { config } = useLocalization();
  const navigation = {
    about: [
      {
        name: `${translate('about.about')}`,
        href: '/about',
      },
      {
        name: `${translate('about.business')}`,
        href: '/business',
      },
      {
        name: `${translate('about.member')}`,
        href: '/member',
      },
    ],
    links: [
      {
        name: `${translate('link.blog')}`,
        href: 'https://syamaguc.dev',
      },
      {
        name: `${translate('link.gallery')}`,
        href: 'https://syamaguc-diffusion.vercel.app',
      },
      {
        name: `${translate('link.merch')}`,
        href: '/merch',
      },
    ],
    legal: [{ name: `${translate('legal.privacy')}`, href: '/privacy-policy' }],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/MountainMouth-Inc/mountainmouth.xyz',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/syamaguc',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'Reddit',
        href: 'https://www.reddit.com/user/syamaguc/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 670 670" {...props}>
            <path d="M429.93 388.258c-27.567 0-50.043-22.473-50.043-50.043 0-27.567 22.476-50.043 50.043-50.043 27.57 0 50.047 22.476 50.047 50.043 0 27.57-22.477 50.043-50.047 50.043m8.84 82.129c-34.196 34.097-99.61 36.789-118.817 36.789-19.21 0-84.719-2.692-118.82-36.79a12.939 12.939 0 010-18.347 12.937 12.937 0 0118.351 0c21.512 21.52 67.524 29.203 100.47 29.203 32.85 0 78.952-7.683 100.472-29.203a12.927 12.927 0 0118.344 0c4.996 5.094 4.996 13.258 0 18.348M159.734 338.219c0-27.567 22.477-50.043 50.047-50.043 27.567 0 50.043 22.476 50.043 50.043s-22.476 50.047-50.043 50.047c-27.57-.008-50.047-22.48-50.047-50.047M640 288.176c0-38.711-31.313-70.024-70.023-70.024-18.922 0-36.024 7.489-48.602 19.692-47.836-34.578-113.82-56.864-187.305-59.457l31.89-150.133 104.22 22.191c1.25 26.512 22.953 47.645 49.757 47.645 27.66 0 50.043-22.383 50.043-50.047C569.98 20.383 547.598-2 519.937-2c-19.695 0-36.503 11.43-44.667 27.95L358.852 1.167c-3.266-.672-6.625-.09-9.414 1.73-2.782 1.825-4.708 4.61-5.375 7.875 0 0-34.965 166.559-34.965 167.52-74.825 1.918-142.063 24.3-190.664 59.36-12.582-12.102-29.586-19.5-48.41-19.5C31.312 218.152 0 249.558 0 288.175c0 28.43 17 52.926 41.398 63.87a140.986 140.986 0 00-1.632 21.231c0 107.77 125.445 195.086 280.187 195.086 154.738 0 280.184-87.316 280.184-195.086 0-7.109-.574-14.12-1.63-21.035C622.81 341.293 640 316.801 640 288.176" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase font-display">
                  {translate('categories.about')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <LocalizedLink
                        to={item.href}
                        language={language}
                        className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-500"
                      >
                        {item.name}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase font-display">
                  {translate('categories.link')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-500"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase font-display">
                  {translate('categories.legal')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <LocalizedLink
                        to={item.href}
                        language={language}
                        className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-500"
                      >
                        {item.name}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <div className="flex items-center">
              <TranslateIcon class="h-5 w-5 text-gray-400 dark:text-gray-200" />
              <h3 className="ml-1 text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase font-display">
                {translate('categories.language')}
              </h3>
            </div>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Language
                </label>
                <div className="relative">
                  <select
                    id="languagePicker"
                    onChange={(e) => {
                      window.location.href = `${
                        e.target.value === 'en' ? `/` : `/${e.target.value}`
                      }`;
                    }}
                    name="language"
                    className="appearance-none block w-full bg-none bg-white dark:bg-gray-500 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="" selected hidden disabled>
                      {translate('lang.choose')}
                    </option>
                    {config.map((locale) => (
                      <option value={`${locale.code}`}>
                        {locale.localName}
                      </option>
                    ))}
                    ;
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 dark:text-gray-50 hover:text-gray-500 dark:hover:text-cyan-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 dark:text-gray-50 md:mt-0 md:order-1">
            <Trans t={translate} i18nKey="copyright.line1">
              {getCurrentYear()}
            </Trans>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
