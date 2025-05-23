import { useRef, useState } from 'react';
import downloadImg from '../resources/download.png';
import SidePanel from './SidePanel';
import HomeDropdown from './HomeDropdown';
import ThreeColumnDropdown from './ThreeColumnDropdown';
import TwoColumnDropDown from './TwoColumnDropDown';
import OneColumnDropdown from './OneColumnDropdown';
import FourColumnDropDown from './FourColumnDropDown';

import '../index.css';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import {
  XMarkIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon
} from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const navigation = ['HOME', 'SHOP', 'FEATURE', 'BLOG', 'PAGES'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);

  // Refs to hold timeouts for each menu
  const timeouts = {
    HOME: useRef(null),
    SHOP: useRef(null),
    FEATURE: useRef(null),
    BLOG: useRef(null),
    PAGES: useRef(null),
  };

  const handleMouseEnter = (menu, setShow) => {
    clearTimeout(timeouts[menu].current);
    setShow(true);
  };

  const handleMouseLeave = (menu, setShow) => {
    timeouts[menu].current = setTimeout(() => setShow(false), 300);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <Disclosure as="nav" className="bg-orange-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-between sm:items-center sm:justify-start">
            <div className="flex items-center">
              <img src={downloadImg} alt="Your Company" className="h-16 w-auto" />
            </div>

            <div className="hidden sm:flex space-x-8 ml-8">
              {navigation.map((name) => {
                const isActive = activeLink === name;
                const sharedProps = {
                  onClick: () => handleLinkClick(name),
                  className: classNames(
                    isActive ? 'text-orange-500' : 'text-black font-bold',
                    'flex items-center space-x-1 px-3 py-2 text-sm'
                  )
                };

                if (name === 'SHOP') {
                  return (
                    <div
                      key={name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('SHOP', setShowShopDropdown)}
                      onMouseLeave={() => handleMouseLeave('SHOP', setShowShopDropdown)}
                    >
                      <button {...sharedProps}>
                        <span>{name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-2" />
                      </button>
                      {showShopDropdown && (
                        <div className="absolute left-0 z-50 mt-2">
                          <ThreeColumnDropdown />
                        </div>
                      )}
                    </div>
                  );
                }

                if (name === 'BLOG') {
                  return (
                    <div
                      key={name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('BLOG', setShowBlogDropdown)}
                      onMouseLeave={() => handleMouseLeave('BLOG', setShowBlogDropdown)}
                    >
                      <button {...sharedProps}>
                        <span>{name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-2" />
                      </button>
                      {showBlogDropdown && (
                        <div className="absolute left-0 z-50 mt-2">
                          <TwoColumnDropDown />
                        </div>
                      )}
                    </div>
                  );
                }

                if (name === 'FEATURE') {
                  return (
                    <div
                      key={name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('FEATURE', setShowFeatureDropdown)}
                      onMouseLeave={() => handleMouseLeave('FEATURE', setShowFeatureDropdown)}
                    >
                      <button {...sharedProps}>
                        <span>{name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-2" />
                      </button>
                      {showFeatureDropdown && (
                        <div className="absolute left-0 z-50 mt-2">
                          <OneColumnDropdown />
                        </div>
                      )}
                    </div>
                  );
                }

                if (name === 'PAGES') {
                  return (
                    <div
                      key={name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('PAGES', setShowPagesDropdown)}
                      onMouseLeave={() => handleMouseLeave('PAGES', setShowPagesDropdown)}
                    >
                      <button {...sharedProps}>
                        <span>{name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-2" />
                      </button>
                      {showPagesDropdown && (
                        <div className="absolute left-0 z-50 mt-2">
                          <FourColumnDropDown />
                        </div>
                      )}
                    </div>
                  );
                }

                if (name === 'HOME') {
                  return (
                    <div
                      key={name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('HOME', setShowHomeDropdown)}
                      onMouseLeave={() => handleMouseLeave('HOME', setShowHomeDropdown)}
                    >
                      <button {...sharedProps}>
                        <span>{name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-2" />
                      </button>
                      {showHomeDropdown && (
                        <div className="absolute left-0 z-50 mt-2">
                          <HomeDropdown />
                        </div>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>

          <div className="flex items-center space-x-8 ml-auto pr-4">
            <button className="text-black-400 hover:text-orange-500">
              <HeartIcon className="size-6" />
            </button>
            <button className="text-black-400 hover:text-orange-500">
              <ShoppingBagIcon className="size-6" />
            </button>
            <button
              onClick={() => setPanelOpen(!isPanelOpen)}
              className="text-black-400 hover:text-black"
            >
              <Bars3Icon className="size-6" />
            </button>
            <SidePanel open={isPanelOpen} onClose={() => setPanelOpen(false)} />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((name) => (
            <DisclosureButton
              key={name}
              as="a"
              href="#"
              onClick={() => handleLinkClick(name)}
              className={classNames(
                activeLink === name ? 'text-orange-500' : 'text-black font-bold',
                'block rounded-md px-3 py-2 text-base'
              )}
            >
              <div className="flex items-center space-x-1">
                <span>{name}</span>
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </div>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
