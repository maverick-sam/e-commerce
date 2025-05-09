import BannerImg from '../resources/girl.png';
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-orange-500  flex flex-col md:flex-row items-center justify-between px-8 py-12 rounded-2xl shadow-lg">
      
      {/* Left Side Content */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl leading-tight text-poppins">
          <span className="block font-light text-black">Live For </span>
          <span className="block font-bold text-white">Fashion</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl font-normal">
          Learn Java, Python, Web Development, and more from industry experts at TechyAsylum.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
      <img
  src={BannerImg}
  alt="Banner Visual"
  className="w-[450px] h-[550px] "
/>

      </div>
    </div>
  );
};

export default Banner;
