import React from "react";
import { Refs } from "../../@types/types";

import "./projects.scss";

const Projects = ({ projectsRef }: Refs) => {
  return (
    <section ref={projectsRef} className="projects-section">
      <h2>My Projects</h2>
    </section>
  );
};

export default Projects;
