import { useState } from "react";
import Modal from "./Modal";
import useReveal from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import getApiUrl from "../utils/apiUrl";
import "./../styles/Projects.css";

export default function Projects({ content }) {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const projects = content.projects;
  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="projects" ref={revealRef} className="projects">
      <div className="projects-label">{t('projectsLabel')}</div>
      <div className="projects-header">
        <h2>{t('projectsTitle')}</h2>
        <p className="projects-subtitle">{t('projectsSubtitle')}</p>
      </div>

      <div className="projects-grid">
        {visibleProjects.map((p, i) => (
          <div className="project-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="project-img-wrapper">
              <img
                src={p.image?.startsWith('/uploads/') ? getApiUrl() + p.image : p.image || "/placeholder1.png"}
                alt={p.title} className="project-img"
                onError={(e) => { e.target.src = "/placeholder1.png"; }}
              />
              <div className="project-overlay">
                <button onClick={() => { setSelectedProject(p); setOpenModal(true); }} className="overlay-btn">
                  {t('viewDetails')}
                </button>
              </div>
            </div>
            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {(p.technologies || []).map((tech, idx) => <span key={idx} className="tech-tag">{tech}</span>)}
              </div>
              <div className="project-actions">
                {p.githubUrl && p.githubUrl !== "#" && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-btn github-btn">
                    <FaGithub /> Code
                  </a>
                )}
                {p.demoUrl && p.demoUrl !== "#" && (
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="proj-btn demo-btn">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="show-more-section">
          <button className="show-more-button" onClick={() => setShowMore(!showMore)}>
            {showMore ? t('showLess') : t('loadMore')}
          </button>
        </div>
      )}

      <Modal open={openModal} onClose={() => setOpenModal(false)} project={selectedProject} />
    </section>
  );
}
