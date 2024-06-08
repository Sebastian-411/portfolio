import React from "react";

export default function Education() {
  return (
    <>
      <div>
        <p className="text-2xl font-normal tracking-tight text-primary dark:text-white lg:text-6xl">
          Education and Licenses
        </p>
      </div>
      <div>
        <ol class="relative border-s border-gray-200 mt-10 dark:border-gray-700">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 2022
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Incorporation to the Software Engineering career - ICESI
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Education Universidad ICESI logo Universidad ICESIUniversidad
              ICESI Engineering, Software engineering
            </p>
          </li>
          <li class="ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              December 2021
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              High School Diploma with a Technical Emphasis in Electronics
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              I specialized in electronics and related technical fields. The
              program included comprehensive coursework in circuit design,
              electrical systems, and technical drawing. Additionally, I gained
              hands-on experience through various practical projects and
              laboratory work, allowing me to apply theoretical knowledge in
              real-world scenarios.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}
