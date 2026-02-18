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
            <img
              src={p.img || "/placeholder.png"}
              alt="project preview"
              className="project-img"
            />
            <h3>{p.title}</h3>
            <p className="tech">{p.tech}</p>
            <p>{p.desc}</p>
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
