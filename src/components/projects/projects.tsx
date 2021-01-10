import React, { useContext, useState } from "react";

import { ReferencesContext } from "../../context/references";
import { ProjectsData } from "../../data/projetcs";
import ProjectItem from "../projectItem/ProjectItem";
import ProjectModal from "../projectModal/projectModal";

import "./projects.scss";

const Projects: React.FC = () => {
  const { projectsRef } = useContext(ReferencesContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <section ref={projectsRef} className="projects-section">
      <div className="cover">
        {showModal && <ProjectModal setShowModal={setShowModal} />}

        <h2>My Projects</h2>
        <div className="projects-container">
          {ProjectsData.map((project, idx) => (
            <ProjectItem project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
