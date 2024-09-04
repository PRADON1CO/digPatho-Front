import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import loginImg from "../../assets/login.png";
import "../../style/login.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from"../helpers/queries"


const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario)
    if (login(usuario)) {
      Swal.fire({
        title: "  Usuario logueado",
        text: "Bienvenido a Fit Factory",
        icon: "success",
      });
      setUsuarioLogueado(usuario.email);
      navegacion("/administrador/cancerDeMama");
    } else {
      Swal.fire({
        title: "Error en el login",
        text: "Email o contraseña incorrecta",
        icon: "error",
      });
    }
  }

  return (
    <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col>
            <Card className="p-3 shadow">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <img src={loginImg} alt="" className="imgLogin" />
                </Card.Title>
                <Form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-2 px-md-5 pb-2 formText"
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold color">
                      Correo electronico:
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ej: juan@mail.com"
                      {...register("email", {
                        required: "El correo es obligatorio",
                        minLength: {
                          value: 4,
                          message:
                            "El email debe contener al menos 4 caracteres",
                        },
                        maxLength: {
                          value: 250,
                          message:
                            "El email debe contener como máximo 250 caracteres",
                        },
                        pattern: {
                          value:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                          message:
                            "El correo debe ser un email valido Ej: nombre@mail.com",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.email?.message}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold color">Contraseña:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="ingrese una contraseña"
                      {...register("password", {
                        required: "El password es obligatorio",
                        minLength: {
                          value: 8,
                          message: "el minimo es de 8 caracteres",
                        },
                        maxLength: {
                          value: 12,
                          message: "el maximo es de 15 caracteres",
                        },
                        pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                          message:
                            "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                        },
                      })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Text className="text-danger">
                      {" "}
                      {errors.password?.message}
                    </Form.Text>
                  </Form.Group>
                  <NavLink to={'*'} className="nav-link">
                    <p className="text-underline fw-medium btnEnviar">Crear Cuenta</p>
                  </NavLink>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="bg-dark rounded-0 border-0 btnEnviar px-4"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
