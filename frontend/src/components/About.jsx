import useReveal from "../hooks/useReveal";
import "./../styles/About.css";

export default function About({ content }) {
  const revealRef = useReveal();

  return (
    <section id="about" ref={revealRef} className="about reveal">
      <h2>About Me</h2>
      <p>{content.profile.about}</p>
      
      <div className="quote-container">
        <p className="inspiring-quote">
          "The only way to do great work is to love what you do."
        </p>
        <p className="quote-author">- Steve Jobs</p>
      </div>
    </section>
  );
}
