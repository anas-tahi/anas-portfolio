import "./../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer({ content }) {
  const links = content.profile.links;
  const name = content.profile.name;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="impressive-section">
          <h3 className="impressive-title">Building Tomorrow's Digital Solutions</h3>
          <p className="impressive-subtitle">Transforming Ideas Into Reality</p>
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
