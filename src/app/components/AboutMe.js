import React from 'react'
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const [t] = useTranslation("global")

    return (
        <div>
            <div className="relative flex items-center gap-x-4">
                <img
                    src="/images/avatar.jpg"
                    alt=""
                    className="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
                />
                <div className="text-sm leading-6">
                    <p className="font-semibold text-primary dark:text-white">
                        <a href="https://www.linkedin.com/in/sebastian-diaz-sanchez/">
                            <span className="absolute inset-0"></span>
                            Juan Sebastian Diaz
                        </a>
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Software Engineer &amp; Web developer
                    </p>
                </div>
            </div>
            <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
                {t("banner.welcome")}
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
                {t("banner.welcome_message")}
            </p>
        </div>
    )
}
