import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./Hero.scss";
import Menu from "../../components/Menu";
import BarraSup from "../../components/BarraSup";
import logo from "../../assets/img/logo.png";

export default function Hero() {
  /* Muestra el menu y la barra superior */
  return (
    <Container className="overlay-hero-bg  h-100">
      {/* cambie el tamaño de la imagend de hero en el css */}

      <Row>
        <Menu></Menu>
        <BarraSup></BarraSup>
      </Row>
      <Row className=" d-lg-flex align-middle mt-5 mb-5 mx-0 ">
        <Col md={{ span: 5, offset: 0 }} className="mt-5" sm={12}>
          <h1 className="text-light ms-auto mx-auto mb-0 bold font-3rem">
            Health & Smile
          </h1>

          <span className="text-light font-2rem vh-100">Dental Center</span>

          <h4 className="text-dark font-1rem pt-3 mt-5 mb-5">
            <p>Clínica dental, realizamos</p>
            <p>odontología integral,</p>
            <p>cirugías, implantes ortodoncia y prótesis</p>
          </h4>
          <div className=" mt-5 mb-5 mx-5">
            <Button>
              <a
                className="text-light bold font-1rem"
                href="make-an-appointment.html"
              >
                <span className="ml-5"></span>311 269 79 23
              </a>
            </Button>
          </div>
        </Col>

        {/* <Col md={{ span: 5, offset: 1 }} className="mt-5" sm={12}>
          <div className="gb-primary-img-resina2"></div>
        </Col> */}
      </Row>
    </Container>
  );
}
