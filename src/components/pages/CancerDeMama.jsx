import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "../../style/cancerDeMama.css";

const CancerDeMama = () => {
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
      <div className="px-4 py-5 bg-body-secondary sombraContenedores">
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
              <Form className="py-3">
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 1
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 2
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 3
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 4
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 5
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 6
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 7
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 8
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 9
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 10
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 11
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={4}>
                    Campo 12
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese cualquier número"
                      required
                    />
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
