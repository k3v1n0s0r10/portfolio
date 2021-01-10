import { ProjectItemInterface } from "../../@types/types";
import RevealDiv from "../RevealDiv";

const ProjectItem: React.FC<{ idx: number; project: ProjectItemInterface }> = ({
  project,
  idx,
}) => {
  const { name, img, description } = project;

  return (
    <RevealDiv
      animation={idx % 2 === 0 ? "fade-left" : "fade-right"}
      delay={String(idx * 200)}
    >
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>{description}</p>
    </RevealDiv>
  );
};

export default ProjectItem;
