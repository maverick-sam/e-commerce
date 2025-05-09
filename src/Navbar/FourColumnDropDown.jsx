import React from 'react';

export default function FourColumnDropDown() {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 w-48">
      <h3 className="text-sm font-bold text-gray-800 mb-2">Category</h3>
      <ul className="space-y-1">
        <li className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">Item 1</li>
        <li className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">Item 2</li>
        <li className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">Item 3</li>
        <li className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">Item 4</li>
      </ul>
    </div>
  );
}
