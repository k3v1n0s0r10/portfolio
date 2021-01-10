import React, { useContext } from "react";

import ReservawebImg from "../../assets/img/reservaweb.png";
import { ReferencesContext } from "../../context/references";
import RevealDiv from "../RevealDiv";

import "./works.scss";

const Works: React.FC = () => {
  const { worksRef } = useContext(ReferencesContext);

  return (
    <section ref={worksRef} className="works-section">
      <RevealDiv animation="zoom-in" delay="300">
        <h2>My Work</h2>
      </RevealDiv>

      <div className="works-container">
        {/* Reserva Web */}
        <RevealDiv animation="fade-down-left" delay="300" className="work-item">
          <div className="img-container">
            <img src={ReservawebImg} alt="screenshot app reservaweb" />
          </div>
          <div className="work-info">
            <h3>ReservaWeb</h3>
            <div className="technologies">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
            </div>
            <a
              href="https://reservaweb.net"
              rel="nopeener noreferrer"
              target="_blank"
              className="bounce-btn"
            >
              ver
            </a>
          </div>
        </RevealDiv>
        {/* End Reserva Web */}
      </div>
    </section>
  );
};

export default Works;
