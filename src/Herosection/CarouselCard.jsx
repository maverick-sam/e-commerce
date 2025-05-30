import React from "react";
import { Heart, Expand, RefreshCw } from "lucide-react";

const CarouselCard = ({ frontImage, badgeType }) => {
  const badgeClass =
    badgeType === "Hot" ? "bg-orange-600 text-white" : "bg-green-600 text-white";

  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className="relative group overflow-hidden rounded-lg"
        style={{ width: "300px", height: "400px" }}
      >
        <img
          src={frontImage}
          alt="Card"
          className="absolute w-full h-full object-cover z-10"
        />

        {/* Top Overlay: Badge + Icons */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start px-2 z-30">
          <span className={`${badgeClass} text-xs px-3 py-1 rounded`}>
            {badgeType}
          </span>
          <div className="flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="rounded-full p-1 border bg-white">
              <Heart className="w-4 h-4 text-black" />
            </div>
            <div className="rounded-full p-1 border bg-white">
              <Expand className="w-4 h-4 text-black" />
            </div>
            <div className="rounded-full p-1 border bg-white">
              <RefreshCw className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          Add to Cart
        </button>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium">Fashion</p>
        <p className="text-base font-semibold">$49.99</p>
      </div>
    </div>
  );
};

export default CarouselCard;
