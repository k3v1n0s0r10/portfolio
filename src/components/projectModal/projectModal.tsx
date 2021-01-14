import { useContext } from "react";
import { ProjectItemInterface } from "../../@types/types";
import { ProjectModalContext } from "../../context/projectModal";
import "./projectModal.scss";

const ProjectModal: React.FC<{ modalData: ProjectItemInterface }> = ({
  modalData,
}) => {
  const { setModalData } = useContext(ProjectModalContext);
  const { name, img, description, techs, demo, code } = modalData;

  return (
    <div className="project-modal">
      <div className="modal-container">
        <i className="fas fa-times" onClick={() => setModalData(null)} />

        <img src={img} alt={name} />
        <div className="project-modal-info">
          <h3>{name}</h3>
          <p>{description}</p>

          <div className="techs">
            {techs.map((el, idx) => (
              <img draggable="false" src={el} alt={"tech " + idx + 1} />
            ))}
          </div>

          <div className="buttons ">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="bounce-btn"
            >
              <i className="fas fa-external-link-alt"></i>
              Demo
            </a>
            {code.map(({ name, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="bounce-btn"
              >
                <i className="fas fa-code" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
