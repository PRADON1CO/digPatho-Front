import { Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
import "../../style/cancerDeMama.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const CancerDeMama = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
    trigger,
  } = useForm();

  const navigate = useNavigate();

  const [showContainer, setShowContainer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/error");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoadImage = async () => {
    const isValid = await trigger("imagen");
    if (isValid) {
      const imageURLValue = getValues("imagen");
      setImageURL(imageURLValue);
      setShowContainer(true);
      handleCloseModal();
    }
  };

  return (
    <div className="container-fluid pt-4 mainSection bg-body-secondary">
      <div className="pt-2">
        <NavLink className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 me-1">
          K167
        </NavLink>
        <NavLink
          to={"/*"}
          className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 mx-1"
        >
          HER2
        </NavLink>
        <NavLink
          to={"/*"}
          className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 mx-1"
        >
          Estrógeno
        </NavLink>
        <NavLink
          to={"/*"}
          className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 mx-1"
        >
          Progestona
        </NavLink>
      </div>
      <div className="px-4 py-4 mb-3 bg-body-secondary sombraContenedores">
        <div className="text-center d-flex flex-column bg-white sombraContenedores">
          <button
            onClick={handleShowModal}
            className="btn bgMorado text-white px-3 py-1 mx-auto my-2"
          >
            Cargar Imagen
          </button>
          <NavLink
            to={"/*"}
            className="btn bgMorado text-white px-3 py-1 mx-auto my-2"
          >
            Enviar
          </NavLink>
        </div>
        {showContainer && (
          <Container>
            <Row>
              <Col
                xs={12}
                md={6}
                lg={6}
                className="d-flex align-items-center justify-content-center"
              >
                <div className=" w-50 mx-auto py-3 text-center">
                  <img
                    src={imageURL} // Actualiza la imagen con la URL del estado
                    width={200}
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
              <Form onSubmit={handleSubmit(onSubmit)} className="py-3">
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      IA K167
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("IAk167", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.IAk167?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      IA Total Cells
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("IATotalCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.IATotalCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      IA Positive Cells:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("IAPositiveCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.IAPositiveCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      IA Negative Cells:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("IANegativeCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.IANegativeCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      K167
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("K167", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.K167?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      Total Cells:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("TotalCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.TotalCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      Positive Cells:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("positiveCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.positiveCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      Negative Cells:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("nrgativeCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.nrgativeCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      Wrong K167:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("wrongK167", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.wrongK167?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      Wrong Total Cells:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("wrongTotalCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.wrongTotalCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      Wrong Positive Cells
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("wrongPositiveCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.wrongPositiveCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="fw-medium" column sm={4}>
                      Wrong Negative Cells
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese el valor correspondiente"
                        {...register("wrongNegativeCells", {
                          required: "Este campo es obligatorio",
                          minLength: {
                            value: 1,
                            message: "el minimo es de 1 caracteres",
                          },
                          maxLength: {
                            value: 10,
                            message: "el maximo es de 10 caracteres",
                          },
                          pattern: {
                            message:
                              "Este campo debe contener al menos un número ",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {" "}
                        {errors.wrongNegativeCells?.message}
                      </Form.Text>
                    </Col>
                  </Form.Group>

                  <div className="text-center">
                    <Button className="btn btn-danger m-1" type="submit">
                      Eliminar Datos
                    </Button>
                    <Button className="btn btn-success m-1" type="submit">
                      Actualizar Datos
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        )}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Ingrese URL de la imagen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>URL de la imagen:</Form.Label>
                <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              {...register("imagen", {
                required: "La imagen es obligatoria",
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                  message: "Debe ingresar una URL valida (jpg | jpeg | gif | png)",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-danger rounded-0" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button className="btn btn-dark rounded-0" onClick={handleLoadImage}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CancerDeMama;
