import { useState } from "react";
import { achievements, extraCurriculars } from "../utils/eca";

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
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        📋 Achievements & Extra-Curricular Activities
      </h2>

      {/* Achievements Block */}
      <div className="mb-10">
        <h3 className="text-xl text-white font-semibold mb-4">🏅 Achievements</h3>
        <div className="space-y-4">
          {achievements.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleAchievement(index)}
                className="w-full px-4 py-3 text-left text-white font-medium text-base cursor-pointer"
              >
                {item.title}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openAchievement === index ? " p-4 bg-gray-200 text-black" : "max-h-0"
                }`}
              >
                <p className={`text-black ${item.pdfUrl && 'mb-4'}`}>{item.detail}</p>
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
        <h3 className="text-xl text-white font-semibold mb-4">🎯 Extra-Curricular Activities</h3>
        <div className="space-y-4">
          {extraCurriculars.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden ">
              <button
                onClick={() => toggleECA(index)}
                className="w-full px-4 py-3 text-left text-white font-medium text-base cursor-pointer"
              >
                {item.title}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openECA === index ? "p-4 bg-gray-200 text-black" : "max-h-0"
                }`}
              >
                <p className={`text-black ${item.pdfUrl && 'mb-4'}`}>{item.detail}</p>
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
