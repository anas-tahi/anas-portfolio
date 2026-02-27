import { useState, useEffect } from "react";
import "./../styles/Navbar.css";

export default function Navbar({ content, onAdminClick, onLogout, navigateToPage, currentPage }) {
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
        <button onClick={() => navigateToPage(0)} className="logo-link">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </button>

        {/* Clickable name from backend */}
        <button onClick={() => navigateToPage(0)} className="logo-text-link">
          <span className="logo-text">Anas Tahir</span>
        </button>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><button onClick={() => navigateToPage(1)} className={currentPage === 1 ? "active" : ""}>About</button></li>
        <li><button onClick={() => navigateToPage(2)} className={currentPage === 2 ? "active" : ""}>Skills</button></li>
        <li><button onClick={() => navigateToPage(3)} className={currentPage === 3 ? "active" : ""}>Projects</button></li>
        <li><button onClick={() => navigateToPage(4)} className={currentPage === 4 ? "active" : ""}>Contact</button></li>
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
