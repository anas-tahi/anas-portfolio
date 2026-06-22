import About from '../components/About';
import '../styles/AboutPage.css';

export default function AboutPage({ content }) {
  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>About Me</h1>
        <p>Discover my journey, skills, and passion for creating exceptional digital experiences</p>
      </div>
      <About content={content} />
    </div>
  );
}
