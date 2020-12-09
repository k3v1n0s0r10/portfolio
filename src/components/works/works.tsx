import React from "react";
import { Refs } from "../../@types/types";

import MasceImg from "../../assets/img/masce.png";
import ReservawebImg from "../../assets/img/reservaweb.png";

import "./works.scss";

const Works = ({ worksRef }: Refs) => {
  return (
    <section ref={worksRef} className="works-section">
      <h2>My Works</h2>

      <div className="works-container">
        {/* Reserva Web */}
        <div className="work-item">
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
            >
              ver
            </a>
          </div>
        </div>
        {/* End Reserva Web */}
        {/* Masce Web */}
        <div className="work-item">
          <div className="img-container">
            <img src={MasceImg} alt="screenshot app mascentigrados" />
          </div>
          <div className="work-info">
            <h3>Más Centígrados</h3>
            <div className="technologies">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
            </div>
            <a
              href="https://mascentigrados.netlify.app"
              rel="nopeener noreferrer"
              target="_blank"
            >
              ver
            </a>
          </div>
        </div>
        {/* End Masce Web */}
      </div>
    </section>
  );
};

export default Works;
