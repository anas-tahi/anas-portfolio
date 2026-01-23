import "./../styles/Skills.css"; 
import { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3, SiVercel, SiRender } from "react-icons/si";

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { name: "HTML & CSS", level: 100, icon: <SiHtml5 /> },
    { name: "JavaScript", level: 80, icon: <SiJavascript /> },
    { name: "React", level: 80, icon: <FaReact /> },
    { name: "Node.js", level: 70, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 70, icon: <SiMongodb /> },
    { name: "SQL", level: 60, icon: <FaDatabase /> },

    // Hidden until "..."
    { name: "Render", level: 70, icon: <SiRender /> },
    { name: "Vercel", level: 70, icon: <SiVercel /> },
    { name: "Figma", level: 70, icon: <FaFigma /> },
    { name: "Git & GitHub", level: 70, icon: <FaGitAlt /> },
  ];

  const visibleSkills = showMore ? skills : skills.slice(0, 6);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
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

      {/* Show More Button */}
      <div className="show-more-container">
        <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "..."}
        </button>
      </div>
    </section>
  );
}
