import downloadImg from '../resources/download.png';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SidePanel({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-lg transition-transform duration-300 z-50 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-500 hover:text-orange-500">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Centered Content */}
      <div className="h-[calc(100%-4rem)] flex flex-col items-center justify-center text-center p-4 space-y-4">
        <img alt="Your Company" src={downloadImg} className="w-32 h-auto mx-auto" />
        
        <p className="text-white text-sm">
          Address: Your address goes here.<br />
          Call Us: 0123456789, 0123456789<br />
          Email: demo@example.com
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-600 text-white hover:bg-white hover:text-gray-800 transition-colors p-3">
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-600 text-white hover:bg-white hover:text-gray-800 transition-colors p-3">
            <FaTwitter className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-600 text-white hover:bg-white hover:text-gray-800 transition-colors p-3">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-600 text-white hover:bg-white hover:text-gray-800 transition-colors p-3">
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>

        {/* Menu Links */}
        <div className="flex space-x-6 mt-6">
          <a href="/wishlist" className="text-white hover:text-orange-500 transition-colors text-sm font-medium">Wishlist</a>
          <a href="/cart" className="text-white hover:text-orange-500 transition-colors text-sm font-medium">Cart</a>
          <a href="/checkout" className="text-white hover:text-orange-500 transition-colors text-sm font-medium">Checkout</a>
        </div>
      </div>
    </div>
  );
}
