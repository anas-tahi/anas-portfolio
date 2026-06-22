import "./../styles/CvModal.css";

export default function CvModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>My CV</h2>

        <iframe
          src="/cv.pdf"
          title="CV Preview"
          className="cv-frame"
        ></iframe>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
