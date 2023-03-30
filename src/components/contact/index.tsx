import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

import useForm from "@/hooks/useForm";
import CustomInput from "../customInput";

import styles from "./index.module.scss";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, handleInputChange, clearForm] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (loading) return;
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_a3owihc",
        "template_t5rp2ng",
        formData,
        "re7iClRNu-fp8HKf-"
      )
      .then(() => {
        alert("Thank you for contact me, i will be in touch soon");
      })
      .catch(() => {
        alert("i have an error in the contact form, i will fix it soon");
      })
      .finally(() => {
        clearForm();
        setLoading(false);
      });
  };

  return (
    <section id="contact-section" className={styles.contactSection}>
      <div className={styles.formContainer}>
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            label="Name: "
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            type="email"
            label="Email:"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="userMsg" className={styles.msgLabel}>
            Leave me a message:
          </label>
          <textarea
            id="userMsg"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button disabled={loading} type="submit" className="bounceBtn">
            {!loading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
