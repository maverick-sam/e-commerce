import React, { useEffect, useState } from 'react';

export default function OneColumnDropdown() {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowItems(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const itemClass =
    'hover:text-orange-500 cursor-pointer transform transition-all duration-300 ease-out';

  return (
    <div className="bg-white shadow-lg border rounded-md w-48 p-4 origin-top transform scale-y-100 transition-transform duration-300 ease-out z-50">
      <ul className="space-y-2 text-sm text-gray-700 overflow-hidden">
        <li className={`${itemClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-75`}>
          Feature 1
        </li>
        <li className={`${itemClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-150`}>
          Feature 2
        </li>
        <li className={`${itemClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-225`}>
          Feature 3
        </li>
        <li className={`${itemClass} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} delay-300`}>
          Feature 4
        </li>
      </ul>
    </div>
  );
}
