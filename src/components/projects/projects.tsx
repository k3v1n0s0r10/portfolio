import React, { useState } from "react";
import { Refs } from "../../@types/types";
import ProjectModal from "../projectModal/projectModal";

import "./projects.scss";

const Projects = ({ projectsRef }: Refs) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section ref={projectsRef} className="projects-section">
      <div className="cover">
        {showModal && <ProjectModal setShowModal={setShowModal} />}

        <h2>My Projects</h2>
        <div onClick={() => setShowModal(true)} className="projects-container">
          <div className="project-item bounce-btn"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
