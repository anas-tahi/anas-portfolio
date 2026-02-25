import { useState } from "react";
import useReveal from "../hooks/useReveal";
import Modal from "./Modal";
import "./../styles/Projects.css";

// Get API URL for image paths
const getApiUrl = () => {
  return process.env.NODE_ENV === "production" 
    ? "https://anas-portfolio-jje3.onrender.com" 
    : "http://localhost:4000";
};

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
    <section className="skills-section" id="projects">
      <h2 className="skills-title">Projects</h2>

      <div className="skills-grid">
        {visibleProjects.map((p, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-header">
              <span className="skill-icon">{/* icon removed for now */}</span>
              <span className="skill-name">{p.title}</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `85%` }}
              ></div>
            </div>

            <span className="skill-level">85%</span>
          </div>
        ))}
      </div>

      <div className="show-more-container">
        <button
          className="show-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
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
