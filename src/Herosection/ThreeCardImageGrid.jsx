import React from "react";
import { ArrowRight } from "lucide-react";
import blog1 from '../resources/blog1.png';
import blog2 from '../resources/blog2.png';
import blog3 from '../resources/blog3.png';

const BlogItem = ({ imageUrl, date, description }) => {
  return (
    <div className="w-full">
      <div className="w-60 h-70 overflow-hidden shadow-md group">
        <img
          src={imageUrl}
          alt="Blog"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:h-56"
        />
      </div>
      <div className="px-4 pt-2">
        <div className="flex justify-start mb-1">
          <a
            href="#"
            className="text-orange-500 underline text-sm font-bold"
          >
            {date}
          </a>
        </div>
        <p className="text-gray-400 text-sm mb-2">
          {description}
        </p>
        <div className="flex justify-end pb-4">
          <button className="border border-black text-black px-3 py-1 text-sm flex items-center gap-1">
            Read More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ThreeCardImageGrid = () => {
  const blogs = [
    {
      imageUrl: blog1,
      date: "21jan2024",
      description: "This is a sample description for the first blog."
    },
    {
      imageUrl: blog2,
      date: "21jan2024",
      description: "This is a sample description for the second blog."
    },
    {
      imageUrl: blog3,
      date: "21jan2024",
      description: "This is a sample description for the third blog."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {blogs.map((blog, index) => (
        <BlogItem key={index} {...blog} />
      ))}
    </div>
  );
};

export default ThreeCardImageGrid;
