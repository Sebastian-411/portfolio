import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn} from "react-icons/fa6";

export default function Banner() {
    const [t] = useTranslation("global")
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-10">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Juan Sebastian Diaz Sanchez</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{t("banner.message")}</p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    
                        <a href="https://github.com/Sebastian-411" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <FaGithub size={30} /> 
                            <div className='pl-2'>
                                Github
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/sebastian-diaz-sanchez/" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-gray-200 rounded-lg sm:w-auto bg-[#0e76a8] hover:bg-[#316a85] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-[#0e76a8] dark:focus:ring-gray-800">
                            <FaLinkedinIn size={30} color='white' /> 
                            <div className='pl-2'>
                                Linkedin
                            </div>
                        </a> 
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/avatar.jpeg" alt="Avatar" />
                </div>                
            </div>
        </section>
    )
}
