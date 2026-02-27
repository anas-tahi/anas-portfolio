import Projects from '../components/Projects';
import '../styles/ProjectsPage.css';

export default function ProjectsPage({ content }) {
  return (
    <div className="projects-page">
      <div className="page-hero">
        <h1>My Projects</h1>
        <p>Explore my portfolio of innovative solutions and creative development work</p>
      </div>
      <Projects content={content} />
    </div>
  );
}
