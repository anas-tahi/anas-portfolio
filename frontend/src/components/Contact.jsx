import useReveal from "../hooks/useReveal";
import "./../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaRocket } from "react-icons/fa";

export default function Contact({ content }) {
  const revealRef = useReveal();

  const links = content.profile.links;

  return (
    <section id="contact" ref={revealRef} className="contact reveal">
      <div className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">Let's Create Something Extraordinary</h1>
          <p className="hero-subtitle">Transform your vision into reality with cutting-edge solutions and innovative development</p>
          <div className="hero-badge">
            <FaRocket className="rocket-icon" />
            <span>Open to Exciting Opportunities</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <div className="card-info">
                <h3>Email</h3>
                <p className="card-value">{links.email}</p>
                <p className="card-description">Get in touch for collaborations</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaLinkedin />
              </div>
              <div className="card-info">
                <h3>LinkedIn</h3>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Professional Network
                </a>
                <p className="card-description">Connect for opportunities</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaGithub />
              </div>
              <div className="card-info">
                <h3>GitHub</h3>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  View My Work
                </a>
                <p className="card-description">Explore open source projects</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="card-info">
                <h3>Location</h3>
                <p className="card-value">Available Worldwide</p>
                <p className="card-description">Remote & On-site</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build the Future Together?</h2>
            <p className="cta-description">Let's collaborate on innovative solutions that push boundaries and exceed expectations</p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <FaEnvelope className="button-icon" />
                Start Conversation
              </button>
              <button className="cta-secondary">
                <FaLinkedin className="button-icon" />
                Connect on LinkedIn
              </button>
            </div>
          </div>
          <div className="cta-visual">
            <div className="pulse-dots">
              <div className="dot dot-1"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
