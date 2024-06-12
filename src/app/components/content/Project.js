import React from "react";

export default function Project() {
  return (
    <div>
      <div>
        <p className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight">
          Projects
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
          ass
        </p>
      </div>
      <div className="w-full mt-8 md:max-w-xs lg:max-w-none">
        <a
          href={`/cv/cv.pdf`}
          download="cv.pdf"
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Go to projects
        </a>
      </div>
    </div>
  );
}
