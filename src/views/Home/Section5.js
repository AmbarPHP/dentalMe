import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Resina from "../../assets/img/carrusel/carrusel4.png"
export default function Section5() {
  return (
    <Container name="section5-home" className="d-flex  container-fluid  ">
      <Row className="justify-content-lg-left  gb-primary-img-resina1">
        <Col
          md={{ span: 5, offset: 1 }}
          style={{ paddingTop: 10 + "rem" }}
          sm={12}
        >
          <div className="desktop">
            <h1 style={{ fontSize: 4 + "rem" }} className="text-light">
              Diagnosticos rapidos y eficientes
            </h1>
            <h4 className=" text-white">
              Le ofrecemos el mas amplio rango de diagnostico,desde Rayos X
              hasta PruebasX.
            </h4>
          </div>
          <div class="mobile ">
            <div className="position-right-1">
              <h1 style={{ fontSize: 3 + "rem" }} className="  bold text-dark">
                3
              </h1>
            </div>
            <div className="position-right">
              <h4 className=" text-dark">
                Razones para agendar tu cita en Healt & Smile
              </h4>
            </div>
            <div className="position-down">
              <h4 className=" text-white" style={{ fontSize: 0.8 + "rem" }}>
                Modernas instalaciones y tecnología para realizar todas tus
                evaluaciones.
              </h4>
              <h4 className=" text-white" style={{ fontSize: 0.8 + "rem" }}>
                Nuestra proridad es tu tranquilidad, con nosotros no temeras en
                venir al dentista.
              </h4>
              <h4 className=" text-white" style={{ fontSize: 0.8 + "rem" }}>
                Somos una clinica que te ofrece bienestar y estetica de calidad.
              </h4>
            </div>

            {/* <Button variant="light" className="mt-3">
              <a
                className="btn btn-ellipse btn-white offset-top-60"
                href="/opoitment"
              >
                Diagnosticos Gratis
              </a>
            </Button> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
