import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { getContent } from "./api";
import "./styles/AdminModal.css";
import "./styles/Colors.css";
import "./styles/Animations.css";
import "./styles/DarkTheme.css";
import "./styles/App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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

  if (loading || !content) return <Loading />;

  return (
    <Router>
      <div className="app">
        <ThemeToggle />
        
        <Navbar 
          content={content} 
          onAdminClick={handleAdminClick}
          onLogout={handleLogout}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home content={content} />} />
            <Route path="/about" element={<AboutPage content={content} />} />
            <Route path="/projects" element={<ProjectsPage content={content} />} />
            <Route path="/contact" element={<ContactPage content={content} />} />
          </Routes>
        </main>
        
        <Footer content={content} />
        
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
      </div>
    </Router>
  );
}
