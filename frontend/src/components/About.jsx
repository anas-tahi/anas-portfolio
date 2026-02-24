import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import "./../styles/About.css";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "Excellence is never an accident. It is always the result of high intention.",
    author: "Aristotle"
  }
];

export default function About({ content }) {
  const revealRef = useReveal();
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    // Select a random quote on component mount
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <section id="about" ref={revealRef} className="about reveal">
      <h2>About Me</h2>
      <p>{content.profile.about}</p>
      
      <div className="quote-container">
        <p className="inspiring-quote">
          "{currentQuote.text}"
        </p>
        <p className="quote-author">- {currentQuote.author}</p>
      </div>
    </section>
  );
}
