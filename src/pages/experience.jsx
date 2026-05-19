import { experiences } from "../utils/experiences";

export default function ExperienceTimeline() {
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-10 py-10">
      
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-12">
        Experience
      </h1>

      <div className="relative">

        {/* Timeline line */}
        <div className="absolute left-[20px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-blue-500" />

        <div className="flex flex-col gap-8 sm:gap-12">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-4 sm:gap-6 group"
            >

              {/* Dot */}
              <div className="relative z-10 min-w-[40px] h-[40px] rounded-full border border-indigo-400/50 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                <div className="w-3 h-3 rounded-full bg-indigo-800" />
              </div>

              {/* Card */}
              <div className="relative overflow-hidden flex-1 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 transition-all duration-500 hover:translate-x-1 sm:hover:translate-x-2 hover:bg-white/[0.07]">

                {/* Gas Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-400/20 blur-3xl rounded-full" />

                  <div className="absolute bottom-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/20 blur-3xl rounded-full" />
                </div>

                <div className="relative z-10">

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    
                    <div>
                      <p className="text-xl sm:text-2xl font-semibold text-white">
                        {item.title}
                      </p>
                    </div>

                    <span className="text-xs sm:text-sm text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                      {item.period}
                    </span>

                  </div>

                  {item.desc && 
                    <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
                        {item.desc}
                    </p>
                    }
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}