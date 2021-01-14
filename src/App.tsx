import { useEffect } from "react";
import Aos from "aos";

import { ReferencesProvider } from "./context/references";

import Header from "./components/header/header";
import Works from "./components/works/works";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

import { ProjectModalProvider } from "./context/projectModal";

import "aos/dist/aos.css";
import "./App.scss";

function App() {
  useEffect(() => {
    //initialize animation on scroll
    //the reveal animation works with data-aos in html tags
    Aos.init({});
  }, []);

  return (
    <div className="App">
      <ReferencesProvider>
        <ProjectModalProvider>
          <Header />
          <Works />
          <Projects />
          <Contact />
        </ProjectModalProvider>
      </ReferencesProvider>
    </div>
  );
}

export default App;
