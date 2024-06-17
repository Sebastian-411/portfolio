import { createContext, useRef } from "react";

export const RefContext = createContext(null);

export const RefProvider = ({ children }) => {
  const refaboutMe = useRef(null);
  const reffindMe = useRef(null);
  const refexperience = useRef(null);
  const refCV = useRef(null);
  const refprojects = useRef(null);
  const refeducation = useRef(null);
  const refcertification = useRef(null);
  const refSkill = useRef(null);

  const scrollable = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      ref.current.focus();
    }
  };

  return (
    <RefContext.Provider
      value={{
        refaboutMe,
        reffindMe,
        refexperience,
        refCV,
        refprojects,
        refeducation,
        refcertification,
        scrollable,
        refSkill,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};
