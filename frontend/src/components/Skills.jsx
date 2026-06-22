import "./../styles/Skills.css";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ICONS = {
  "React": "⚛️", "JavaScript": "🟨", "Node.js": "🟢", "Java / Spring Boot": "☕",
  "React Native": "📱", "MongoDB": "🍃", "HTML / CSS": "🎨", "Python": "🐍",
  "Docker": "🐳", "AI / Gemini API": "🤖"
};

export default function Skills({ content }) {
  const [showMore, setShowMore] = useState(false);
  const { t } = useLanguage();
  const skills = content.skills;
  const visibleSkills = showMore ? skills : skills.slice(0, 6);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-label">{t('skillsLabel')}</div>
      <h2 className="skills-title">{t('skillsTitle')}</h2>
      <p className="skills-subtitle">{t('skillsSubtitle')}</p>

      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.06}s` }}>
            <div className="skill-header">
              <span className="skill-emoji">{ICONS[skill.name] || "💡"}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%`, animationDelay: `${index * 0.08}s` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-container">
        <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? t('showLess') : t('showMore')}
        </button>
      </div>
    </section>
  );
}
