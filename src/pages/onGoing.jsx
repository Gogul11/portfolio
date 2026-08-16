import React from 'react';
import OnGoingProjectCard from '../components/onGoingProjectCard';
import {ongoingProjects} from '../utils/projectDetails'
import { CiCoffeeCup } from "react-icons/ci";

const OnGoing = () => {
  return (
      <>
        <div className="mb-8 flex items-center gap-3 md:mt-20 px-4 md:px-10">
          <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-1 text-2xl ">
           ONGOING PROJECTS
          </span>
          <div className="h-[3px] flex-1 bg-crayol" />
        </div>
          <div className="max-w-3xl mx-auto mt-10 p-4 font-mono ani">
              {ongoingProjects.length > 0 ?
                  ongoingProjects.map((proj, idx) => (
                      <OnGoingProjectCard
                          key={idx}
                          title={proj.title}
                          desc={proj.desc}
                          width={proj.width}
                      />
                      ))
                  :
                  <p className='text-2xl text-crayol font-bold flex gap-4 items-center mt-10 justify-center'>
                      No projects commited at this time <CiCoffeeCup  size={30} className='animate-bounce'/>
                  </p>
          }
        </div>
      </>
      
    );
}

export default OnGoing;
