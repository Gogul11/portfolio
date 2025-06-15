import React, { useState } from 'react';
import { LoaPdfFiles } from '../utils/loaFiles';

const Loa = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePdf = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4 font-mono text-sm ani">
      <div className="space-y-4">
        {LoaPdfFiles.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => togglePdf(index)}
              className="w-full px-4 py-3 text-left text-white font-medium text-base cursor-pointer"
            >
              {item.title}
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
                  className="w-full h-[600px] border rounded-lg"
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
