import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../App.scss";

export default function Section6() {
  return (
    <Container name="section6-home" className="my-5 bg-secondary ">
      <Row className=" d-flex  align-items-start  mb-5">
        <Col lg={6} sm={12} className="mt-5">
          <h1
            className="text-title-mobile text-title-desktop text-border-round-light
           font-3rem  mb-3 px-5"
          >
            Beneficios de la <span>resina dental</span>
          </h1>

          {/* text-border-round-primary text-light */}

          <h4 className=" mt-5 px-5" style={{ color: "$secondary" }}>
            Se adhiere a la superficie del diente.
          </h4>
          <h4 className="  px-5 " style={{ color: "$secondary" }}>
            Respeta la estetica dental.
          </h4>
          <h4 className=" px-5" style={{ color: "$secondary" }}>
            Mantiene una apariencia natural
          </h4>
          <h4 className="px-5" style={{ color: "$secondary" }}>
            Es practicamente inperceptible
          </h4>

          <Button className="mx-5 my-5 px-5 ">
            <a className="btn-primary text-secondary " href="/opoitment ">
              Haz una cita
            </a>
          </Button>
        </Col>
        <Col lg={6} sm={12} className="bg-primary  py-5 px-5 my-5">
          <h1 className="bold text-light font-3rem"> 50% de descuento</h1>
          <p className="text-light">Aplicable: 25 Feb al 11 de Marzo</p>
        </Col>
      </Row>
    </Container>
  );
}
