import React from "react";
import { Refs } from "../../@types/types";

import "./header.scss";

const Header = ({ worksRef, projectsRef, contactRef }: Refs) => {
  const handleClickScroll = (section: any) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div>
        <nav>
          <p onClick={() => handleClickScroll(worksRef)}>Works</p>
          <p onClick={() => handleClickScroll(projectsRef)}>Projects</p>
          <p onClick={() => handleClickScroll(contactRef)}>Contact</p>
        </nav>
        <h1>
          Kevin Osorio <br />
          <span>Developer</span>
        </h1>

        <a
          href="https://github.com/k3v1n0s0r10"
          rel="nopeener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
