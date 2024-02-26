import React from "react";
import "./card.css"; // Estilos CSS para el componente
import { FaGithub } from "react-icons/fa";
import Container from "react-bootstrap/esm/Container";

const CardComponent = ({
  backgroundImage,
  detailImage,
  title,
  githubLink,
  otherLink,
}) => {
  return (
    <Container className="cardContainer">
      <div className="card">
        <div className="wrapper">
          <img src={backgroundImage} className="cover-image" alt="Background" />
        </div>
        <h2 className="title">{title}</h2>
        <img src={detailImage} className="character" alt="Character" />
      </div>
      <div className="cardBtns">
        <a href={githubLink} target="_blank" className="cardButton">
          <FaGithub title="GitHub" className="btn-icon" />
        </a>
        <a href={otherLink} target="_blank" className="cardButton">
          Visitar
        </a>
      </div>
    </Container>
  );
};

export default CardComponent;
