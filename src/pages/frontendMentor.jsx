import React from 'react';
import { LuExternalLink } from "react-icons/lu";
import { GiAnchor } from "react-icons/gi";
import { challenges } from '../utils/projectDetails';

const FrontendMentor = () => {
  return (
      <>
        <div className="mb-8 flex items-center gap-3 md:mt-20 px-4 md:px-10">
          <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
            FRONTEND MENTOR CHALLENGES
          </span>
          <div className="h-[3px] flex-1 bg-crayol" />
        </div>
  
        <div className="p-4">
            {challenges.map((challenge, index) => (
                <div
                    key={index}
                    className="mb-8 border-r border-b border-black shadow-[8px_8px_0px_#000] bg-gunmetal/30 p-4 rounded-lg backdrop-blur-2xl hover:-rotate-1"
                >
                    <h3 className="text-xl font-semibold text-white mb-2">{challenge.title}</h3>
                    <div className='w-full flex flex-col gap-1 items-end'>
                        <a
                            href={challenge.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-2 text-crayol text-lg font-bold"
                        >
                           <LuExternalLink /> GitHub Repo
                        </a>
                        <a
                            href={challenge.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-2 text-crayol text-lg font-bold"
                        >
                            <GiAnchor /> Live Site
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </>
    );
};

export default FrontendMentor;

