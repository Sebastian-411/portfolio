import React, { useState } from "react";
import Modal from "react-modal";
import ExperienceCard from "../card/ExperienceCard";
import { experiences } from "../../../const/experiences";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
};

export default function Carousel() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [experience, setExperience] = useState();

  const openModal = (exp) => {
    setExperience(exp);
    setModalIsOpen(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider
        className="grid mt-4 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-8 justify-center w-full"
        {...settings}
      >
        {experiences.map((experience, index) => {
          return (
            <div>
              <p>{index}</p>
              <ExperienceCard onClick={openModal} experience={experience} />
            </div>
          );
        })}
      </Slider>

      {experience ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setExperience();
            setModalIsOpen(false);
          }}
        >
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
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
