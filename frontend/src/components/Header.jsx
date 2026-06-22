import { FaFilePdf, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import "./../styles/Header.css";

export default function Header({ content, navigateToPage }) {
  const profile = content.profile;
  const { t } = useLanguage();

  return (
    <div className="header">
      <div className="header-tag">
        <span className="header-tag-dot"></span>
        {t('available')}
      </div>

      <h1 className="header-name">
        {t('hi')} <span>{profile.name}</span>
      </h1>

      <div className="header-title">
        {profile.title}<span className="cursor"></span>
      </div>

      <p className="header-bio">{profile.about}</p>

      <div className="header-stats">
        <div className="stat-item">
          <div className="stat-number">3+</div>
          <div className="stat-label">{t('projects')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2+</div>
          <div className="stat-label">{t('years')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">{t('techStack')}</div>
        </div>
      </div>

      <div className="header-actions">
        <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <FaFilePdf /> {t('viewCV')}
        </a>
        <button onClick={() => navigateToPage(4)} className="btn-secondary">
          {t('hireMe')} →
        </button>
      </div>
    </div>
  );
}
