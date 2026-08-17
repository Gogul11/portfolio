import { useState } from "react";
import { achievements, extraCurriculars } from "../utils/eca";
import { GiAnchor } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function ECA() {
  const [openAchievement, setOpenAchievement] = useState(null);
  const [openECA, setOpenECA] = useState(null);

  const toggleAchievement = (index) => {
    setOpenAchievement(openAchievement === index ? null : index);
  };

  const toggleECA = (index) => {
    setOpenECA(openECA === index ? null : index);
  };




  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4 font-mono text-sm ani">

      {/* Achievements Block */}
      <div className="mb-10">
        <div className="mb-8 flex items-center gap-3 px-4 md:px-10">
          <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-2 text-2xl ">
            ACHIEVEMENTS
          </span>
          <div className="h-[3px] flex-1 bg-crayol" />
        </div>
        <div className="space-y-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-gunmetal/30 backdrop-blur-lg  border-r border-b border-black shadow-[8px_8px_0px_#000] rounded-lg verflow-hidden hover:-rotate-1">
              <button
                onClick={() => toggleAchievement(index)}
                className="w-full px-4 py-3 text-left text-white font-medium text-base cursor-pointer"
              >
                <div className='flex items-center gap-2'>
                  {openAchievement !== index ? 
                    <MdOutlineKeyboardDoubleArrowDown color={'#ED254E'} size={20}/> : 
                    <MdKeyboardDoubleArrowUp color={'#ED254E'} size={20}/>
                  }
                  {item.title}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openAchievement === index ? " p-4 bg-gunmetal/40" : "max-h-0"
                }`}
              >
                <p className={`text-white font-mono text-md ${item.pdfUrl && 'mb-4'}`}>{item.detail}</p>
                {item.link && 
                  <div className="flex items-center gap-2 text-md underline text-crayol">
                    <GiAnchor />
                    <a 
                      href={item.link} 
                      target="_blank"
                      className={`font-mono text-md ${item.pdfUrl ? 'my-2 block' : ''}`}
                    >View solution</a>
                  </div>
                  }
                {item.pdfUrl && 
                  <iframe
                    src={item.pdfUrl}
                    className="w-full h-[500px] border rounded-lg"
                    title={item.title}
                  />
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra-Curricular Block */}
      <div>
        <div className="mb-8 flex items-center gap-3 px-4 md:px-10">
          <span className="bg-crayol text-gunmetal  border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
            Extra-Curricular Activities
          </span>
          <div className="h-[3px] flex-1 bg-crayol" />
        </div>
        <div className="space-y-8">
          {extraCurriculars.map((item, index) => (
            <div key={index} className="bg-gunmetal/30 backdrop-blur-lg border-r border-b border-black shadow-[8px_8px_0px_#000] rounded-lg  overflow-hidden hover:-rotate-1">
              <button
                onClick={() => toggleECA(index)}
                className="w-full px-4 py-3 text-left text-white font-medium text-base cursor-pointer"
              >
                <div className='flex items-center gap-2'>
                  {openECA !== index ? 
                    <MdOutlineKeyboardDoubleArrowDown color={'#ED254E'} size={20}/> : 
                    <MdKeyboardDoubleArrowUp color={'#ED254E'} size={20}/>
                  }
                  {item.title}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openECA === index ? "p-4 bg-gunmetal/40" : "max-h-0"
                }`}
              >
                <p className={`text-white ${item.pdfUrl && 'mb-4'}`}>{item.detail}</p>
                {item.pdfUrl && 
                  <iframe
                    src={item.pdfUrl}
                    className="w-full h-[500px] border rounded-lg"
                    title={item.title}
                  />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
