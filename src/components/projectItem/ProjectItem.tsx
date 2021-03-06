import { useContext } from "react";
import { ProjectItemInterface } from "../../@types/types";
import { ProjectModalContext } from "../../context/projectModal";
import RevealDiv from "../RevealDiv";

import "./ProjectItem.scss";

const ProjectItem: React.FC<{ idx: number; project: ProjectItemInterface }> = ({
  project,
  idx,
}) => {
  const { setModalData } = useContext(ProjectModalContext);
  const { name, img, description } = project;

  return (
    <RevealDiv
      animation={idx % 2 === 0 ? "fade-left" : "fade-right"}
      delay={String(idx * 200)}
      className="project-item"
    >
      <img src={img} alt={name} />
      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={() => setModalData(project)} className="bounce-btn">
          See more
        </button>
      </div>
    </RevealDiv>
  );
};

export default ProjectItem;
