import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mapa from "../../assets/img/mapa.png";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";

export default function Ubicanos() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-5"
      lg={12}
    >
      <Row>
        <Col>
          <h3
            className="text-primary  bold mb-5"
            style={{ fontSize: 3 + "rem" }}
          >
            Nos ubicamos aqui
          </h3>
        </Col>
        <img alt="mapa" src={mapa} />
      </Row>
    </Container>
  );
}
