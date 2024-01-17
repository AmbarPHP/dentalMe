import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../App.scss";

export default function Section6() {
  return (
    // esto es un promocional
    <Container id="section6-home" className="my-5 bg-secondary ">
      <div className="desktop overlay">
        <Row className=" d-flex  align-items-start  mb-5">
          <Col lg={6} sm={12} className="bg_right  px-5 my-5"></Col>

          <Col lg={6} sm={12} className="mt-5">
            <h1 className="text-white bold mx-5">En Nuestros Servicios</h1>

            <p className="text-dark my-5 mx-5">
              Estamos ofreciendo una aplia gama de servicios con descuento.
              Aplicable: 25 Feb al 11 de Marzo
            </p>

            <h1
              className="text-title-mobile text-title-desktop text-border-round-light
           text-white font-2rem  mb-3 px-5 my-5"
            >
              Los mejores trabajos en resinas :
            </h1>

            {/* text-border-round-primary text-light */}

            <h4 className=" text-dark px-5 ">Respetamos la estética dental.</h4>
            <h4 className="text-dark px-5">
              Nos gusta dar una apariencia natural
            </h4>
            <h4 className="text-dark px-5">Es practicamente inperceptible</h4>

            <Button className="mx-5 my-5 px-5 ">
              <a className="btn-primary text-secondary " href="/opoitment ">
                Haz una cita
              </a>
            </Button>
          </Col>
        </Row>
      </div>
      <div className="mobile"></div>
    </Container>
  );
}
