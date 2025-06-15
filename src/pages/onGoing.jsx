import React from 'react';
import OnGoingProjectCard from '../components/onGoingProjectCard';
import {ongoingProjects} from '../utils/projectDetails'


const OnGoing = () => {
    return (
        <div className="max-w-3xl mx-auto mt-10 p-4 font-mono ani">
           {ongoingProjects.map((proj, idx) => (
                <OnGoingProjectCard
                    key={idx}
                    title={proj.title}
                    desc={proj.desc}
                    width={proj.width}
                />
            ))}
        </div>
    );
}

export default OnGoing;
