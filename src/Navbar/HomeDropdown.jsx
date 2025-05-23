import { useEffect, useState } from 'react';

export default function HomeDropdown() {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    // Start item animations after a short delay when dropdown mounts
    const timeout = setTimeout(() => setShowItems(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const baseItemClasses =
    'block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 transform transition-all duration-500 ease-out';

  return (
    <div
      className="origin-top absolute left-0 mt-2 w-40 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded transform scale-y-100 opacity-100 transition-transform duration-500 ease-out z-50"
      style={{ transformOrigin: 'top' }}
    >
      <ul className="py-2 overflow-hidden">
        <li
          className={`${baseItemClasses} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'} delay-100`}
        >
          <a href="#">Fashion</a>
        </li>
        <li
          className={`${baseItemClasses} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'} delay-200`}
        >
          <a href="#">Furniture</a>
        </li>
        <li
          className={`${baseItemClasses} ${showItems ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'} delay-300`}
        >
          <a href="#">Electronics</a>
        </li>
      </ul>
    </div>
  );
}
