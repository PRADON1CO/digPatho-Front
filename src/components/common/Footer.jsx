import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from"../../assets/logo.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="pt-1 mt-auto bg-dark text-center text-md-start text-lg-start"
      >
        <Row>
          <Col md={12} lg={3} className="text-center">
            <NavLink  to={"/"}>
              <img src={logo} alt="Logo FitFactory" width="190px" />
            </NavLink>
          </Col>
          <Col className="d-none d-md-block text-white">
            <h4 className="text-white">Opciones</h4>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/"
            >
              <p>Inicio</p>
            </NavLink>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/contacto"
            >
              <p>Contacto</p>
            </NavLink>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="https://www.digpatho.com/es"
            >
              <p>Nosotros</p>
            </NavLink>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/login"
            >
              <p>Login</p>
            </NavLink>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Información</h4>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Políticas de privacidad</p>
            </NavLink>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Legal</p>
            </NavLink>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Promociones</p>
            </NavLink>
            <NavLink 
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Horarios de atención</p>
            </NavLink>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Contacto</h4>
            <NavLink 
              to={"*"}
              className="text-decoration-none text-white tamanioOpcionesMenu"
            >
              <p>
                <i className="bi bi-whatsapp"></i> +52 1 55 3974 1845
              </p>
            </NavLink>
            <NavLink 
              to={"*"}
              className="text-white tamanioOpcionesMenu text-decoration-none"
            >
              <p>
                <i className="bi bi-instagram"></i> DigPatho
              </p>
            </NavLink>
            <NavLink 
              to={"*"}
              className="text-white tamanioOpcionesMenu text-decoration-none"
            >
              <p>
                <i className="bi bi-facebook"></i> DigPatho
              </p>
            </NavLink>
            <NavLink 
              to={"*"}
              className="text-white tamanioOpcionesMenu text-decoration-none"
            >
              <p>
                <i className="bi bi-geo-alt-fill"></i> Cordoba
              </p>
            </NavLink>
          </Col>
        </Row>
      </Container>
      <div className=" py-1">
        <p className="text-center">
          &copy; DihPatho . Todos los derechos reservados. 2024.
        </p>
      </div>
    </>
  );
};

export default Footer;
