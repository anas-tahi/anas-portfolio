import { FaFilePdf } from "react-icons/fa";
import "./../styles/Header.css";

export default function Header() {
  return (
    <header className="header fade-in">
      <div className="profile-wrapper">
        <img src="/profile.jpeg" alt="Anas Tahir" className="profile-photo" />
      </div>

      <h1 className="title">Anas Tahir</h1>
      <p className="subtitle">
        Frontend Developer • Full‑Stack Projects • Master’s Student
      </p>

      <div className="header-links">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="header-btn cv"
        >
          <FaFilePdf className="icon" />
          Preview CV
        </a>

        <a href="/cv.pdf" download className="header-btn cv">
          <FaFilePdf className="icon" />
          Download CV
        </a>

        <a href="#contact" className="header-btn hire">
          Hire Me
        </a>
      </div>
    </header>
  );
}
