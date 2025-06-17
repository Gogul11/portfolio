import React from 'react';
import { skills } from '../utils/icons';

const IconCarousel = () => {
  return (
    <div className="w-full px-2 overflow-hidden">
      <div className="flex animate-scroll-left">
        {[...skills, ...skills, ...skills].map((item, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 mx-8 flex items-center justify-center text-blue-700 transition-transform hover:scale-110 duration-300`}
          >
            <div className="text-4xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCarousel;
