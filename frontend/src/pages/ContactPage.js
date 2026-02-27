import Contact from '../components/Contact';
import '../styles/ContactPage.css';

export default function ContactPage({ content }) {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>Get In Touch</h1>
        <p>Let's connect and discuss how we can create something amazing together</p>
      </div>
      <Contact content={content} />
    </div>
  );
}
