// OneDropdown.jsx
import React from 'react';

export default function OneColumnDropdown() {
    
  return (
    
    <div className="bg-white shadow-lg border rounded-md w-48 p-4">
      <ul className="space-y-2 text-sm text-gray-700">
        <li className="hover:text-orange-500 cursor-pointer">Feature 1</li>
        <li className="hover:text-orange-500 cursor-pointer">Feature 2</li>
        <li className="hover:text-orange-500 cursor-pointer">Feature 3</li>
        <li className="hover:text-orange-500 cursor-pointer">Feature 4</li>
      </ul>
    </div>
  );
}
