import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#1e1e1e] overflow-auto h-full md:mt-10 p-4 w-[90%] rounded-2xl max-w-4xl ani mx-auto">
      <p className="text-2xl">{'{'}</p>

      <div className=" space-y-2 px-8">
        <div className="flex flex-wrap">
          <span className="text-[#9cdcfe]">"name"</span>:&nbsp;
          <span className="text-[#ce9178]">"Gogul A"</span>,
        </div>

        <div className="flex flex-wrap">
          <span className="text-[#9cdcfe]">"email"</span>:&nbsp;
          <a 
            href="mailto:gogul0811@gmail.com" 
            className="text-[#ce9178] break-all"
          >
            "gogul0811@gmail.com"
          </a>,
        </div>

        <div className="flex flex-wrap">
          <span className="text-[#9cdcfe]">"github"</span>:&nbsp;
          <a
            href="https://github.com/Gogul11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ce9178] break-all"
          >
            "https://github.com/Gogul11"
          </a>,
        </div>

        <div className="flex flex-wrap">
          <span className="text-[#9cdcfe]">"linkedin"</span>:&nbsp;
          <a
            href="https://www.linkedin.com/in/gogul11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ce9178] break-all"
          >
            "https://www.linkedin.com/in/gogul11"
          </a>,
        </div>

        <div className="flex flex-wrap">
          <span className="text-[#9cdcfe]">"leetcode"</span>:&nbsp;
          <a
            href="https://leetcode.com/u/Gogul11/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ce9178] break-all"
          >
            "https://leetcode.com/u/Gogul11/"
          </a>,
        </div>
      </div>

      <p className="text-2xl">{'}'}</p>
    </div>
  );
};
//https://leetcode.com/u/Gogul11/
export default Contact;
