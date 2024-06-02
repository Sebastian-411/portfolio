// src/components/LanguageSelector.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FlagIcon } from "react-flag-kit";


const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-3 sm:px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TfiWorld size={19} className="mr-3" />
          Idioma
          <MdKeyboardArrowDown className="-mr-1 ml-2 h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="w-full">
            <button
              className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              onClick={() => changeLanguage('en')}
            >
              <FlagIcon code="US" size={20} className='mr-2' />
              <span className='mr-5 lg:mr-12 md:mr-16'>English</span>
            </button>
            <button
              className="flex items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              onClick={() => changeLanguage('es')}
            >
              <FlagIcon code="ES" size={20} className='mr-2' />
              <span>Español</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
