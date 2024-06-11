import React from "react";
import "../../../css/text-border.css";
import "../../../css/transition.css";
import Title from "./utils/Title";

export default function SkillSection({ scope, back, next }) {
  return (
    <div className="skill-section">
      <Title title={scope.title} back={back} next={next} />

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {scope.content.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 border border-gray-300 h-56"
          >
            <div className="flex-shrink-0 h-full flex items-center border-r border-gray-300 mt-4 mb-4 ml-4 pr-2">
              <div className="bg-gray-900/80 text-white text-xl flex items-center justify-center rounded-full h-9 w-9">
                <span className="emoji">{item.icon}</span>
              </div>
            </div>
            <p className="text-sm mt-4 mb-4 mr-4 text-gray-700 dark:text-gray-300">
              {item.skill}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
