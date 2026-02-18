import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("reveal-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
  }, []);

  return ref;
}
