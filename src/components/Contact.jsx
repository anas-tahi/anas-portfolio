import useReveal from "../hooks/useReveal";
import "./../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const revealRef = useReveal();

  return (
    <section id="contact" ref={revealRef} className="contact reveal">
      <h2>Contact</h2>

      <div className="contact-box">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>anasstahir4@gmail.com</span>
        </div>

        <a
          href="https://www.linkedin.com/in/anas-tahir-59540b294/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin className="icon" />
          <span>LinkedIn Profile</span>
        </a>

        <a
          href="https://github.com/anas-tahi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaGithub className="icon" />
          <span>GitHub Profile</span>
        </a>
      </div>
    </section>
  );
}
