import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "../../style/menu.css"
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <NavLink to={'/'} className="d-flex align-items-center nav-link">
            <img src={logo} alt="Logo" className="imgLogo" width="100px" />
            <p className="text-white">DigPatho<br /><span className="colorText tamanioTextLogo">Transforming Pathology with AI</span></p>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto d-flex justify-content-center w-100">
            <NavLink to={'/'} className="text-white tamanioOpcionesMenu nav-link">
              Inicio
            </NavLink>
            <NavLink to={'/contacto'} className="text-white tamanioOpcionesMenu nav-link">
              Contacto
            </NavLink>
            <NavLink to={'/cancerDeMama'} className="text-white tamanioOpcionesMenu nav-link">
              Cáncer de Mama
            </NavLink>
            <NavLink to={'/cancerDeProstata'} className="text-white tamanioOpcionesMenu nav-link">
              Cáncer de Próstata
            </NavLink>
            <NavLink to={'/login'} className="text-white tamanioOpcionesMenu nav-link">
              <i className="bi bi-person"></i> Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
