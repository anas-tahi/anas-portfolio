import { useState } from "react";
import useReveal from "../hooks/useReveal";
import Modal from "./Modal";
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

  return (
    <section id="projects" ref={revealRef} className="projects reveal">
      <h2>Projects</h2>

      <div className="project-list">
        {visibleProjects.map((p, i) => (
          <div
            className="project-card"
            key={i}
            onClick={() => {
              setSelectedProject(p);
              setOpenModal(true);
            }}
          >
            <div className="project-image-container">
              <img
                src={p.image || p.img || "/placeholder1.png"}
                alt="project preview"
                className="project-img"
              />
              <div className="project-overlay">
                <span className="view-project">View Details</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <div className="tech-tags">
                {(p.technologies || p.tech?.split(',')).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech.trim()}</span>
                ))}
              </div>
              <p className="project-description">{p.description || p.desc}</p>
              <div className="project-links">
                {p.demoUrl && p.demoUrl !== "#" && (
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                    Live Demo
                  </a>
                )}
                {p.githubUrl && p.githubUrl !== "#" && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    GitHub
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
          {showMore ? "Show Less" : "..."}
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
