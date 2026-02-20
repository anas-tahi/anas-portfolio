import { FaFilePdf } from "react-icons/fa";
import "./../styles/Header.css";

export default function Header({ content }) {
  const profile = content.profile;

  return (
    <header className="header fade-in">
      <div className="profile-wrapper">
        <img
          src={profile.profilePic}
          alt={profile.name}
          className="profile-photo"
        />
      </div>

      <h1 className="title">{profile.name}</h1>

      <p className="subtitle">{profile.title}</p>

      <div className="header-links">
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="header-btn cv"
        >
          <FaFilePdf className="icon" />
          Preview CV
        </a>

        <a href="#contact" className="header-btn hire">
          Hire Me
        </a>
      </div>
    </header>
  );
}
