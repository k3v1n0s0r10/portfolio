import { createContext, useRef } from "react";

const ReferencesContext = createContext<any>(null);

const ReferencesProvider: React.FC = ({ children }) => {
  const worksRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ReferencesContext.Provider value={{ worksRef, projectsRef, contactRef }}>
      {children}
    </ReferencesContext.Provider>
  );
};

export { ReferencesProvider, ReferencesContext };
