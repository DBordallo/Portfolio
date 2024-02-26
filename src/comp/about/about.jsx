import React from "react";
import "./about.css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaFigma,
  FaJira,
} from "react-icons/fa";
import { SiMysql, SiPostman } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="profileContainer"></div>
      <h2>Sobre mí</h2>

      <p>
        ¡Hola a todos! Soy Diego, un programador entusiasta de la fusión entre
        diseño y funcionalidad.
        <br />
        Desde la resolución de problemas hasta la implementación de diseños
        atractivos con CSS y JavaScript, cada proyecto es un desafío emocionante
        que abordo con dedicación y habilidad.
        <br />
        Mi objetivo es desarrollar interfaces que sean intuitivas, visualmente
        atractivas y totalmente funcionales.
        <br />
        ¡Te invito a explorar mi portfolio y descubrir cómo transformo ideas en
        realidad digital! Gracias por acompañarme en este viaje por el mundo del
        desarrollo Frontend.
      </p>
      <h2 className="skillsTitle">Habilidades</h2>

      <div className="skills">
        <FaHtml5 title="HTML5" className="skill-icon" />
        <FaCss3 title="CSS3" className="skill-icon" />
        <FaJs title="JavaScript" className="skill-icon" />
        <FaReact title="React" className="skill-icon" />
        <FaNodeJs title="Node.js" className="skill-icon" />
        <FaBootstrap title="Bootstrap" className="skill-icon" />
        <FaGit title="Git" className="skill-icon" />
        <FaGithub title="GitHub" className="skill-icon" />
        <FaFigma title="Figma" className="skill-icon" />
        <FaJira title="Jira" className="skill-icon" />
        <SiMysql title="MySQL" className="skill-icon" />
        <SiPostman title="Postman" className="skill-icon" />
      </div>
    </div>
  );
};

export default AboutMe;
