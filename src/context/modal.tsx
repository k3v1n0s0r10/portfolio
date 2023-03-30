import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ProjectItemInterface } from "../@types/types";

interface Props {
  children: React.ReactNode;
}

interface ProjectModalContextInterface {
  modalData: ProjectItemInterface | null;
  setModalData: Dispatch<SetStateAction<ProjectItemInterface | null>>;
}

const ProjectModalContext = createContext<ProjectModalContextInterface>({
  modalData: null,
  setModalData: () => {},
});

const ProjectModalProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [modalData, setModalData] = useState<ProjectItemInterface | null>(null);
  return (
    <ProjectModalContext.Provider value={{ modalData, setModalData }}>
      {children}
    </ProjectModalContext.Provider>
  );
};

export { ProjectModalContext, ProjectModalProvider };
