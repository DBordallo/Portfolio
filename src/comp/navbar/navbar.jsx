import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import favicon from "../../assets/favicon.png";
import pdfFile from "./BordalloHompaneraDiegoCV.pdf";
import "./navbar.css";

function NavBar() {
  const handleDownloadCV = () => {
    fetch(pdfFile)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "BordalloHompaneraDiegoCV.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <Navbar fixed="top" expand="lg" className="navbar">
      <Container className="navSection">
        <Navbar.Brand className="navName" href="#home">
          
          <Nav.Link className="navIcon" href="#portfolio">
          {" "}<img src={favicon} className="favicon" alt="favicon" />{" "}
            </Nav.Link>
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navIcon" href="#preabout">
              SOBRE MÍ
            </Nav.Link>
            <Nav.Link className="navIcon" href="#card">
              PROYECTOS
            </Nav.Link>
            <NavDropdown
              className="navIcon"
              title="Contacto"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href="https://www.linkedin.com/in/diego-bordallo/"
                target="_blank"
              >
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/DBordallo"
                target="_blank"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href="mailto:bordallo.d@gmail.com"
                target="_blank"
              >
                Mail
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleDownloadCV}>
                Descargar CV
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
