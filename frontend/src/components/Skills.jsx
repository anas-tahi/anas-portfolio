import "./../styles/Skills.css";
import { useState } from "react";

export default function Skills({ content }) {
  const [showMore, setShowMore] = useState(false);

  // Skills now come from backend
  const skills = content.skills;

  // Show first 6 unless "Show More" is clicked
  const visibleSkills = showMore ? skills : skills.slice(0, 6);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span className="skill-icon">{/* icon removed for now */}</span>
              <span className="skill-name">{skill.name}</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <span className="skill-level">{skill.level}%</span>
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
    </section>
  );
}
