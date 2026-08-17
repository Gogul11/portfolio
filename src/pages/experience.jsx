import { experiences } from "../utils/experiences";

export default function ExperienceTimeline() {
  return (
    <>
      <div className="mb-8 flex items-center gap-3 md:mt-20 px-4 md:px-10">
        <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-2 text-2xl ">
          EXPERIENCE
        </span>
        <div className="h-[3px] flex-1 bg-crayol" />
      </div>
      <div className="w-full min-h-screen px-4 sm:px-6 md:px-10 py-10">
        
        <div className="relative">
  
          {/* Timeline line */}
          <div className="absolute left-[20px] sm:left-auto animate-pulse sm:right-[50px] top-0 h-full w-10 bg-crayol " />
  
          <div className="flex flex-col gap-8 sm:gap-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-4 sm:gap-6 group"
              >
  
                {/* Dot */}
                
  
                {/* Card */}
                <div
                  className="
                    relative overflow-hidden flex-1
                    rounded-2xl sm:rounded-3xl
                    border-r border-b border-black shadow-[8px_8px_0px_#000]
                    bg-gunmetal/30
                    backdrop-blur-xl
                    p-4 sm:p-6
                    transition-all duration-500
                    hover:translate-x-1 sm:hover:translate-x-2
                    
                    hover:-rotate-1
                    hover:bg-gunmetal/30
                  "
                >
  
                  <div className="relative z-10">
  
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  
                      {/* Title */}
                      <div>
                        <p className="text-xl sm:text-2xl font-semibold text-crayol">
                          {item.title}
                        </p>
                      </div>
  
                      {/* Year / Period */}
                      <span className="text-xs sm:text-sm text-crayol bg-crayol/10 px-3 py-1 rounded-full w-fit">
                        {item.period}
                      </span>
  
                    </div>
  
                    {/* Description */}
                    {item.desc && (
                      <p className="text-sm sm:text-base text-white mt-4 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
  
                  </div>
                </div>
  
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}