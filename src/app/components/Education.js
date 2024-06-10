import React from "react";
import { education } from "./../../const/education";

export default function Education() {
  return (
    <>
      <div>
        <p className="text-2xl font-normal tracking-tight text-primary dark:text-white lg:text-6xl">
          Education and Licenses
        </p>
      </div>
      <div>
        <ol class="relative border-s border-black mt-10 dark:border-gray-700">
          {education.map((item, index) => (
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
