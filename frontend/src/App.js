import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import AdminModal from "./components/AdminModal";
import AdminDashboardModal from "./components/AdminDashboardModal";


import { LanguageProvider } from "./context/LanguageContext";
import { getContent } from "./api";
import "./styles/AdminModal.css";
import "./styles/Colors.css";
import "./styles/Animations.css";
import "./styles/DarkTheme.css";
import "./styles/Portfolio.css";

function AppInner() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showClickHint, setShowClickHint] = useState(false);
  const clickTimer = useRef(null);

  useEffect(() => {
    async function load() {
      const data = await getContent();
      setContent(data);
      setLoading(false);
    }
    load();
    setIsAdmin(!!localStorage.getItem("adminToken"));
  }, []);

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (clickTimer.current) clearTimeout(clickTimer.current);
    if (newCount === 2) setShowClickHint(true);
    if (newCount >= 3) {
      setShowAdminButton(true);
      setShowClickHint(false);
      setClickCount(0);
    } else {
      clickTimer.current = setTimeout(() => {
        setClickCount(0);
        setShowClickHint(false);
      }, 1500);
    }
  };

  const handleAdminClick = () => {
    if (isAdmin) setShowDashboardModal(true);
    else setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setShowDashboardModal(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setShowAdminButton(false);
    localStorage.removeItem("adminToken");
  };

  const navigateToPage = (pageIndex) => setCurrentPage(pageIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentPage > 0) navigateToPage(currentPage - 1);
      else if (e.key === 'ArrowRight' && currentPage < 4) navigateToPage(currentPage + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  if (loading || !content) return <Loading />;

  return (
    <>
      
      

      {/* Secret triple-click zone */}
      <div
        onClick={handleSecretClick}
        style={{ position:'fixed', top:0, left:0, width:'160px', height:'64px', zIndex:2000, cursor:'default' }}
      />

      {showClickHint && (
        <div style={{
          position:'fixed', top:'70px', left:'20px',
          background:'var(--accent-light)', border:'1px solid var(--accent)',
          borderRadius:'6px', padding:'6px 12px', fontSize:'12px',
          color:'var(--accent)', zIndex:2000,
        }}>
          🔐 One more click...
        </div>
      )}

      <Navbar
        content={content} onAdminClick={handleAdminClick} onLogout={handleLogout}
        navigateToPage={navigateToPage} currentPage={currentPage}
        showAdminButton={showAdminButton} isAdmin={isAdmin}
      />

      <div className="portfolio-container" style={{ transform:`translateX(-${currentPage * 100}vw)` }}>
        <section className="portfolio-section"><Header content={content} navigateToPage={navigateToPage} /></section>
        <section className="portfolio-section"><About content={content} /></section>
        <section className="portfolio-section"><Skills content={content} /></section>
        <section className="portfolio-section"><Projects content={content} /></section>
        <section className="portfolio-section"><Contact content={content} /></section>
      </div>

      <div className="nav-indicators">
        {[0,1,2,3,4].map((i) => (
          <div key={i} className={`nav-dot ${currentPage === i ? 'active' : ''}`} onClick={() => navigateToPage(i)} />
        ))}
      </div>

      <div className="keyboard-hint">Use <kbd>←</kbd> <kbd>→</kbd> to navigate</div>

      <AdminModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} onLoginSuccess={handleLoginSuccess} />
      <AdminDashboardModal isOpen={showDashboardModal} onClose={() => setShowDashboardModal(false)} onLogout={handleLogout} />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
