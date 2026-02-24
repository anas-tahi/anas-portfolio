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
import { getContent } from "./api";
import "./styles/AdminModal.css";
import "./styles/Colors.css";
import "./styles/Animations.css";

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
    } else if (e.key === 'ArrowRight' && currentPage < 5) {
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
      <Navbar 
        content={content} 
        onAdminClick={handleAdminClick}
        onLogout={handleLogout}
        navigateToPage={navigateToPage}
        currentPage={currentPage}
      />
      
      <div 
        className="main-container"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`
        }}
      >
        <section id="header" className="horizontal-section">
          <Header content={content} />
        </section>
        
        <section id="about" className="horizontal-section">
          <About content={content} />
        </section>
        
        <section id="skills" className="horizontal-section">
          <Skills content={content} />
        </section>
        
        <section id="projects" className="horizontal-section">
          <Projects content={content} />
        </section>
        
        <section id="contact" className="horizontal-section">
          <Contact content={content} />
        </section>
        
        <section id="footer" className="horizontal-section">
          <Footer content={content} />
        </section>
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
