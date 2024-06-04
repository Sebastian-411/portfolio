import React from 'react'
import { useTranslation } from 'react-i18next';
import AboutMe from './AboutMe';
import FindMe from './FindMe';
import CV from './CV';

export default function Content() {
    const [t] = useTranslation("global")

    return (
        <section>
            <div className="p-4">
                <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4" >
                    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
                        <AboutMe />
                    </div>
                    <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
                        <FindMe />
                    </div>
                    <div className="ring-1 lg:row-span-2 flex flex-col justify-between h-full dark:ring-white/10 lg:row-start-2  lg:gap-0 md:items-center md:gap-12  lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
                        <Experience />
                    </div>
                    <div className="ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8  bg-white dark:bg-secondary overflow-hidden text-center lg:text-left">
                        <CV />
                    </div>
                    <div
                        className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
                    >
                        <svg
                            className="w-24 h-24 lg:w-48 xl:h-64 xl:w-64 lg:h-48"
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_136)">
                                <path
                                    d="M45 45.5C45 42.9804 46.0009 40.5641 47.7825 38.7825C49.5641 37.0009 51.9804 36 54.5 36C57.0196 36 59.4359 37.0009 61.2175 38.7825C62.9991 40.5641 64 42.9804 64 45.5C64 48.0196 62.9991 50.4359 61.2175 52.2175C59.4359 53.9991 57.0196 55 54.5 55C51.9804 55 49.5641 53.9991 47.7825 52.2175C46.0009 50.4359 45 48.0196 45 45.5Z"
                                    fill="#1ABCFE"></path>
                                <path
                                    d="M26 64.5C26 61.9804 27.0009 59.5641 28.7825 57.7825C30.5641 56.0009 32.9804 55 35.5 55H45V64.5C45 67.0196 43.9991 69.4359 42.2175 71.2175C40.4359 72.9991 38.0196 74 35.5 74C32.9804 74 30.5641 72.9991 28.7825 71.2175C27.0009 69.4359 26 67.0196 26 64.5V64.5Z"
                                    fill="#0ACF83"></path>
                                <path
                                    d="M45 17V36H54.5C57.0196 36 59.4359 34.9991 61.2175 33.2175C62.9991 31.4359 64 29.0196 64 26.5C64 23.9804 62.9991 21.5641 61.2175 19.7825C59.4359 18.0009 57.0196 17 54.5 17H45Z"
                                    fill="#FF7262"></path>
                                <path
                                    d="M26 26.5C26 29.0196 27.0009 31.4359 28.7825 33.2175C30.5641 34.9991 32.9804 36 35.5 36H45V17H35.5C32.9804 17 30.5641 18.0009 28.7825 19.7825C27.0009 21.5641 26 23.9804 26 26.5V26.5Z"
                                    fill="#F24E1E"></path>
                                <path
                                    d="M26 45.5C26 48.0196 27.0009 50.4359 28.7825 52.2175C30.5641 53.9991 32.9804 55 35.5 55H45V36H35.5C32.9804 36 30.5641 37.0009 28.7825 38.7825C27.0009 40.5641 26 42.9804 26 45.5V45.5Z"
                                    fill="#A259FF"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_136">
                                    <rect
                                        width="38"
                                        height="57"
                                        fill="white"
                                        transform="translate(26 17)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-xl  text-primary dark:text-white lg:text-2xl mt-6">
                            Figma Community
                        </p>
                    </div>
                    <div
                        className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8"
                    >
                        <div className="-mr-24">
                            <img
                                src="/images/lexington.png"
                                className="rounded-2xl object-cover ring-1 h-64 w-full lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary"
                                alt=""
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex flex-wrap">
                                <div
                                    className="flex items-center text-sm font-medium text-primary dark:text-white"
                                >
                                    <svg
                                        className="flex-none w-4 h-4 stroke-current"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M63.3694 5.33018C64.129 6.27325 64.5164 7.54562 65.291 10.0906L82.215 65.6862C75.8581 62.3873 69.0351 60.0773 61.9815 58.836L50.9623 21.5986C50.8744 21.3015 50.6928 21.0408 50.4445 20.8556C50.1962 20.6704 49.8945 20.5705 49.5848 20.571C49.275 20.5715 48.9737 20.6723 48.7259 20.8583C48.4782 21.0443 48.2974 21.3055 48.2105 21.6029L37.3247 58.8172C30.2392 60.0528 23.3848 62.3665 17 65.6778L34.0071 10.0776C34.7842 7.53708 35.1728 6.26679 35.9324 5.32559C36.603 4.49465 37.4753 3.84929 38.466 3.45101C39.5884 3 40.9167 3 43.5734 3H55.7208C58.381 3 59.7111 3 60.8344 3.45205C61.8261 3.85109 62.6988 4.49772 63.3694 5.33018Z"
                                            fill="currentColor"></path>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M65.3945 68.3321C62.6045 70.7178 57.0359 72.3448 50.6215 72.3448C42.7487 72.3448 36.15 69.8938 34.399 66.5975C33.773 68.4867 33.6327 70.6488 33.6327 72.03C33.6327 72.03 33.2203 78.812 37.9374 83.5291C37.9374 81.0797 39.9229 79.0942 42.3722 79.0942C46.5704 79.0942 46.5657 82.7568 46.5619 85.7284L46.5616 85.9936C46.5616 90.5039 49.3182 94.3703 53.2386 96C52.6531 94.7957 52.3246 93.4433 52.3246 92.0141C52.3246 87.7124 54.85 86.1107 57.7851 84.2492C60.1204 82.7681 62.7151 81.1226 64.5033 77.8215C65.4364 76.0991 65.9662 74.1264 65.9662 72.03C65.9662 70.7407 65.7658 69.4982 65.3945 68.3321V68.3321Z"
                                            fill="#d94dd1"
                                            stroke="#d94dd1"></path>
                                    </svg>
                                    <span className="ml-2.5"> Astro</span>
                                </div>
                                <div
                                    className="flex items-center ml-6 text-sm font-medium text-primary dark:text-white"
                                >
                                    <svg
                                        viewBox="0 0 256 154"
                                        aria-label="Tailwind CSS"
                                        className="flex-none w-4 h-4 stroke-current"
                                        width="64"
                                        height="64"
                                        astro-icon="logos:tailwindcss-icon"
                                    >
                                        <path
                                            fill="#38bdf9"
                                            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                                        ></path>
                                    </svg>
                                    <span className="ml-2.5"> Tailwind CSS</span>
                                </div>
                            </div>
                            <p     className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6"
                            >
                                Lexington
                            </p>
                            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                                Free and premium multipage themes and UI Kits for freelancers,
                                developers, businesses, and personal use. Beautifully crafted with
                                Astro.js, and Tailwind CSS — Simple & easy to customise.
                            </p>
                        </div>
                    </div>
                    <div
                        className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
                    >


                        <div className="relative p-8 text-center w-full">
                            <p     className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl"
                            >
                                Subscribe <span className="lg:block">to my newsletter</span>
                            </p>
                            <form className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                                <label for="email-address" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autocomplete="email"
                                    required=""
                                    className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Enter your email"
                                />
                                <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                                    >Subscribe</button
                                    >
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary"
                    >
                        <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
                            Testimonials
                        </p>
                        <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
                            <div className="mt-4">
                                <p className="text-sm text-pink-500 dark:text-pink-400">
                                    "Big fan of your themes. They're well-organized, look clean, and
                                    are fast."
                                </p>
                                <p className="text-xs mt-2 text-zinc-500">
                                    <span className="block text-xs">Kevin Focke</span>
                                    <span className="block text-xs"> Developer</span>
                                </p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-orange-500 dark:text-orange-300">
                                    "Amazing resource using @astrodotbuild and @tailwindcss! I got it
                                    a week ago and have found the contents really useful. 5/5
                                </p>
                                <p className="text-xs mt-2 text-zinc-500">
                                    <span className="block text-xs">Alonso</span>
                                    <span className="block text-xs"> Entrepreneur</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
                    >
                        <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl">
                            As a digital designer, my expertise lies in crafting distinctive
                            visual identities for digital products.
                            <br />
                            <br />
                            I hold the belief that an engaging design begins with shared values,
                            transparent communication, and a genuine respect for the audience.
                        </p>
                        <p className="text-primary dark:text-white mt-4">Michael Andreuzza</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
