import { useState } from "react";
import useReveal from "../hooks/useReveal";
import Modal from "./Modal";
import placeholder from "./../assets/placeholder.png";
import placeholder1 from "./../assets/placeholder1.png";
import placeholder2 from "./../assets/placeholder2.png";
import placeholder3 from "./../assets/placeholder3.png";

import "./../styles/Projects.css";

export default function Projects() {
  const revealRef = useReveal();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Supermarket Comparison Website 🛒",
      tech: "React • Node.js • MongoDB • Render",
      desc: "Web app comparing product prices across Spanish supermarkets.",
      img: placeholder
    },
    {
      title: "Car Rental Website 🚗",
      tech: "React • Node.js • MongoDB",
      desc: "Full‑stack platform for managing car rentals.",
      img: placeholder1
    },
    {
      title: "Shopping Cart App 🛍️",
      tech: "Spring Boot • Thymeleaf • H2",
      desc: "Basic e‑commerce shopping cart.",
      img: placeholder2
    },
    {
      title: "Product Catalog Mobile App 📱",
      tech: "React Native • Spring Boot • Google Maps SDK",
      desc: "Mobile app to browse product catalog and view store locations.",
      img: placeholder3
    },
    {
      title: "AI Chat Assistant 🤖",
      tech: "Python • FastAPI • NLP",
      desc: "Conversational assistant with smart intent detection.",
      img: placeholder
    },
    {
      title: "Task Manager Dashboard 📊",
      tech: "React • Supabase",
      desc: "Kanban-style task manager with drag & drop UI.",
      img: placeholder1
    }
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="projects" ref={revealRef} className="projects reveal">
      <h2>Projects</h2>

      <div className="project-list">
        {visibleProjects.map((p, i) => (
          <div
            className="project-card"
            key={i}
            onClick={() => {
              setSelectedProject(p);
              setOpenModal(true);
            }}
          >
            <img src={p.img} alt="project preview" className="project-img" />
            <h3>{p.title}</h3>
            <p className="tech">{p.tech}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="show-more-container">
        <button
          className="show-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "..."}
        </button>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        project={selectedProject}
      />
    </section>
  );
}
