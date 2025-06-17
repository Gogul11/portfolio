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
    titleColor: 'text-green-500',
    items: programmingLanguages,
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    titleColor: 'text-blue-500',
    items: frameworksAndLibraries,
  },
  {
    id: 'techstacks',
    title: 'Tech Stacks',
    titleColor: 'text-yellow-500',
    items: techStacks,
  },
  {
    id: 'tools',
    title: 'Tools',
    titleColor: 'text-red-500',
    items: toolsAndPlatforms,
  },
  {
    id: 'os',
    title: 'Operating Systems',
    titleColor: 'text-purple-500',
    items: operatingSystems,
  },
];

const Skills = () => {
  const [activeSection, setActiveSection] = useState(skillSections[0]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4 font-mono text-sm ani flex flex-col md:flex-row gap-4">
      <div className="flex flex-col space-y-4 mb-6 md:w-[30%]">
        {skillSections.map((section) => (
            <div className='flex'>
                <button
                    key={section.id}
                    onClick={() => setActiveSection(section)}
                    className={`px-2 py-1 rounded-full border text-sm font-medium transition-all cursor-pointer
                        ${activeSection.id === section.id
                            ? `${section.titleColor} bg-white/10 border-white`
                            : 'text-gray-300 border-gray-500 hover:bg-white/5'}`}
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
            titleColor={activeSection.titleColor}
            items={activeSection.items}
          />
      </div>
    </div>
  );
};

export default Skills;
