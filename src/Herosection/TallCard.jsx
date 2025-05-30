import React, { useState } from "react";
import { Heart, Expand, RefreshCw } from "lucide-react";

const TallCard = ({ frontImage, hoverImage, badgeType }) => {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isExpandHovered, setIsExpandHovered] = useState(false);
  const [isSwapHovered, setIsSwapHovered] = useState(false);

  const badgeClass =
    badgeType === "Hot"
      ? "bg-orange-600 text-white"
      : "bg-green-600 text-white";

  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className="relative group overflow-hidden rounded-lg"
        style={{ width: "300px", height: "400px" }}
      >
        <img
          src={frontImage}
          alt="Card Front"
          className="absolute w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 z-10"
        />
        <img
          src={hoverImage}
          alt="Card Hover"
          className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20"
        />
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start px-2 z-30">
          <span className={`${badgeClass} text-xs px-3 py-1 rounded`}>
            {badgeType}
          </span>
          <div className="flex flex-col items-end space-y-2">
            <div
              onMouseEnter={() => setIsHeartHovered(true)}
              onMouseLeave={() => setIsHeartHovered(false)}
              className={`rounded-full p-1 border transition-all duration-300 ${
                isHeartHovered
                  ? "bg-orange-500 border-orange-500"
                  : "bg-white border-white"
              }`}
            >
              <Heart
                className={`w-4 h-4 transition-colors duration-300 ${
                  isHeartHovered ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div
              onMouseEnter={() => setIsExpandHovered(true)}
              onMouseLeave={() => setIsExpandHovered(false)}
              className={`rounded-full p-1 border transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                isExpandHovered
                  ? "bg-orange-500 border-orange-500"
                  : "bg-white border-white"
              }`}
            >
              <Expand
                className={`w-4 h-4 transition-colors duration-300 ${
                  isExpandHovered ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div
              onMouseEnter={() => setIsSwapHovered(true)}
              onMouseLeave={() => setIsSwapHovered(false)}
              className={`rounded-full p-1 border transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                isSwapHovered
                  ? "bg-orange-500 border-orange-500"
                  : "bg-white border-white"
              }`}
            >
              <RefreshCw
                className={`w-4 h-4 transition-colors duration-300 ${
                  isSwapHovered ? "text-white" : "text-black"
                }`}
              />
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

export default TallCard;
