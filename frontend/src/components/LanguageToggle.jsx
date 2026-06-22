import { useLanguage } from "../context/LanguageContext";
import "./../styles/LanguageToggle.css";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      title="Toggle language"
    >
      {lang === "en" ? "🇪🇸 ES" : "🇬🇧 EN"}
    </button>
  );
}
