import React, { useContext } from "react";
import LanguageSelector from "./header/LanguajeSelector";
import { RefContext } from "../../context/RefContext";

export default function Header() {
  const {
    scrollable,
    refaboutMe,
    reffindMe,
    refexperience,
    refCV,
    refprojects,
    refeducation,
    refcertification,
    refSkill,
  } = useContext(RefContext);

  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex-grow">
            <LanguageSelector />
          </div>
          <ul className="flex space-x-6 justify-center flex-grow">
            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(refaboutMe);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(reffindMe);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(refexperience);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(refCV);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                CV
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(refprojects);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Project
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(refcertification);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Certification
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(refeducation);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Education
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => {
                  scrollable(refSkill);
                }}
                className="text-gray-700 hover:text-blue-500 font-semibold text-lg border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Skills
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="mt-16">
        <br></br>
      </div>
    </>
  );
}
