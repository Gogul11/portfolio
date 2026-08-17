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
    <>
      <div className="mb-8 flex items-center gap-3 md:mt-20 px-4 md:px-10">
        <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
          LETTERS OF APPRECIATION
        </span>
        <div className="h-[3px] flex-1 bg-crayol" />
      </div>

      <div className="w-full max-w-4xl mx-auto mt-10 p-4 font-mono text-sm ani">
        
        <div className="space-y-8">
          {LoaPdfFiles.map((item, index) => (
            <div key={index} className="bg-gunmetal/30 backdrop-blur-lg hover:-rotate-1  border-r border-b border-black shadow-[8px_8px_0px_#000] rounded-lg overflow-hidden">
              <button
                onClick={() => togglePdf(index)}
                className="w-full px-4 py-3 text-left text-white font-medium text-base cursor-pointer"
              >
                <div className='flex items-center gap-2'>
                  {openIndex !== index ? 
                    <MdOutlineKeyboardDoubleArrowDown color={'#ED254E'}  size={20}/> : 
                    <MdKeyboardDoubleArrowUp  color={'#ED254E'} size={20}/>
                  }
                  {item.title}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden text-white ${
                  openIndex === index ? "max-h-[100%] p-4 bg-gunmetal/40 " : "max-h-0"
                }`}
              >
                <p className="mb-4">{item.desc}</p>
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
    </>
  );
};

export default Loa;
