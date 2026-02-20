import "./../styles/Modal.css";

// Get API URL for image paths
const getApiUrl = () => {
  return process.env.NODE_ENV === "production" 
    ? "https://anas-portfolio-jje3.onrender.com" 
    : "http://localhost:4000";
};

export default function Modal({ open, onClose, project }) {
  if (!open || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Project Image */}
        {(project.img || project.image) && (
          <img
            src={
              (project.image && project.image.startsWith('/uploads/')) 
                ? getApiUrl() + project.image 
                : (project.img && project.img.startsWith('/uploads/'))
                ? getApiUrl() + project.img
                : project.image || project.img
            }
            alt="project preview"
            className="modal-img"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
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
