import { useState } from 'react';

export default function HomeDropdown() {
  const [isVisible, setIsVisible] = useState(true); // Toggle this based on parent click

  return (
    <div
      className={`origin-top overflow-hidden absolute left-0 mt-2 w-40 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded transition-all duration-300 transform
        ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
      `}
      style={{ transformOrigin: 'top' }}
    >
      <ul className="py-2">
        <li>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">
            Fashion
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">
            Furniture
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">
            Electronics
          </a>
        </li>
      </ul>
    </div>
  );
}
