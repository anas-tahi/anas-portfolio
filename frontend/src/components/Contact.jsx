import useReveal from "../hooks/useReveal";
import "./../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact({ content }) {
  const revealRef = useReveal();

  const links = content.profile.links;

  return (
    <section id="contact" ref={revealRef} className="contact reveal">
      <h2>Contact</h2>

      <div className="contact-box">

        {/* Email */}
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>{links.email}</span>
        </div>

        {/* LinkedIn */}
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin className="icon" />
          <span>LinkedIn Profile</span>
        </a>

        {/* GitHub */}
        <a
          href={links.github}
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
