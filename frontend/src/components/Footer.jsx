import "./../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer({ content }) {
  const links = content.profile.links;
  const name = content.profile.name;

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Let's Connect</h2>
        <p className="footer-description">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello!
        </p>
        
        <div className="social-section">
          <h3 className="social-title">Connect With Me</h3>
          <div className="social-icons">
            {/* Email */}
            <a href={`mailto:${links.email}`} title="Email">
              <FaEnvelope />
            </a>

            {/* LinkedIn */}
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {name}</p>
          <p>Made with <FaHeart className="footer-heart" /> and passion</p>
        </div>
      </div>
    </footer>
  );
}
