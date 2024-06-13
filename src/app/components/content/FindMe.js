import React from "react";
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

export default function FindMe() {
  const [t] = useTranslation("global");

  return (
    <div className="flex flex-col flex-nowrap items-center justify-around h-full">
      <div className="w-full">
        <p
          dangerouslySetInnerHTML={{ __html: t("banner.find_me") }}
          className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl"
        ></p>
      </div>
      <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
        <a
          href="mailto:sg5043161@gmail.com"
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
        >
          <CiMail
            className="group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
            strokeWidth={0.2}
            size={30}
            style={{ opacity: 0.6 }}
          />
        </a>
        <a
          href="https://github.com/Sebastian-411"
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
        >
          <FiGithub
            className="group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
            size={25}
            style={{ opacity: 0.4 }}
          />
        </a>
        <a
          href="https://twitter.com/Sebastian411_"
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
        >
          <BsTwitterX
            className="group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
            strokeWidth={0.1}
            size={25}
            style={{ opacity: 0.4 }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sebastian-diaz-sanchez/"
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
        >
          <CiLinkedin
            className="group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
            strokeWidth={0.1}
            size={30}
            style={{ opacity: 0.4 }}
          />
        </a>
      </div>
    </div>
  );
}
