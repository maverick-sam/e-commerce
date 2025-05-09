import downloadImg from '../resources/model.jpg';

export default function ThreeColumnDropdown() {
  return (
    <div className="absolute top-10 left-0 z-50 w-[800px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-6">
      <div className="flex gap-x-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-md font-bold text-gray-800 mb-2">Popular Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Laptops</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Phones</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Tablets</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Accessories</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-md font-bold text-gray-800 mb-2">Shop By Brand</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Apple</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Samsung</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">OnePlus</a></li>
            <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Sony</a></li>
          </ul>
        </div>

        {/* Column 3 (Image) */}
        <div className="flex-shrink-0">
          <img src={downloadImg} alt="Your Company" className="h-35 w-40" />
        </div>
      </div>
    </div>
  );
}
