import React from 'react';
import { LuExternalLink } from "react-icons/lu";
import { GiAnchor } from "react-icons/gi";
import { challenges } from '../utils/projectDetails';

const FrontendMentor = () => {
    return (
        <div className="p-4">
            <h3 className="text-2xl text-indigo-600 font-bold mb-4">Frontend Mentor Challenges</h3>
            {challenges.map((challenge, index) => (
                <div
                    key={index}
                    className="mb-4 border border-white/10 bg-white/10 p-4 rounded-lg"
                >
                    <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                    <div>
                        <a
                            href={challenge.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-2 text-blue-600"
                        >
                           <LuExternalLink /> GitHub Repo
                        </a>
                        <a
                            href={challenge.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-2 text-green-600"
                        >
                            <GiAnchor /> Live Site
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FrontendMentor;

