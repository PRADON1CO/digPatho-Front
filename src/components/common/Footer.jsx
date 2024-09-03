import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from"../../assets/logo.png"

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="pt-1 mt-auto bg-dark text-center text-md-start text-lg-start"
      >
        <Row>
          <Col md={12} lg={3} className="text-center">
            <a to={"/"}>
              <img src={logo} alt="Logo FitFactory" width="190px" />
            </a>
          </Col>
          <Col className="d-none d-md-block text-white">
            <h4 className="text-white">Opciones</h4>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/"
            >
              <p>Inicio</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/contacto"
            >
              <p>Contacto</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/nosotros"
            >
              <p>Nosotros</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/login"
            >
              <p>Login</p>
            </a>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Información</h4>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Políticas de privacidad</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Legal</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Promociones</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="*"
            >
              <p>Horarios de atención</p>
            </a>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Contacto</h4>
            <a
              to={"*"}
              className="text-decoration-none text-white tamanioOpcionesMenu"
            >
              <p>
                <i className="bi bi-whatsapp"></i> +52 1 55 3974 1845
              </p>
            </a>
            <a
              to={"*"}
              className="text-white tamanioOpcionesMenu text-decoration-none"
            >
              <p>
                <i className="bi bi-instagram"></i> DigPatho
              </p>
            </a>
            <a
              to={"*"}
              className="text-white tamanioOpcionesMenu text-decoration-none"
            >
              <p>
                <i className="bi bi-facebook"></i> DigPatho
              </p>
            </a>
            <a
              to={"*"}
              className="text-white tamanioOpcionesMenu text-decoration-none"
            >
              <p>
                <i className="bi bi-geo-alt-fill"></i> Cordoba
              </p>
            </a>
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
