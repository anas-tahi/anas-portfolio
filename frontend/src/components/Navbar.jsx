import { useState } from "react";
import "./../styles/Navbar.css";
import logo from "./../assets/logo.png";

export default function Navbar({ content }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />

        {/* Dynamic name from backend */}
        <span className="logo-text">{content.profile.name}</span>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
