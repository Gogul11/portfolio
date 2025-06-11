import React from 'react';

const Skills = () => {
    return (
        <div className="px-4 py-2 md:py-10 max-w-4xl mx-auto max-lg:mx-4 ani">
            {/* Programming Languages */}
            <div className="mb-10 bg-white/10 p-2 rounded-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-500 ">
                    Programming Languages
                </h2>
                <ul className="space-y-3 list-disc pl-5">
                    <li className="text-base md:text-lg">
                        <strong>C / C++:</strong> Proficient in low-level programming, memory management, and algorithmic problem solving.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>JavaScript:</strong> Skilled in building interactive frontend interfaces and backend logic.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>Python:</strong> Used for scripting, data handling, and automation tasks.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>SQL:</strong> Experienced in database querying and schema design for structured data.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>Solidity:</strong> Basic proficiency in writing smart contracts on the Ethereum blockchain.
                    </li>
                </ul>
            </div>

            {/* Frameworks & Libraries */}
            <div className="mb-10 bg-white/10 p-2 rounded-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
                    Frameworks & Libraries
                </h2>
                <ul className="space-y-3 list-disc pl-5">
                    <li className="text-base md:text-lg">
                        <strong>React.js:</strong> Used for building modular, performant UIs with component-based architecture.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>React Native:</strong> Developed cross-platform mobile apps with native performance and clean UI.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>Node.js:</strong> Backend logic and RESTful APIs for full-stack applications.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>Express.js:</strong> Lightweight and fast API server setup with middleware and routing.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>Tailwind CSS:</strong> Rapid UI development with utility-first styling approach.
                    </li>
                </ul>
            </div>

            {/* Tech Stacks */}
            <div className="mb-10 bg-white/10 p-2 rounded-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-yellow-500">
                    Tech Stacks
                </h2>
                <ul className="space-y-3 list-disc pl-5">
                    <li className="text-base md:text-lg">
                        <strong>MERN Stack:</strong> MongoDB, Express.js, React.js, Node.js
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>PERN Stack:</strong> PostgreSQL, Express.js, React.js, Node.js
                    </li>
                </ul>
            </div>

            {/* Tools */}
            <div className='bg-white/10 p-2 rounded-2xl'>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-500">
                    Tools
                </h2>
                <ul className="space-y-3 list-disc pl-5">
                    <li className="text-base md:text-lg">
                        <strong>Git:</strong> Version control and collaborative development.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>Docker:</strong> Containerized development and deployment environments.
                    </li>
                    <li className="text-base md:text-lg">
                        <strong>Postman:</strong> API testing and debugging tool.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
