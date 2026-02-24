import useReveal from "../hooks/useReveal";
import SmallFooter from "./SmallFooter";
import "./../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaRocket } from "react-icons/fa";

export default function Contact({ content }) {
  const revealRef = useReveal();

  const links = content.profile.links;

  return (
    <section id="contact" ref={revealRef} className="contact reveal">
      <div className="contact-header">
        <h2>Let's Connect</h2>
        <p className="contact-subtitle">Ready to bring your ideas to life? Let's build something amazing together!</p>
        <div className="contact-badge">
          <FaRocket className="rocket-icon" />
          <span>Available for Projects</span>
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
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how I can help bring your vision to reality</p>
          <button className="cta-button">
            <FaEnvelope className="button-icon" />
            Send Message
          </button>
        </div>
      </div>
      
      <SmallFooter />
    </section>
  );
}
