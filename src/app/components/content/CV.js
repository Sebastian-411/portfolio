import React from "react";
import { useTranslation } from "react-i18next";
import { CiSaveDown2 } from "react-icons/ci";

export default function CV() {
  const [t] = useTranslation("global");
  return (
    <div className="flex flex-col flex-nowrap items-start justify-around h-full">
      <p className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight">
        {t("banner.cv_tittle")}
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
        {t("banner.cv_description")}
      </p>
      <div className="w-full md:max-w-xs lg:max-w-none">
        <a
          href={`/cv/cv.pdf`}
          download="cv.pdf"
          type="button"
          className="text-sm  w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Download my CV
          <CiSaveDown2 strokeWidth={2} size={20} />
        </a>
      </div>
    </div>
  );
}
