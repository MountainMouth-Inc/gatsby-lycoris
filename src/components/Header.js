import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Translate } from '../../i18n/utils/translate';
import LocalizedLink from '../components/LocalizedLink';
import DarkModeToggle from '../components/DarkModeToggle';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ pageContext: { locale: language } }) => {
  const translate = Translate();
  const about = [
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
  ];
  const link = [
    {
      name: `${translate('link.blog')}`,
      href: 'https://syamaguc.dev',
    },
    {
      name: `${translate('link.gallery')}`,
      href: 'https://syamaguc-diffusion.vercel.app',
    },
    //{
    //  name: 'Merch',
    //  href: '/merch',
    //},
  ];

  return (
    <>
      <noscript>
        <div className="relative bg-red-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="hidden lg:inline">
                  {translate('js-warning')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </noscript>
      <Popover className="relative">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 lg:justify-start lg:space-x-10 max-w-7xl mx-auto">
          <div>
            <LocalizedLink
              to="/"
              language={language}
              className="text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-3xl font-display"
            >
              Mountain Mouth Inc.
            </LocalizedLink>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <DarkModeToggle />
              <LocalizedLink
                to="/news/1"
                language={language}
                className="text-base font-medium text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-cyan-500"
              >
                {translate('categories.news')}
              </LocalizedLink>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-gray-50 dark:bg-gray-900 dark:text-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                      )}
                    >
                      <span>{translate('categories.about')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-50 dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {about.map((item) => (
                              <LocalizedLink
                                key={item.name}
                                to={item.href}
                                language={language}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                                  {item.name}
                                </p>
                              </LocalizedLink>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-gray-50 dark:bg-gray-900 dark:text-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                      )}
                    >
                      <span>{translate('categories.link')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-50 dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {link.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                              >
                                <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                                  {item.name}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:divide-gray-700">
              <div className="pt-5 pb-6 px-5 dark:bg-gray-800">
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {about.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-gray-50">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Header;
