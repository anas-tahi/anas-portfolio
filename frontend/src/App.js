import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import AdminModal from "./components/AdminModal";
import AdminDashboardModal from "./components/AdminDashboardModal";
import ThemeToggle from "./components/ThemeToggle";
import { getContent } from "./api";
import "./styles/AdminModal.css";
import "./styles/Colors.css";
import "./styles/Animations.css";
import "./styles/DarkTheme.css";
import "./styles/Portfolio.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function load() {
      const data = await getContent();
      setContent(data);
      setLoading(false);
    }
    load();
    
    // Check admin status
    setIsAdmin(!!localStorage.getItem("adminToken"));
  }, []);

  const handleAdminClick = () => {
    if (isAdmin) {
      setShowDashboardModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setShowDashboardModal(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("adminToken");
  };

  const navigateToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && currentPage > 0) {
      navigateToPage(currentPage - 1);
    } else if (e.key === 'ArrowRight' && currentPage < 4) {
      navigateToPage(currentPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  if (loading || !content) return <Loading />;

  return (
    <>
      <ThemeToggle />
      
      <Navbar 
        content={content} 
        onAdminClick={handleAdminClick}
        onLogout={handleLogout}
        navigateToPage={navigateToPage}
        currentPage={currentPage}
      />
      
      <div 
        className="portfolio-container"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`
        }}
      >
        <section id="header" className="portfolio-section">
          <Header content={content} />
        </section>
        
        <section id="about" className="portfolio-section">
          <About content={content} />
        </section>
        
        <section id="skills" className="portfolio-section">
          <Skills content={content} />
        </section>
        
        <section id="projects" className="portfolio-section">
          <Projects content={content} />
        </section>
        
        <section id="contact" className="portfolio-section">
          <Contact content={content} />
        </section>
      </div>
      
      {/* Navigation Indicators */}
      <div className="nav-indicators">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`nav-dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => navigateToPage(index)}
          />
        ))}
      </div>
      
      {/* Keyboard Navigation Hint */}
      <div className="keyboard-hint">
        Use <kbd>←</kbd> <kbd>→</kbd> to navigate
      </div>
      
      {/* Floating Background Elements */}
      <div className="floating-nav">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <AdminModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      
      <AdminDashboardModal
        isOpen={showDashboardModal}
        onClose={() => setShowDashboardModal(false)}
        onLogout={handleLogout}
      />
    </>
  );
}
