import React, { useRef } from "react";

import Header from "./components/header/header";
import Works from "./components/works/works";

import "./App.scss";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  const worksRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header
        worksRef={worksRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Works worksRef={worksRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
