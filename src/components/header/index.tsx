import Link from "next/link";

import styles from "./index.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <div className={styles.nav}>
          <Link
            className={styles.bounceBtn}
            href="#works-section"
            scroll={false}
          >
            Work
          </Link>
          <Link
            className={styles.bounceBtn}
            href="#projects-section"
            scroll={false}
          >
            Projects
          </Link>
          <Link
            className={styles.bounceBtn}
            href="#contact-section"
            scroll={false}
          >
            Contact
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <h1>Kevin Osorio</h1>

          <div className={styles.dividerCustom}>
            <div className={styles.dividerCustomLine}></div>
            <div className={styles.dividerCustomIcon}>
              <i className="fas fa-star"></i>
            </div>
            <div className={styles.dividerCustomLine}></div>
          </div>
          <span>Software Engineer</span>
        </div>

        <div className={styles.headerFooter}>
          <Link
            href="https://github.com/k3v1n0s0r10"
            rel="nopeener noreferrer"
            target="_blank"
          >
            <i className={"fab fa-github " + styles.githubIcon}></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
