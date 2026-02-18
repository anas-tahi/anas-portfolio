import "./../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Footer({ content }) {
  const links = content.profile.links;
  const cv = content.profile.cv;
  const name = content.profile.name;

  return (
    <footer className="footer">
      <div className="social-icons">

        {/* Email */}
        <a href={`mailto:${links.email}`}>
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* CV Download */}
        <a href={cv} download>
          <FaFilePdf />
        </a>
      </div>

      <p>© {new Date().getFullYear()} {name} — All rights reserved.</p>
    </footer>
  );
}
