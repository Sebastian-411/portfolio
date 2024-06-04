import React from 'react'
import { useTranslation } from 'react-i18next';
import { CiMail } from "react-icons/ci";


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
                    {
                        //  icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50
                    }
                    <CiMail strokeWidth={0.2} size={25} style={{opacity: 0.6}}/>
                </a>
                <a
                    href="https://github.com/Sebastian-411"
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
                        viewBox="0 0 24 24"
                        stroke-width="0.8"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                    ></path></svg
                    >
                </a>
                <a
                    href="https://twitter.com/Sebastian411_"
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-x"
                        viewBox="0 0 24 24"
                        stroke-width="0.8"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                        d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path
                            d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg
                    >
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
