import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/Navbar.css";

export default function Navbar({ content, onAdminClick, onLogout }) {
  const location = useLocation();
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
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Link>

        {/* Clickable name from backend */}
        <Link to="/" className="logo-text-link">
          <span className="logo-text">Anas Tahir</span>
        </Link>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
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
