import React, { useState } from "react";
import Modal from "react-modal";
import { experiences } from "../../../const/experiences";
import ExperienceCard from "../card/ExperienceCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [experience, setExperience] = useState();

  const openModal = (exp) => {
    setExperience(exp);
    setModalIsOpen(true);
  };

  return (
    <>
      <Swiper
        className="w-full p-16"
        spaceBetween={60}
        autoplay={{
          delay: 5000,
        }}
        direction="horizontal"
        pagination={{
          clickable: true,
          dynamicMainBullets: true,
        }}
        slidesPerView={2}
        modules={[Pagination, Navigation, Autoplay]}
        navigation
      >
        {experiences.map((experience, index) => {
          return (
            <SwiperSlide className="p-5">
              <div>
                <ExperienceCard onClick={openModal} experience={experience} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {experience ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setExperience();
            setModalIsOpen(false);
          }}
        >
          <div>
            <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
              {experience.title}
            </p>
            {experience.projects.map((project) => {
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
              );
            })}

            <button onClick={() => setModalIsOpen(false)}>close</button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
