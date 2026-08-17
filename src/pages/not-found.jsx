import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4">


      {/* Decorative Shapes */}
      <div className="absolute left-[8%] top-[15%] h-16 w-16 rotate-12 border-2 border-black bg-crayol shadow-[6px_6px_0px_#000]" />

      <div className="absolute bottom-[15%] right-[8%] h-20 w-20 rounded-full border-2 border-black bg-crayol shadow-[6px_6px_0px_#000]" />

      <div className="absolute right-[15%] top-[12%] text-5xl text-crayol">
        +
      </div>

      <div className="absolute bottom-[20%] left-[15%] text-5xl text-crayol">
        ×
      </div>

      {/* Main */}
      <main className="relative z-10 flex max-w-3xl flex-col items-center text-center">

        {/* Small Label */}
        <div
          className="
            mb-6
            -rotate-2
            border-2 border-black
            bg-crayol
            px-4 py-2
            font-heading
            text-sm
            font-black
            text-gunmetal
            shadow-[5px_5px_0px_#000]
          "
        >
          ERROR 404
        </div>

        {/* Big 404 */}
        <h1
          className="
            font-heading
            text-[clamp(7rem,25vw,16rem)]
            leading-[0.75]
            tracking-tighter
            text-crayol
            [-webkit-text-stroke:3px_#000]
            drop-shadow-[10px_10px_0px_#000]
          "
        >
          404
        </h1>

        {/* Message */}
        <div className="mt-10 border-2 border-black bg-white px-5 py-4 text-gunmetal shadow-[7px_7px_0px_#ED254E] rotate-1">
          <h2 className="font-heading text-xl md:text-2xl">
            OOPS! YOU'RE LOST.
          </h2>

          <p className="mt-2 text-sm md:text-base">
            The page you're looking for doesn't exist
            <br className="hidden sm:block" />
            or has wandered off into the void.
          </p>
        </div>
        {/* Bottom text */}
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/50">
          Nothing to see here... yet.
        </p>

      </main>
    </div>
  );
};

export default NotFound;