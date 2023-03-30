import { useContext } from "react";
import { ProjectItemInterface } from "@/@types/types";
import { ProjectModalContext } from "@/context/modal";

import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.scss";

const ProjectModal: React.FC<{ modalData: ProjectItemInterface }> = ({
  modalData,
}) => {
  const { setModalData } = useContext(ProjectModalContext);
  const { name, img, description, techs, demo, code } = modalData;

  return (
    <div className={styles.projectModal}>
      <div className={styles.modalContainer}>
        <i
          className={"fas fa-times " + styles.closeBtn}
          onClick={() => setModalData(null)}
        />

        <Image src={img} alt={name} />
        <div className={styles.projectModalInfo}>
          <h3>{name}</h3>
          <p>{description}</p>

          <div className={styles.techs}>
            {techs.map((el, idx) => (
              <Image
                key={idx}
                draggable="false"
                src={el}
                alt={"tech " + idx + 1}
              />
            ))}
          </div>

          <div className={styles.buttons}>
            <Link
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="bounceBtn"
            >
              <i className="fas fa-external-link-alt"></i>
              Demo
            </Link>
            {code.map(({ name, link }, idx) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer"
                className="bounceBtn"
                key={idx}
              >
                <i className="fas fa-code" />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
