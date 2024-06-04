import React from 'react'
import { useTranslation } from 'react-i18next';


export default function CV() {
    const [t] = useTranslation("global")
    return (
        <div>
            <div>
                <p className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight"
                >
                    {t("banner.cv_tittle")}
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
                    {t("banner.cv_description")}
                </p>
            </div>
            <div className="w-full mt-8 md:max-w-xs lg:max-w-none">
                <a
                    href={`/cv/cv.pdf`}
                    download="cv.pdf"
                    type="button"
                    className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                >
                    Download my CV
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-download w-4 h-4"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                        d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path
                            d="M7 11l5 5l5 -5"></path><path d="M12 4l0 12"></path></svg
                    >
                </a>
            </div>
        </div>
    )
}
