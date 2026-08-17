import React, { useState } from 'react';
import {
  frameworksAndLibraries,
  operatingSystems,
  programmingLanguages,
  techStacks,
  toolsAndPlatforms
} from '../utils/skillSet';
import SkillSection from '../components/skillSection';

const skillSections = [
  {
    id: 'programming',
    title: 'Programming Languages',
    items: programmingLanguages,
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    items: frameworksAndLibraries,
  },
  {
    id: 'techstacks',
    title: 'Tech Stacks',
    items: techStacks,
  },
  {
    id: 'tools',
    title: 'Tools',
    items: toolsAndPlatforms,
  },
  {
    id: 'os',
    title: 'Operating Systems',
    items: operatingSystems,
  },
];

const Skills = () => {
  const [activeSection, setActiveSection] = useState(skillSections[0]);

  return (
    <>
    <div className="mb-8 flex items-center gap-3 md:mt-20 px-4 md:px-10">
      <span className="bg-crayol text-gunmetal border-2 border-black px-4 py-2 font-heading font-black shadow-[4px_4px_0px_#000] -rotate-2 text-2xl ">
        SKILLS
      </span>
      <div className="h-[3px] flex-1 bg-crayol" />
    </div>
    <div className="w-full max-w-4xl mx-auto mt-10 p-4 font-mono text-sm ani flex flex-col md:flex-row gap-4">
      <div className="flex flex-col space-y-4 mb-6 md:w-[30%]">
        {skillSections.map((section) => (
            <div className='flex'>
                <button
                    key={section.id}
                    onClick={() => setActiveSection(section)}
                    className={`px-2 py-1 rounded-full border-r border-b border-black shadow-[4px_4px_0px_#000] rotate-1 hover:-rotate-1 text-md font-medium transition-all cursor-pointer hover:bg-crayol
                        ${activeSection.id === section.id && 'bg-crayol border-crayol'}`}
                >
                    {section.title}
                </button>
            </div>
        ))}
      </div>

      {/* Selected Content */}
      <div className='md:w-[70%]'>
          <SkillSection
            title={activeSection.title}
            items={activeSection.items}
          />
      </div>
    </div>
    </>
    
  );
};

export default Skills;
