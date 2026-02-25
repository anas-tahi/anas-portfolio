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

      <div className="contact-grid">
        <div className="contact-card primary">
          <div className="card-header">
            <div className="icon-circle">
              <FaEnvelope className="icon" />
            </div>
            <h3>Email</h3>
          </div>
          <div className="card-content">
            <p className="contact-value">{links.email}</p>
            <p className="contact-label">Get in touch for collaborations</p>
          </div>
        </div>

        <div className="contact-card secondary">
          <div className="card-header">
            <div className="icon-circle">
              <FaLinkedin className="icon" />
            </div>
            <h3>LinkedIn</h3>
          </div>
          <div className="card-content">
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

        <div className="contact-card tertiary">
          <div className="card-header">
            <div className="icon-circle">
              <FaGithub className="icon" />
            </div>
            <h3>GitHub</h3>
          </div>
          <div className="card-content">
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

        <div className="contact-card accent">
          <div className="card-header">
            <div className="icon-circle">
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>Location</h3>
          </div>
          <div className="card-content">
            <p className="contact-value">Available Worldwide</p>
            <p className="contact-label">Remote & On-site</p>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="cta-section">
          <h3>Ready to Build the Future Together?</h3>
          <p>Let's collaborate on innovative solutions that push boundaries and exceed expectations</p>
          <button className="cta-button">
            <FaEnvelope className="button-icon" />
            Start the Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
