import React from "react";
import Link from "next/link";
import Image from "next/image";

import ReservawebImg from "../../assets/img/reservaweb.png";
import ReactLogo from "../../assets/img/logo-react.png";
import FirebaseLogo from "../../assets/img/logo-firebase.png";

import styles from "./index.module.scss";

const Works: React.FC = () => {
  return (
    <section id="works-section" className={styles.worksSection}>
      <div>
        <h2>My Work</h2>
      </div>

      <div className={styles.worksContainer}>
        {/* Reserva Web */}
        <div className={styles.workItem}>
          <div className={styles.imgContainer}>
            <Image src={ReservawebImg} alt="screenshot app reservaweb" />
          </div>
          <div className={styles.workInfo}>
            <h3>ReservaWeb</h3>
            <div className={styles.technologies}>
              <Image src={ReactLogo} alt="react logo" />
              <Image src={FirebaseLogo} alt="firebase logo" />
            </div>
            <Link
              href="https://competent-nobel-245ca7.netlify.app"
              rel="nopeener noreferrer"
              target="_blank"
              className="bounceBtn"
            >
              See
            </Link>
          </div>
        </div>
        {/* End Reserva Web */}
      </div>
    </section>
  );
};

export default Works;
