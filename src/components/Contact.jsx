import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const initialForm = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend: replace with your own API call or form service.
    setIsSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          title="Get in touch"
          subtitle="Have a project or role in mind? Send me a message."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I am open to freelance work and full-time roles. I usually reply
              within a couple of days.
            </p>
            <ul className="contact-list">
              <li>
                <FiMail aria-hidden="true" />
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <FiMapPin aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
            <SocialLinks />
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <FiSend aria-hidden="true" /> Send message
            </button>
            <p className="form-status" role="status">
              {isSubmitted &&
                "Thanks! Your message was sent. I will get back to you soon."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
