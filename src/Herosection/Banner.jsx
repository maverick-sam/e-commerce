import React from 'react';
import girl from '../resources/girl.png';
import BannerBack from '../resources/bannerBack.png';

export default function SimpleBanner() {
  return (
    <div className="relative w-full h-[600px] bg-orange-300 overflow-hidden">
      {/* Faded background image */}
      <img
        src={BannerBack}
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      {/* Foreground content: text and image */}
      <div className="relative z-10 flex h-full">
        {/* Left: Text (65%) */}
        <div className="w-[65%] flex flex-col justify-center px-10 space-y-6">
          <h1
            className="text-6xl font-extrabold text-black tracking-widest"
            style={{ fontFamily: 'Impact,poppins' }} // "techy" style font
          >
            Hi welcome
          </h1>
          <h2 className="text-7xl text-white" style={{ fontFamily: 'Impact' }}>
            Fashion
          </h2>
          <h3 className="text-5xl text-white" style={{ fontFamily: 'Lexend' }}>
            is 50% offer
          </h3>
        </div>

        {/* Right: Girl image (35%) */}
        <div className="w-[35%] flex items-center justify-center">
          <img
            src={girl}
            alt="Fashion Girl"
            className="h-[120%] w-[100%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
