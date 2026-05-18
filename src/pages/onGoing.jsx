import React from 'react';
import OnGoingProjectCard from '../components/onGoingProjectCard';
import {ongoingProjects} from '../utils/projectDetails'
import { CiCoffeeCup } from "react-icons/ci";

const OnGoing = () => {
    return (
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
                <p className='text-2xl text-blue-100 flex gap-4 items-center mt-10 justify-center'>
                    No projects commited at this time <CiCoffeeCup  size={30} color='brown' className='animate-bounce'/>
                </p>
        }
        </div>
    );
}

export default OnGoing;
