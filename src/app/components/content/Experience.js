import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from 'react-modal';
import ExperienceCard from '../card/ExperienceCard';
import { experiences } from '../../../const/experiences';


export default function Experience() {
    const [t] = useTranslation('global');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [experience, setExperience] = useState();
    const openModal = (exp) => {
        setExperience(exp)
        setModalIsOpen(true)
    }

    return (
        <>
            <div className='flex flex-col flex-nowrap items-center justify-evenly h-full'>
                <div>
                <p className="ext-xl  w-full text-left tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                    {t('banner.experience')}
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
                    {t('banner.experience_description')}
                </p>
                </div>
                <div>
                    <div
                        className="grid mt-4  grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-8 justify-center w-full"
                    >
                        {experiences.map((experience) => {
                            return (
                                <ExperienceCard onClick={openModal} experience={experience} />
                            )
                        })}

                        { 
                            experience ?
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={() => {
                                        setExperience()
                                        setModalIsOpen(false)
                                    }}
                                >
                                    <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                                        {experience.title}
                                    </p>
                                    {(experience.projects).map((project) => {
                                        return (
                                            <div>
                                                <p>{project.title}</p>
                                                <p>{project.work}</p>
                                                <p>{project.description}</p>
                                                <p>{project.realized_work}</p>
                                                <p>{project.date}</p>
                                                <p>{project.technologies}</p>
                                                <p>{project.insights}</p>
                                            </div>
                                        )
                                    })}
                                    
                                    <button onClick={() => setModalIsOpen(false)}>close</button>
                                </Modal>
                            
                        : <></> }
                    </div>


                </div>

            </div>

        </>

    )
}

