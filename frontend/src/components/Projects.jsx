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

      <div className="projects-list">
        {visibleProjects.map((p, i) => (
          <div
            className="project-item"
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
            onClick={() => {
              setSelectedProject(p);
              setOpenModal(true);
            }}
          >
            <div className="project-content">
              <div className="project-image-container">
                <img
                  src={
                    (p.image && p.image.startsWith('/uploads/')) 
                      ? getApiUrl() + p.image 
                      : (p.img && p.img.startsWith('/uploads/'))
                      ? getApiUrl() + p.img
                      : p.image || p.img || "/placeholder1.png"
                  }
                  alt={p.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.src = "/placeholder1.png";
                  }}
                />
              </div>
              
              <div className="project-details">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.description || p.desc}</p>
                
                <div className="project-tech">
                  {(p.technologies || p.tech?.split(',')).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {p.demoUrl && p.demoUrl !== "#" && (
                    <a 
                      href={p.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link demo-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 Live Demo
                    </a>
                  )}
                  {p.githubUrl && p.githubUrl !== "#" && (
                    <a 
                      href={p.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      💻 Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-section">
        <button
          className="show-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less Projects" : "Load More Projects"}
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
