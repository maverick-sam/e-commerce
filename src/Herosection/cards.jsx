import React from "react";
import { Heart } from "lucide-react";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `$${(20 + i * 5).toFixed(2)}`,
  images: [
    `https://loremflickr.com/300/300/girl?lock=${i + 1}`,
    `https://loremflickr.com/300/300/guy?lock=${i + 13}`,
  ],
}));

export default function CardGridComponent() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

function Card({ product }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow">
      <div className="absolute top-2 right-2 z-10">
        <Heart className="w-6 h-6 text-black group-hover:text-orange-500 transition-colors duration-300" />
      </div>
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={product.images[0]}
          alt="product"
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={product.images[1]}
          alt="product-hover"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.price}</p>
        <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
