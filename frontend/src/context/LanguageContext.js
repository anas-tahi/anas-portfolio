import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    hi: "Hi, I'm",
    available: "Available for Work",
    viewCV: "View CV",
    hireMe: "Get in Touch",
    projects: "Projects",
    years: "Years Exp.",
    techStack: "Tech Stack",
    aboutLabel: "About",
    aboutTitle: "Who I Am",
    aboutExtra: "Currently pursuing my M.Sc. in Computer Science at the University of Granada, Spain.",
    fullStack: "Full Stack",
    mobile: "Mobile Dev",
    backend: "Backend",
    education: "Education",
    skillsLabel: "Skills",
    skillsTitle: "What I Work With",
    skillsSubtitle: "Technologies I use to build products",
    showMore: "Show More",
    showLess: "Show Less",
    projectsLabel: "Work",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Things I've built recently",
    viewDetails: "View Details",
    loadMore: "Load More",
    contactLabel: "Contact",
    contactTitle: "Let's Work Together",
    contactSub: "I'm currently open to new opportunities. Whether you have a project in mind or just want to say hello, feel free to reach out.",
  },
  es: {
    hi: "Hola, soy",
    available: "Disponible para trabajar",
    viewCV: "Ver CV",
    hireMe: "Contáctame",
    projects: "Proyectos",
    years: "Años Exp.",
    techStack: "Tecnologías",
    aboutLabel: "Sobre mí",
    aboutTitle: "Quién Soy",
    aboutExtra: "Actualmente cursando el Máster en Informática en la Universidad de Granada, España.",
    fullStack: "Full Stack",
    mobile: "Dev Móvil",
    backend: "Backend",
    education: "Educación",
    skillsLabel: "Habilidades",
    skillsTitle: "Con Qué Trabajo",
    skillsSubtitle: "Tecnologías que uso para construir productos",
    showMore: "Ver más",
    showLess: "Ver menos",
    projectsLabel: "Trabajo",
    projectsTitle: "Proyectos Destacados",
    projectsSubtitle: "Cosas que he construido recientemente",
    viewDetails: "Ver Detalles",
    loadMore: "Cargar más",
    contactLabel: "Contacto",
    contactTitle: "Trabajemos Juntos",
    contactSub: "Estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente o solo quieres saludar, no dudes en contactarme.",
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = (key) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
