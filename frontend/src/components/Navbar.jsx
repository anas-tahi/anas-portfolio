import { useState, useEffect } from "react";
import "./../styles/Navbar.css";

export default function Navbar({ content, onAdminClick, onLogout }) {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = () => {
      setIsAdmin(!!localStorage.getItem("adminToken"));
    };
    
    checkAdmin();
    
    // Listen for storage changes (for logout from other components)
    window.addEventListener('storage', checkAdmin);
    
    return () => {
      window.removeEventListener('storage', checkAdmin);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#header" className="logo-link">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </a>

        {/* Clickable name from backend */}
        <a href="#header" className="logo-text-link">
          <span className="logo-text">Anas Tahir</span>
        </a>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="admin-nav-item">
          {isAdmin ? (
            <button onClick={onLogout} className="admin-logout-btn">
              Logout
            </button>
          ) : (
            <button onClick={onAdminClick} className="admin-login-btn">
              Admin
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
