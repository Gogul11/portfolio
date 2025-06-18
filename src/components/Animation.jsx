import React from 'react';
import { skills } from '../utils/icons';

const IconCarouselVertical = () => {
  return (
    <div className="px-2 overflow-hidden h-[100vh]">
      <div className="flex animate-scroll-top flex-col">
        {[...skills, ...skills, ...skills].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 my-8 text-indigo-700"
          >
            <div className="text-4xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IconCarouselHorizontal = () => {
  return (
    <div className="px-2 overflow-hidden">
      <div className="flex animate-scroll-left">
        {[...skills, ...skills, ...skills].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 mx-8 text-indigo-700"
          >
            <div className="text-4xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { IconCarouselVertical, IconCarouselHorizontal };
