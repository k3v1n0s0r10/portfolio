import { FormEvent } from "react";
import { Refs } from "../../@types/types";

import "./contact.scss";

const Contact = ({ contactRef }: Refs) => {
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
