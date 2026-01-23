import useReveal from "../hooks/useReveal";
import "./../styles/About.css";

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" ref={revealRef} className="about reveal">
      <h2>About Me</h2>
      <p>
        I’m a Master’s student in Computer Science at ETSIIT, passionate about
        frontend and full‑stack development. I enjoy building clean interfaces,
        solving real‑world problems, and working with modern web technologies
        like React, Node.js, MongoDB, and cloud deployment platforms.
      </p>
    </section>
  );
}
