import React from "react";

export default function Project() {
  return (
    <div className="flex flex-col flex-nowrap items- justify-around h-full">
      <p className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight">
        Projects
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
        Explore my diverse projects, each with a unique story and contribution.
        🌟 From technical innovations to practical solutions, each project
        showcases my dedication to effective problem-solving. 🚀 Dive in to
        discover how I can add value to your endeavors!
      </p>
      <div className="w-full mt-8 md:max-w-xs lg:max-w-none">
        <a
          href={`/projects`}
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Go to projects
        </a>
      </div>
    </div>
  );
}
