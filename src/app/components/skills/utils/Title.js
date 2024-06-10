import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

export default function Title({ title }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <IoChevronBack />
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-extrabold text-center  text-gray-800 dark:text-gray-200">
            😍 Interests 😍
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <IoChevronForward />
        </div>
      </div>
    </div>
  );
}
