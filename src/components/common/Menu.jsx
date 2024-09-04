import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "../../style/menu.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("usuariodigpatho");
    setUsuarioLogueado("");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <NavLink to={"/"} className="d-flex align-items-center nav-link">
            <img src={logo} alt="Logo" className="imgLogo" width="100px" />
            <p className="text-white">
              DigPatho
              <br />
              <span className="colorText tamanioTextLogo">
                Transforming Pathology with AI
              </span>
            </p>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto d-flex justify-content-center w-100">
            <NavLink
              to={"/"}
              className="text-white tamanioOpcionesMenu nav-link"
            >
              Inicio
            </NavLink>
            <NavLink
              to={"/contacto"}
              className="text-white tamanioOpcionesMenu nav-link"
            >
              Contacto
            </NavLink>
            {usuarioLogueado.email ? (
              <>
                <NavLink to="/administrador/cancerDeMama" className="text-white tamanioOpcionesMenu nav-link">
                  Cáncer de Mama
                </NavLink>
                <NavLink
                  to={'*'}
                  className="text-white tamanioOpcionesMenu nav-link"
                >
                  Cáncer de Próstata
                </NavLink>
                <div className="d-flex justify-content-start">
                <Button
                  variant="link"
                  className="text-white tamanioOpcionesMenu nav-link"
                  onClick={logout}
                >
                  logout
                </Button>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/login" className="text-white tamanioOpcionesMenu nav-link">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
