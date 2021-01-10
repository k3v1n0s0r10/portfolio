import { FormEvent, useContext } from "react";
import { ReferencesContext } from "../../context/references";

import "./contact.scss";

const Contact: React.FC = () => {
  const { contactRef } = useContext(ReferencesContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section ref={contactRef} className="contact-section">
      <div>
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre: " />
          <input type="email" placeholder="Correo Electronico: " />
          <textarea placeholder="Dejame un mensaje:" />
          <input type="submit" className="bounce-btn" value="Enviar" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
