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
            <h1
              className="text-title-mobile text-title-desktop text-border-round-light
           bold text-white font-3rem  mb-3 px-5"
            >
              Ofertas <span> especiales</span>
            </h1>
            <h1 className="text-white  mx-5"> 50% de descuento</h1>
            <p className="text-dark mx-5">Aplicable: 25 Feb al 11 de Marzo</p>

            {/* text-border-round-primary text-light */}

            <h4 className=" text-dark mt-5 px-5">
              Se adhiere a la superficie del diente.
            </h4>
            <h4 className=" text-dark px-5 ">Respeta la estetica dental.</h4>
            <h4 className="text-dark px-5">Mantiene una apariencia natural</h4>
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
