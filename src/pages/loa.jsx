import React, { useState } from 'react';
import { LoaPdfFiles } from '../utils/loaFiles';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Loa = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePdf = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4 font-mono text-sm ani">
      <h3 className="text-2xl text-indigo-600 font-bold mb-4">Letters of Appreciation</h3>
      <div className="space-y-4">
        {LoaPdfFiles.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => togglePdf(index)}
              className="w-full px-4 py-3 text-left text-white font-medium text-base cursor-pointer"
            >
              <div className='flex items-center gap-2'>
                {openIndex !== index ? 
                  <MdOutlineKeyboardDoubleArrowDown size={20}/> : 
                  <MdKeyboardDoubleArrowUp size={20}/>
                }
                {item.title}
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[100%] p-4 bg-gray-200" : "max-h-0"
              }`}
            >
              <p className="text-black mb-4">{item.desc}</p>
              {openIndex === index && (
                <iframe
                  src={item.pdfUrl}
                  className="w-full h-[500px] border rounded-lg"
                  title={item.title}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loa;
