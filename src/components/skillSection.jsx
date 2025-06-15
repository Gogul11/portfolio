import React from "react";

const SkillSection = ({ title, titleColor, items }) => {
  return (
    <div className="mb-10 bg-white/10 p-4 rounded-2xl">
      <h2 className={`text-xl md:text-2xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      <ul className="space-y-3 list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-base md:text-lg">
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
