import React, { useRef, useEffect } from "react";
import { Instagram } from "lucide-react";

import img1 from "../resources/ScrollCard1.png";
import img2 from "../resources/ScrollCard2.png";
import img3 from "../resources/ScrollCard3.png";
import img4 from "../resources/ScrollCard4.png";
import img5 from "../resources/ScrollCard5.png";
import img6 from "../resources/ScrollCard6.png";
import img7 from "../resources/ScrollCard7.png";
import img8 from "../resources/ScrollCard8.png";
import img9 from "../resources/ScrollCard9.png";
import img10 from "../resources/ScrollCard10.png";
import img11 from "../resources/ScrollCard11.png";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11
];

const ImageStrip = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Hide native scroll bar via CSS
    if (container) {
      container.style.scrollbarWidth = "none"; // Firefox
      container.style.msOverflowStyle = "none"; // IE/Edge
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto no-scrollbar"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="relative group flex-shrink-0"
          style={{ width: "300px", height: "300px" }}
        >
          <img
            src={img}
            alt={`img-${index}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-200 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <Instagram className="w-8 h-8 text-black" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageStrip;
