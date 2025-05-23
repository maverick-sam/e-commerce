import React from "react";

import card1 from '../resources/card1.png';
import card2 from '../resources/card2.png';
import card3 from '../resources/card3.png';
import card4 from '../resources/card4.png';
import card5 from '../resources/card5.png';

const Card = ({ className, title, subtitle, imageSrc }) => (
  <div className={`relative shadow-md overflow-hidden group ${className}`}>
    {/* Background image with zoom effect */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
      style={{ backgroundImage: `url(${imageSrc})` }}
    ></div>

    {/* Overlay content */}
    <div className="relative z-10 p-4 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold text-orange-500">{title}</h2>
        <p className="text-lg text-black">{subtitle}</p>
      </div>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded-md w-fit self-start">
        Shop Now
      </button>
    </div>

    {/* Optional dark overlay for better readability */}
    <div className="absolute inset-0 bg-black/10 z-0"></div>
  </div>
);

const CardLayout = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 h-screen">
      {/* Column 1: Two stacked cards */}
      <div className="flex flex-col gap-4">
        <Card
          className="h-1/2"
          title="Outerwear"
          subtitle="New Collection"
          imageSrc={card1}
        />
        <Card
          className="h-1/2"
          title="Footwear"
          subtitle="New Arrivals"
          imageSrc={card3}
        />
      </div>

      {/* Column 2: Single tall card */}
      <div className="h-full">
        <Card
          className="h-full"
          title="Featured"
          subtitle="Top Trends"
          imageSrc={card2}
        />
      </div>

      {/* Column 3: Two stacked cards */}
      <div className="flex flex-col gap-4">
        <Card
          className="h-1/2"
          title="Accessories"
          subtitle="Limited Edition"
          imageSrc={card4}
        />
        <Card
          className="h-1/2"
          title="Essentials"
          subtitle="Back in Stock"
          imageSrc={card5}
        />
      </div>
    </div>
  );
};

export default CardLayout;
