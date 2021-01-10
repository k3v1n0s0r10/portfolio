import { useContext } from "react";

import { ReferencesContext } from "../../context/references";
import RevealDiv from "../RevealDiv";

import "./header.scss";

const Header: React.FC = () => {
  const { contactRef, worksRef, projectsRef } = useContext(ReferencesContext);

  const handleClickScroll = (section: any) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="header-container">
        <RevealDiv animation="fade-down" delay="300" className="nav">
          <p className="bounce-btn" onClick={() => handleClickScroll(worksRef)}>
            Work
          </p>
          <p
            className="bounce-btn"
            onClick={() => handleClickScroll(projectsRef)}
          >
            Projects
          </p>
          <p
            className="bounce-btn"
            onClick={() => handleClickScroll(contactRef)}
          >
            Contact
          </p>
        </RevealDiv>
        <RevealDiv animation="flip-up" delay="600" className="title-container">
          <h1>Kevin Osorio</h1>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <span>Developer</span>
        </RevealDiv>

        <RevealDiv
          className="header-footer"
          animation="fade-up"
          delay="900"
          offset="-200"
        >
          <a
            href="https://github.com/k3v1n0s0r10"
            rel="nopeener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </RevealDiv>
      </div>
    </header>
  );
};

export default Header;
