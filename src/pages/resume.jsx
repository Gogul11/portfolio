import React from 'react';

const Resume = () => {
  return (
    <div className="h-full m-4 ani p-4 rounded-2xl">
      <div className="mb-8 flex items-center gap-3  px-4 md:px-10">
        <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
          RESUME
        </span>
        <div className="h-[3px] flex-1 bg-crayol" />
      </div>
      <iframe
        src="/portfolio/resume.pdf"
        className="w-full h-[80vh] border-none"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
