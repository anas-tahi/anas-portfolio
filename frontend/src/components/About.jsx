import useReveal from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";
import { FaCode, FaMobile, FaDatabase, FaGraduationCap } from "react-icons/fa";
import "./../styles/About.css";

export default function About({ content }) {
  const revealRef = useReveal();
  const { t } = useLanguage();

  const cards = [
    { icon: <FaCode />, label: t('fullStack'), value: "React · Node.js · Java" },
    { icon: <FaMobile />, label: t('mobile'), value: "React Native · Expo" },
    { icon: <FaDatabase />, label: t('backend'), value: "MongoDB · Spring Boot" },
    { icon: <FaGraduationCap />, label: t('education'), value: "M.Sc. CS @ UGR Granada" },
  ];

  return (
    <section id="about" ref={revealRef} className="about">
      <div className="section-label">{t('aboutLabel')}</div>
      <h2 className="section-title">{t('aboutTitle')}</h2>
      <div className="section-divider"></div>
      <p className="about-text">{content.profile.about}</p>
      <div className="about-cards">
        {cards.map((c, i) => (
          <div className="about-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="about-card-icon">{c.icon}</div>
            <div>
              <div className="about-card-label">{c.label}</div>
              <div className="about-card-value">{c.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
