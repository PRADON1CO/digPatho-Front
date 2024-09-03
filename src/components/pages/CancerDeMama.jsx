import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "../../style/cancerDeMama.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CancerDeMama = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async () => {
    console.log("probando");
  };

  return (
    <div className="container-fluid pt-4 mainSection bg-body-secondary">
      <div className="pt-2">
        <a className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 me-1">
          K167
        </a>
        <a className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 mx-1">
          HER2
        </a>
        <a className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 mx-1">
          Estrógeno
        </a>
        <a className="bg-body-secondary btn rounded-0 sombraBotones colorMorado p-2 border-1 mx-1">
          Progestona
        </a>
      </div>
      <div className="px-4 py-4 mb-3 bg-body-secondary sombraContenedores">
        <div className="text-center d-flex flex-column bg-white sombraContenedores">
          <button className="btn bgMorado text-white px-3 py-1 mx-auto my-2">
            Cargar Imagen
          </button>
          <button className="btn bgMorado text-white px-3 py-1 mx-auto my-2">
            Enviar
          </button>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="bg-dark w-50 text-center">p</div>
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
      </div>
    </div>
  );
};

export default CancerDeMama;
