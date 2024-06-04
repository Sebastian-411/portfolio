import React from 'react'
import { useTranslation } from 'react-i18next';
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";


export default function FindMe() {
    const [t] = useTranslation("global")

    return (
        <div>
            <div className="w-full">
                <p dangerouslySetInnerHTML={{ __html: t("banner.find_me") }}
                    className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl"
                >

                </p>
            </div>
            <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                <a
                    href="mailto:sg5043161@gmail.com"
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                >
                    <CiMail className='group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50' strokeWidth={0.2} size={25} style={{opacity: 0.6}}/>
                </a>
                <a
                    href="https://github.com/Sebastian-411"
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                >
                    <FiGithub className='group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50' strokeWidth={0.5} size={25} />
                </a>
                <a
                    href="https://twitter.com/Sebastian411_"
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                >
                    <BsTwitterX  className='group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50' strokeWidth={0.1} size={25} style={{opacity: 0.6}}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/sebastian-diaz-sanchez/"
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin"
                        viewBox="0 0 24 24"
                        stroke-width="0.8"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                    ></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"
                    ></path><path d="M12 16l0 -5"></path><path
                        d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg
                    >
                </a>
            </div>

        </div>
    )
}
