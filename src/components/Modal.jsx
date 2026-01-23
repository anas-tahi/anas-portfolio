import "./../styles/Modal.css";

export default function Modal({ open, onClose, project }) {
  if (!open || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p className="tech">{project.tech}</p>
        <p>{project.desc}</p>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
