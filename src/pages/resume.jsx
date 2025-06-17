import React from 'react';

const Resume = () => {
  return (
    <div className="h-full bg-[#1e1e1e] m-4 ani p-4 rounded-2xl">
      <iframe
        src="/resume.pdf"
        className="w-full h-[80vh] border-none"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
