import React, { useState, useEffect } from "react";
import SkillSection from "./SkillSection";
import { skillsSection } from "../../../const/skillsSection";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsSection.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsSection.length);
  };

  const back = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + skillsSection.length) % skillsSection.length
    );
  };

  const currentSection = skillsSection[currentIndex];

  return (
    <div>
      <SkillSection scope={currentSection} back={back} next={next} />
    </div>
  );
}
