import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

export default function Title({ title, back, next }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <button onClick={back}>
            <IoChevronBack size={40} />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-extrabold text-center  text-gray-800 dark:text-gray-200">
            {title}
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={next}>
            <IoChevronForward size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}
