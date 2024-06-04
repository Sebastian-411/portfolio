import React from 'react'

export default function ExperienceCard({ onClick, experience }) {
    return (
        <div>
            <div
                onClick={() => onClick(experience)}
                className="flex items-center  justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all "
            >
                <img src={`/experiences/${experience.title}.png`} alt={experience.title} className='group-hover:scale-125 rounded-lg hover:rounded-lg duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 w-full h-full group-hover:border-radius-2 hover:border-gray-300 hover:border-2' />            </div>

        </div>
    )
}
