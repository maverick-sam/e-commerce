import React, { useEffect, useState } from 'react';

export default function FourColumnDropDown() {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowItems(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const itemBaseClass =
    'text-sm text-gray-600 hover:text-orange-500 cursor-pointer transform transition-all duration-300 ease-out';

  return (
    <div className="bg-white shadow-lg rounded-md p-4 w-48 origin-top transform scale-y-100 transition-transform duration-300 ease-out z-50">
      <h3 className="text-sm font-bold text-gray-800 mb-2">Category</h3>
      <ul className="space-y-1 overflow-hidden">
        <li className={`${itemBaseClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-75`}>
          Item 1
        </li>
        <li className={`${itemBaseClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-150`}>
          Item 2
        </li>
        <li className={`${itemBaseClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-225`}>
          Item 3
        </li>
        <li className={`${itemBaseClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-300`}>
          Item 4
        </li>
      </ul>
    </div>
  );
}
