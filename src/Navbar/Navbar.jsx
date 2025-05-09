import downloadImg from '../resources/download.png';
import SidePanel from './SidePanel';
import HomeDropdown from './HomeDropdown';
import ThreeColumnDropdown from './ThreeColumnDropdown';
import TwoColumnDropDown from './TwoColumnDropDown';  // Import the TwoColumnDropdown
import OneColumnDropdown from './OneColumnDropdown';
import FourColumnDropDown from './FourColumnDropDown'; // Import the FourColumnDropdown

import { useState } from 'react';

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false);  // Add state for FEATURE dropdown
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);  // Add state for PAGES dropdown

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setShowDropdown(name === 'HOME');
    setShowBlogDropdown(name === 'BLOG');
    setShowFeatureDropdown(name === 'FEATURE');  // Show FEATURE dropdown when clicked
    setShowPagesDropdown(name === 'PAGES');  // Show PAGES dropdown when clicked
  };

  return (
    <Disclosure as="nav" className="bg-orange-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo + Menu */}
          <div className="flex flex-1 items-center justify-between sm:items-center sm:justify-start">
            <div className="flex items-center">
              <img src={downloadImg} alt="Your Company" className="h-16 w-auto" />
            </div>

            {/* Navigation items */}
            <div className="hidden sm:flex space-x-8 ml-8">
              {navigation.map((name) =>
                name === 'SHOP' ? (
                  <div
                    key={name}
                    className="relative"
                    onMouseEnter={() => setShowShopDropdown(true)}
                    onMouseLeave={() => setShowShopDropdown(false)}
                  >
                    <button
                      onClick={() => handleLinkClick(name)}
                      className={classNames(
                        activeLink === name ? 'text-orange-500' : 'text-black font-bold',
                        'flex items-center space-x-1 px-3 py-2 text-sm'
                      )}
                    >
                      <span>{name}</span>
                      <ChevronDownIcon className="w-4 h-4 ml-2" />
                    </button>
                    {showShopDropdown && (
                      <div className="absolute left-0 z-50 mt-2">
                        <ThreeColumnDropdown />
                      </div>
                    )}
                  </div>
                ) : name === 'BLOG' ? (
                  <div
                    key={name}
                    className="relative"
                    onMouseEnter={() => setShowBlogDropdown(true)}
                    onMouseLeave={() => setShowBlogDropdown(false)}
                  >
                    <button
                      onClick={() => handleLinkClick(name)}
                      className={classNames(
                        activeLink === name ? 'text-orange-500' : 'text-black font-bold',
                        'flex items-center space-x-1 px-3 py-2 text-sm'
                      )}
                    >
                      <span>{name}</span>
                      <ChevronDownIcon className="w-4 h-4 ml-2" />
                    </button>
                    {showBlogDropdown && (
                      <div className="absolute left-0 z-50 mt-2">
                        <TwoColumnDropDown />
                      </div>
                    )}
                  </div>
                ) : name === 'FEATURE' ? (  // Add logic for FEATURE dropdown
                  <div
                    key={name}
                    className="relative"
                    onMouseEnter={() => setShowFeatureDropdown(true)}  // Show FEATURE dropdown on hover
                    onMouseLeave={() => setShowFeatureDropdown(false)}  // Hide FEATURE dropdown on mouse leave
                  >
                    <button
                      onClick={() => handleLinkClick(name)}
                      className={classNames(
                        activeLink === name ? 'text-orange-500' : 'text-black font-bold',
                        'flex items-center space-x-1 px-3 py-2 text-sm'
                      )}
                    >
                      <span>{name}</span>
                      <ChevronDownIcon className="w-4 h-4 ml-2" />
                    </button>
                    {showFeatureDropdown && (
                      <div className="absolute left-0 z-50 mt-2">
                        <OneColumnDropdown />  {/* Assuming OneColumnDropdown for FEATURE */}
                      </div>
                    )}
                  </div>
                ) : name === 'PAGES' ? (  // Add logic for PAGES dropdown
                  <div
                    key={name}
                    className="relative"
                    onMouseEnter={() => setShowPagesDropdown(true)}  // Show PAGES dropdown on hover
                    onMouseLeave={() => setShowPagesDropdown(false)}  // Hide PAGES dropdown on mouse leave
                  >
                    <button
                      onClick={() => handleLinkClick(name)}
                      className={classNames(
                        activeLink === name ? 'text-orange-500' : 'text-black font-bold',
                        'flex items-center space-x-1 px-3 py-2 text-sm'
                      )}
                    >
                      <span>{name}</span>
                      <ChevronDownIcon className="w-4 h-4 ml-2" />
                    </button>
                    {showPagesDropdown && (
                      <div className="absolute left-0 z-50 mt-2">
                        <FourColumnDropDown />  {/* FourColumnDropdown for PAGES */}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={name} className="relative">
                    <button
                      onClick={() => handleLinkClick(name)}
                      className={classNames(
                        activeLink === name ? 'text-orange-500' : 'text-black font-bold',
                        'flex items-center space-x-1 px-3 py-2 text-sm'
                      )}
                    >
                      <span>{name}</span>
                      <ChevronDownIcon className="w-4 h-4 ml-2" />
                    </button>
                    {name === 'HOME' && showDropdown && <HomeDropdown />}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Icons on the right */}
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

      {/* Mobile menu panel */}
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
