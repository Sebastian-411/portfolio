import React, { useState, useEffect } from "react";
import SkillSection from "./SkillSection";
import { skillsSection } from "../../../const/skillsSection";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsSection.length);
      setSeed(Math.random() * 1000);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsSection.length);
    setSeed(Math.random() * 1000);
  };

  const back = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + skillsSection.length) % skillsSection.length
    );

    setSeed(Math.random() * 1000);
  };

  const currentSection = skillsSection[currentIndex];

  const [seed, setSeed] = useState(1);
  return (
    <div>
      <SkillSection key={seed} scope={currentSection} back={back} next={next} />
    </div>
  );
}
