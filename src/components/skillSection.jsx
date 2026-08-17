import React from "react";

const SkillSection = ({ title, items }) => {
  return (
    <div className="mb-10 bg-gunmetal/30 backdrop-blur-lg p-4 rounded-2xl border-r border-b border-black shadow-[8px_8px_0px_#000]">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-crayol">
        {title}
      </h2>
      <ul className="space-y-3 list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-base md:text-lg marker:text-crayol">
            <strong className="text-crayol underline">{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
