import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "../experience/Carousel";

export default function Experience() {
  const [t] = useTranslation("global");

  return (
    <div>
      <div className="flex flex-col flex-nowrap items-center justify-evenly h-full">
        <div>
          <p className="ext-xl  w-full text-left tracking-tight font-medium text-primary dark:text-white md:text-6xl">
            {t("banner.experience")}
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
            {t("banner.experience_description")}
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
