import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import '../styles/Home.css';

export default function Home({ content }) {
  return (
    <div className="home-page">
      <Header content={content} />
      <About content={content} />
      <Skills content={content} />
    </div>
  );
}
