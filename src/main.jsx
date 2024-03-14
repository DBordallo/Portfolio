import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./comp/navbar/navbar.jsx";
import CardComponent from "./comp/card/card.jsx";
import cerberus from "./assets/Cerberus.png";
import cerberus3D from "./assets/3Dcerberus.png";
import AboutMe from "./comp/about/about.jsx";
import Social from "../src/comp/socialMedia/socialMedia.jsx";
import Name from "./comp/name/name.jsx";
import caritas from "./assets/caritas.png";
import caritas3D from "./assets/3Dcaritas.png";
import Profile from "./assets/propfile.jpg";
import Container from "react-bootstrap/esm/Container.js";
import playmontessori from "./assets/playmontessori.png";
import playmontessori3D from "./assets/playmontessori3D.png";
import acercatech from "./assets/acercatech.png";
import acercatech3D from "./assets/acercatech3D.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container id="portfolio">
      <NavBar id='navbar' />
      <div id="name">
        <img className="profileImg" src={Profile} alt="profile" />
        <Name />
      </div>
      <div id="preabout"></div>
      <div id="about">
        <AboutMe />
      </div>
      <h2 className="cardTitleSection">
        Algunos proyectos en los que he participado...
      </h2>

      <div id="card">
        <CardComponent
          backgroundImage={cerberus}
          detailImage={cerberus3D}
          title="Cerberus Guard"
          githubLink="https://github.com/DBordallo/CerberusGuard"
          otherLink="https://cerberus-guard.vercel.app/"
        />

        <CardComponent
          backgroundImage={caritas}
          detailImage={caritas3D}
          title="Talleres Caritas"
          githubLink="https://github.com/DBordallo/Caritas"
          otherLink="https://talleres-caritas.web.app/welcome"
        />

        <CardComponent
          backgroundImage={playmontessori}
          detailImage={playmontessori3D}
          title="E-Commerce"
          githubLink="https://github.com/DBordallo/PlayMontessory-E-Commerce"
          otherLink="https://play-montessory-e-commerce.vercel.app/"
        />

        <CardComponent
          backgroundImage={acercatech}
          detailImage={acercatech3D}
          title="Landing"
          githubLink="https://github.com/DBordallo/Acercatech"
          otherLink="https://dbordallo.github.io/Acercatech/"
        />
      </div>
      <div id="social">
        <Social />
      </div>
    </Container>
  </React.StrictMode>
);
