import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Resina from "../../assets/img/carrusel/carrusel4.png"
export default function Section5() {
  return (
    <Container name="section5-home" className="d-flex  container-fluid  ">
      <Row className="justify-content-lg-left  hero-container gb-primary-img-resina1">
        <div className=" h-100">
          <Col
            md={{ span: 5, offset: 1 }}
            style={{ paddingTop: 10 + "rem" }}
            sm={12}
          >
            <h1 style={{ fontSize: 4 + "rem" }} className="text-light">
              Diagnosticos rapidos y eficientes
            </h1>
            <h4 className=" text-white">
              Le ofrecemos el mas amplio rango de diagnostico,desde Rayos X
              hasta PruebasX.
            </h4>

            <Button variant="light" className="mt-3">
              <a
                className="btn btn-ellipse btn-white offset-top-30"
                href="/opoitment"
              >
                Diagnosticos Gratis
              </a>
            </Button>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
