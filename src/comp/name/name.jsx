import React, { useEffect } from "react";
import "./name.css"; 
const Name = () => {
  useEffect(() => {
    const fadeInLetters = (letters, delay) => {
      letters.forEach((letter) => {
        const fadeInLetter = () => {
          setTimeout(() => {
            letter.style.opacity = "1";
          }, Math.random() * 1000);
        };
        fadeInLetter();
      });
    };

    const neonWords = document.querySelectorAll(".neon");
    neonWords.forEach((word) => {
      const letters = word.querySelectorAll("span");
      fadeInLetters(letters);
    });
  }, []);

  return (
    <div className="name-portfolio">
      <h1 id="text">
        Diego Bordallo <br />
        <br />
        Frontent Developer
      </h1>
    </div>
  );
};

export default Name;
