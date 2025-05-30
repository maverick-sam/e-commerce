import React, { useRef, useState } from "react";
import CarouselCard from "./CarouselCard";

import card1 from "../resources/acard1.png";
import card2 from "../resources/acard2.png";
import card3 from "../resources/acard3.png";
import card4 from "../resources/acard4.png";
import card5 from "../resources/acard5.png";
import card6 from "../resources/acard6.png";
import card7 from "../resources/acard7.png";
import card8 from "../resources/acard8.png";
import card9 from "../resources/acard1.1.png";
import card10 from "../resources/acard2.2.png";
import card11 from "../resources/acard3.3.png";
import card12 from "../resources/acard4.4.png";
import card13 from "../resources/acard5.5.png";
import card14 from "../resources/acard6.6.png";
import card15 from "../resources/acard7.7.png";
import card16 from "../resources/acard8.8.png";

const images = [
  card1, card2, card3, card4,
  card5, card6, card7, card8,
  card9, card10, card11, card12,
  card13, card14, card15, card16
];

const CarouselLayout = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  const handleDotClick = (index) => {
    if (containerRef.current) {
      const scrollX = index * containerRef.current.offsetWidth;
      containerRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-snap-x mandatory snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {slides.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex-shrink-0 flex space-x-6 px-6 snap-start"
            style={{ width: "100%" }}
          >
            {group.map((img, index) => (
              <CarouselCard
                key={index}
                frontImage={img}
                badgeType={(groupIndex + index) % 4 === 0 ? "Hot" : "New"}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselLayout;
