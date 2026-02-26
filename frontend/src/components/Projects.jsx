import { useState, useEffect } from "react";
import Modal from "./Modal";
import useReveal from "../hooks/useReveal";
import getApiUrl from "../utils/apiUrl";
import "./../styles/Projects.css";

export default function Projects({ content }) {
  const revealRef = useReveal();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Projects now come from backend
  const projects = content.projects;

  // Show first 3 unless "Show More" is clicked
  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  // Scroll functions
  const scrollUp = () => {
    window.scrollBy({
      top: -300,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects" ref={revealRef} className="projects reveal">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">Explore my latest work and creative solutions</p>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span>←</span>
          <span>Scroll to explore</span>
          <span>→</span>
        </div>
      </div>

      <div className="vertical-scroll-indicator">
        <div className="vertical-scroll-arrow">
          <div className="arrow-up" onClick={scrollUp}>↑</div>
          <div className="scroll-text">Scroll</div>
          <div className="arrow-down" onClick={scrollDown}>↓</div>
        </div>
      </div>

      <div className="projects-showcase">
        {visibleProjects.map((p, i) => (
          <div
            className="project-showcase-item"
            key={i}
            style={{ animationDelay: `${i * 0.2}s` }}
            onClick={() => {
              setSelectedProject(p);
              setOpenModal(true);
            }}
          >
            <div className="project-visual">
              <div className="project-image-wrapper">
                <img
                  src={
                    (p.image && p.image.startsWith('/uploads/')) 
                      ? getApiUrl() + p.image 
                      : (p.img && p.img.startsWith('/uploads/'))
                      ? getApiUrl() + p.img
                      : p.image || p.img || "/placeholder1.png"
                  }
                  alt={p.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = "/placeholder1.png";
                  }}
                />
                <div className="project-glow"></div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <div className="project-icon">🚀</div>
                    <span className="view-text">Explore Project</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <div className="project-number">Project {i + 1}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description || p.desc}</p>
              
              <div className="tech-stack">
                {(p.technologies || p.tech?.split(',')).map((tech, index) => (
                  <span key={index} className="tech-item">{tech.trim()}</span>
                ))}
              </div>
              
              <div className="project-actions">
                {p.demoUrl && p.demoUrl !== "#" && (
                  <a 
                    href={p.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-btn primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>🌐</span>
                    Live Demo
                  </a>
                )}
                {p.githubUrl && p.githubUrl !== "#" && (
                  <a 
                    href={p.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-btn secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>💻</span>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-container">
        <button
          className="show-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less Projects" : "Discover More Projects"}
        </button>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        project={selectedProject}
      />
    </section>
  );
}
