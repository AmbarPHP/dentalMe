import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mapa from "../../assets/img/mapa.png";

export default function Ubicanos() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-5"
      lg={12}
    >
      <Row>
        <Col
          className="d-flex justify-content-around align-items-end mt-5"
          lg={12}
        >
          <h3 className="text-primary  bold mb-5 font-3rem">
            Nos ubicamos aqui
          </h3>
        </Col>
        <img alt="mapa" src={mapa} />
      </Row>
    </Container>
  );
}
