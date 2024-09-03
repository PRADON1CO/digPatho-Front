import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "../../style/menu.css"

const Menu = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="imgLogo" width="100px" />
            <p>DigPatho<br /><span className="colorText tamanioTextLogo">Transforming Pathology with AI</span></p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto d-flex justify-content-center w-100">
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Inicio
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Contacto
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Cáncer de Mama
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Cáncer de Próstata
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              <i className="bi bi-person"></i> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
