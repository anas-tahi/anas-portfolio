import "./../styles/Modal.css";

export default function Modal({ open, onClose, project }) {
  if (!open || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Project Image */}
        {project.img && (
          <img
            src={project.img}
            alt="project preview"
            className="modal-img"
          />
        )}

        <h2>{project.title}</h2>
        <p className="tech">{project.tech}</p>
        <p>{project.desc}</p>

        {/* Project Links */}
        <div className="modal-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn"
            >
              View Project
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn github"
            >
              GitHub Repo
            </a>
          )}
        </div>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
