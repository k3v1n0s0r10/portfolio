import { FormEvent, useContext } from "react";
import { ReferencesContext } from "../../context/references";
import useForm from "../../hooks/useForm";
import CustomInput from "../customInput/CustomInput";

import "./contact.scss";

const Contact: React.FC = () => {
  const { contactRef } = useContext(ReferencesContext);
  const [formData, handleInputChange] = useForm({
    userName: "",
    userEmail: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section ref={contactRef} className="contact-section">
      <div className="form-container">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            label="Name: "
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            type="email"
            label="Email:"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="userMsg" className="msg-label">
            Leave me a message:
          </label>
          <textarea id="userMsg" />
          <button type="submit" className="bounce-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
