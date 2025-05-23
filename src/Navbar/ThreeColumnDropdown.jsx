import React, { useEffect, useState } from 'react';
import downloadImg from '../resources/model.jpg';

export default function ThreeColumnDropdown() {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowItems(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const linkClass =
    'text-sm text-gray-600 hover:text-orange-500 transform transition-all duration-300 ease-out';
  const headingClass = 'text-md font-bold text-gray-800 mb-2';

  return (
    <div className="absolute top-10 left-0 z-50 w-[800px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-6 origin-top transform scale-y-100 transition-transform duration-300 ease-out">
      <div className="flex gap-x-8">
        {/* Column 1 */}
        <div>
          <h3 className={headingClass}>Popular Products</h3>
          <ul className="space-y-2">
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-75`}>
              <a href="#">Laptops</a>
            </li>
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-150`}>
              <a href="#">Phones</a>
            </li>
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-225`}>
              <a href="#">Tablets</a>
            </li>
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-300`}>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className={headingClass}>Shop By Brand</h3>
          <ul className="space-y-2">
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-100`}>
              <a href="#">Apple</a>
            </li>
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-175`}>
              <a href="#">Samsung</a>
            </li>
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-250`}>
              <a href="#">OnePlus</a>
            </li>
            <li className={`${linkClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-325`}>
              <a href="#">Sony</a>
            </li>
          </ul>
        </div>

        {/* Column 3 (Image) */}
        <div className={`flex-shrink-0 transition-opacity duration-500 ease-out ${showItems ? 'opacity-100' : 'opacity-0 delay-300'}`}>
          <img src={downloadImg} alt="Featured" className="h-35 w-40 object-cover rounded" />
        </div>
      </div>
    </div>
  );
}
