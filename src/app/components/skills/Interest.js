import React from "react";
import "../../../css/text-border.css";
import { interests } from "../../../const/Interests";
import Title from "./utils/Title";

export default function Interest() {
  return (
    <div>
      <Title title="😍 Interests 😍" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {interests.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div className="flex-shrink-0">
              <div className="bg-gray-500 text-white text-xl flex items-center justify-center rounded-full h-9 w-9">
                <span className="emoji">{item.icon}</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {item.skill}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
