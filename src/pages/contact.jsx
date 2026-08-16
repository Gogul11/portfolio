import React from 'react';
import { LuLink } from "react-icons/lu";
import { HiOutlineLink } from "react-icons/hi";
import { iconLinks } from '../utils/links';


const Contact = () => {
  return (
    <>
      <div className="mb-8 flex items-center gap-3 md:mt-20 px-4 md:px-10">
        <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
          CONTACT ME
        </span>
        <div className="h-[3px] flex-1 bg-crayol" />
      </div>
      <div className="min-h-screen flex flex-col items-center p-6 md:mt-12 ani">
        
        {iconLinks.map(({ label, href, display }, index) => (
          <React.Fragment key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-[90%] max-w-md bg-gunmetal/30 border-r border-b border-black shadow-[8px_8px_0px_#000] rotate-1 text-white rounded-xl p-5  hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-3">
                <LuLink className="text-crayol transform rotate-[270deg]" size={24} />
                <div>
                  <div className="text-white text-md font-medium">{label}</div>
                  <div className="text-white text-md break-words">{display}</div>
                </div>
              </div>
            </a>
  
            {/* Add chain icon between blocks */}
            {index !== iconLinks.length - 1 && (
              <HiOutlineLink className="text-crayol my-4 text-3xl animate-pulse rotate-[135deg]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Contact;
