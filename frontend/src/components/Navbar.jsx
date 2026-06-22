import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import "./../styles/Navbar.css";

export default function Navbar({ content, onAdminClick, onLogout, navigateToPage, currentPage, showAdminButton, isAdmin }) {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <button onClick={() => navigateToPage(0)} className="logo-text-link">
          <span className="logo-text">Anas Tahir</span>
        </button>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><button onClick={() => { navigateToPage(1); setOpen(false); }} className={currentPage === 1 ? "active" : ""}>About</button></li>
        <li><button onClick={() => { navigateToPage(2); setOpen(false); }} className={currentPage === 2 ? "active" : ""}>Skills</button></li>
        <li><button onClick={() => { navigateToPage(3); setOpen(false); }} className={currentPage === 3 ? "active" : ""}>Projects</button></li>
        <li><button onClick={() => { navigateToPage(4); setOpen(false); }} className={currentPage === 4 ? "active" : ""}>Contact</button></li>

        <li className="nav-divider"></li>

        <li>
          <button className="lang-btn" onClick={() => setLang(lang === "en" ? "es" : "en")}>
            {lang === "en" ? "🇪🇸 ES" : "🇬🇧 EN"}
          </button>
        </li>

        <li><ThemeToggle inline /></li>

        {(showAdminButton || isAdmin) && (
          <li className="admin-nav-item">
            {isAdmin ? (
              <button onClick={onLogout} className="admin-logout-btn">Logout</button>
            ) : (
              <button onClick={onAdminClick} className="admin-login-btn">🔐 Admin</button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
