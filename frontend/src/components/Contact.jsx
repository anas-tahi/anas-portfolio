import useReveal from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import "./../styles/Contact.css";

export default function Contact({ content }) {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const links = content.profile.links;

  const contacts = [
    { icon: <FaEnvelope />, label: "Email", value: links.email, href: `mailto:${links.email}` },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Connect on LinkedIn", href: links.linkedin },
    { icon: <FaGithub />, label: "GitHub", value: "View my repositories", href: links.github },
  ];

  return (
    <section id="contact" ref={revealRef} className="contact">
      <div className="contact-label">{t('contactLabel')}</div>
      <h2 className="contact-title">{t('contactTitle')}</h2>
      <p className="contact-sub">{t('contactSub')}</p>

      <div className="contact-links">
        {contacts.map((c, i) => (
          <a key={i} href={c.href} target={c.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer"
            className="contact-link" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="contact-link-icon">{c.icon}</div>
            <div>
              <div className="contact-link-label">{c.label}</div>
              <div className="contact-link-value">{c.value}</div>
            </div>
            <FaArrowRight className="contact-link-arrow" />
          </a>
        ))}
      </div>

      <div className="contact-footer">
        <p>© {new Date().getFullYear()} <strong>{content.profile.name}</strong> — Built with React & Node.js</p>
      </div>
    </section>
  );
}
