import useReveal from "../hooks/useReveal";
import "./../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaRocket } from "react-icons/fa";

export default function Contact({ content }) {
  const revealRef = useReveal();

  const links = content.profile.links;

  return (
    <section id="contact" ref={revealRef} className="contact reveal">
      <div className="contact-header">
        <h2>Let's Create Something Extraordinary</h2>
        <p className="contact-subtitle">Transform your vision into reality with cutting-edge solutions and innovative development</p>
        <div className="contact-badge">
          <FaRocket className="rocket-icon" />
          <span>Open to Exciting Opportunities</span>
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <p className="contact-value">{links.email}</p>
            <p className="contact-label">Get in touch for collaborations</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <div className="contact-details">
            <h3>LinkedIn</h3>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Professional Network
            </a>
            <p className="contact-label">Connect for opportunities</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FaGithub />
          </div>
          <div className="contact-details">
            <h3>GitHub</h3>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              View My Work
            </a>
            <p className="contact-label">Explore open source projects</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-details">
            <h3>Location</h3>
            <p className="contact-value">Available Worldwide</p>
            <p className="contact-label">Remote & On-site</p>
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <h3>Ready to Build the Future Together?</h3>
        <p>Let's collaborate on innovative solutions that push boundaries and exceed expectations</p>
        <button className="cta-button">
          <FaEnvelope className="button-icon" />
          Start the Conversation
        </button>
      </div>
    </section>
  );
}
