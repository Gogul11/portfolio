import React from 'react';
import { LuLink } from "react-icons/lu";
import { HiOutlineLink } from "react-icons/hi";
import { iconLinks } from '../utils/links';


const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:mt-12">
      {iconLinks.map(({ label, href, display }, index) => (
        <React.Fragment key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-[90%] max-w-md bg-[#1e1e2f] text-white rounded-xl p-5 shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-3">
              <LuLink className="text-indigo-400 transform rotate-[270deg]" size={24} />
              <div>
                <div className="text-indigo-300 text-sm font-medium">{label}</div>
                <div className="text-white text-sm break-words">{display}</div>
              </div>
            </div>
          </a>

          {/* Add chain icon between blocks */}
          {index !== iconLinks.length - 1 && (
            <HiOutlineLink className="text-indigo-600 my-4 text-3xl animate-pulse rotate-[135deg]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Contact;
