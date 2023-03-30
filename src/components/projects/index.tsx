import React, { useContext } from "react";
import Image from "next/image";

import ProjectModal from "../projectModal";
import { ProjectsData } from "@/data/projects";
import { ProjectModalContext } from "@/context/modal";

import styles from "./index.module.scss";

const Projects: React.FC = () => {
  const { modalData, setModalData } = useContext(ProjectModalContext);

  return (
    <>
      {modalData && <ProjectModal modalData={modalData} />}
      <section id="projects-section" className={styles.projectsSection}>
        <div className={styles.cover}>
          <h2>My Projects</h2>
          <div className={styles.projectsContainer}>
            {ProjectsData.map((project) => (
              // ************
              // Project Item

              <div key={project.name} className={styles.projectItem}>
                <Image src={project.img} alt={project.name} />
                <div className={styles.projectInfo}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <button
                    onClick={() => setModalData(project)}
                    className="bounceBtn"
                  >
                    See more
                  </button>
                </div>
              </div>

              // End Project Item
              // ****************
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
