import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { getContent } from "./api";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getContent();
      setContent(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading || !content) return <Loading />;

  return (
    <>
      <Navbar content={content} />
      <Header content={content} />
      <About content={content} />
      <Skills content={content} />
      <Projects content={content} />
      <Contact content={content} />
      <Footer content={content} />
    </>
  );
}
