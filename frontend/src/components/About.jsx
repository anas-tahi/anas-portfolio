import useReveal from "../hooks/useReveal";
import "./../styles/About.css";

export default function About({ content }) {
  const revealRef = useReveal();

  return (
    <section id="about" ref={revealRef} className="about reveal">
      <h2>About Me</h2>
      <p>{content.profile.about}</p>
    </section>
  );
}
