import { useEffect, useRef, useState } from "react";
import "./projectModal.scss";

const ProjectModal = ({ setShowModal }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={() => {
        setIsOpen(false);
        setTimeout(() => setShowModal(false), 1000);
      }}
      className={`project-modal ${isOpen && "open"}`}
    >
      <div className="modal-container">
        <h2>modal</h2>
      </div>
    </div>
  );
};

export default ProjectModal;
