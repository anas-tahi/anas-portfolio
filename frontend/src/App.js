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
    <>
      <Navbar 
        content={content} 
        onAdminClick={handleAdminClick}
        onLogout={handleLogout}
      />
      <Header content={content} />
      <About content={content} />
      <Skills content={content} />
      <Projects content={content} />
      <Contact content={content} />
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
    </>
  );
}
