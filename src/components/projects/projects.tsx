import React, { useContext, useState } from "react";
import { ProjectModalContext } from "../../context/projectModal";

import { ReferencesContext } from "../../context/references";
import { ProjectsData } from "../../data/projects";
import ProjectItem from "../projectItem/ProjectItem";
import ProjectModal from "../projectModal/projectModal";

import "./projects.scss";

const Projects: React.FC = () => {
  const { projectsRef } = useContext(ReferencesContext);
  const { modalData } = useContext(ProjectModalContext);

  return (
    <>
      {modalData && <ProjectModal modalData={modalData} />}
      <section ref={projectsRef} className="projects-section">
        <div className="cover">
          <h2>My Projects</h2>
          <div className="projects-container">
            {ProjectsData.map((project, idx) => (
              <ProjectItem key={idx} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
