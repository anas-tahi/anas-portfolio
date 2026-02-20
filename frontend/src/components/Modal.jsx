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
      <div className="modal-content professional-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>×</button>
        
        {/* Project Header */}
        <div className="modal-header">
          {(project.img || project.image) && (
            <div className="modal-image-container">
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
                  e.target.src = "/placeholder1.png";
                }}
              />
            </div>
          )}
          
          <div className="modal-title-section">
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-tech-stack">
              {(project.technologies || project.tech?.split(',')).map((tech, index) => (
                <span key={index} className="tech-badge">{tech.trim()}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="modal-body">
          <div className="modal-description">
            <h3>Project Overview</h3>
            <p>{project.description || project.desc}</p>
          </div>

          {/* Project Features */}
          <div className="modal-features">
            <h3>Key Features</h3>
            <ul>
              <li>Modern, responsive design</li>
              <li>Professional user interface</li>
              <li>Optimized performance</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </div>
        </div>

        {/* Project Links */}
        <div className="modal-footer">
          <div className="modal-links">
            {(project.demoUrl || project.link) && (
              <a
                href={project.demoUrl || project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn primary-btn"
              >
                🚀 Live Demo
              </a>
            )}

            {(project.githubUrl || project.github) && (
              <a
                href={project.githubUrl || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn secondary-btn"
              >
                📁 View Code
              </a>
            )}
          </div>

          <div className="modal-info">
            <p className="project-status">✅ Project Completed</p>
            <p className="project-date">📅 {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
