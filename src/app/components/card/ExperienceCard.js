import React from 'react'

export default function ExperienceCard({ onClick, experience }) {
    return (
        <div >
            <div
                onClick={() => onClick(experience)}
                className="hover:scale-125 hover:rounded-lg  hover:border-radius-2 hover:border-2 flex flex-col items-center  justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all "
            >
                <img
                    src={`/experiences/${experience.title}.png`}
                    alt={experience.title}
                    className='rounded-lg   text-primary dark:text-white  text-primary:dark:text-white/50 w-full h-full  hover:border-gray-300 '
                />
                <div className='w-full'>
                <hr className="w-full h-1 bg-white/10 dark:bg-white/10" />
                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl ">
                    {experience.title}
                </p>
                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
                    {experience.date}
                </p>

                </div>


            </div>
        </div>
    )
}
