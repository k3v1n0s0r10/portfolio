import { FormEvent, useContext } from "react";
import emailjs from "emailjs-com";

import { ReferencesContext } from "../../context/references";
import useForm from "../../hooks/useForm";
import CustomInput from "../customInput/CustomInput";

import "./contact.scss";

const Contact: React.FC = () => {
  const { contactRef } = useContext(ReferencesContext);
  const [formData, handleInputChange, clearForm] = useForm({
    userName: "",
    userEmail: "",
    userMsg: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t04vwz8",
        "template_umts6hs",
        formData,
        "user_tmIqCBdON9pvqG8IJgSuU"
      )
      .then(() => {
        alert("Thank you for contact me, i will be in touch soon");
        clearForm();
      })
      .catch(() => {
        alert("i have an error in the contact form, i will fix it soon");
        clearForm();
      });
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
          <textarea
            id="userMsg"
            name="userMsg"
            value={formData.userMsg}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="bounce-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
