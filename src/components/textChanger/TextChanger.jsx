import { useEffect, useRef, useState } from "react";
import './TextChanger.css'
import gsap from "gsap";

export default function TextChanger() {
  const textRef = useRef(null);
  const texts = ["BUILD", "MAINTAIN", "OPERATE"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = textRef.current;

    const animateText = () => {
      const text = texts[index];
      el.innerHTML = text
        .split("")
        .map((c) => `<span>${c}</span>`)
        .join("");

      const spans = el.querySelectorAll("span");

      gsap.fromTo(
        spans,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => {
            // wait 1.5s, then change text
            setTimeout(() => {
              setIndex((prev) => (prev + 1) % texts.length);
            }, 1500);
          },
        }
      );
    };

    animateText();
  }, [index]);

  return (
     <div className="text-changer-container">
        <span>WE</span>
        <h1 ref={textRef}></h1>
        <span>{".{AI AGENTS}"}</span>
      </div>
  );
}
