import "./../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="mailto:anasstahir4@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/anas-tahir-59540b294/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/anas-tahi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a href="/cv.pdf" download>
          <FaFilePdf />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Anas Tahir — All rights reserved.</p>
    </footer>
  );
}
