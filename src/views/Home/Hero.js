import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.scss";
import Menu from "../../components/Menu";
import BarraSup from "../../components/BarraSup";
import logo from "../../assets/img/logo.png";
import BarraSupDesktop from "../../components/BarraSupDesktop";

export default function Hero() {
  /* Muestra el menu y la barra superior */
  return (
    <div>
      {/* // gb-primary-img */}
      <Container className="  h-100 gb-dr_bg">
        {/* cambie el tamaño de la imagend de hero en el css */}

        <Row>
          <BarraSup></BarraSup>
          <Menu></Menu>
        </Row>
        <Row className=" d-lg-flex align-middle mt-5 mb-5 mx-0 ">
          <Col md={{ span: 5, offset: 1 }} className="mt-5" sm={12}>
            <span className="text-light font-2rem vh-100">la sonrrisa</span>
            <h1 className="text-light ms-auto mx-auto mb-0 bold font-3rem">
              perfecta
            </h1>

            <span className="text-light font-2rem vh-100">
              esta a una{" "}
              <span className="text-light ms-auto mx-auto mb-0 bold font-3rem">
                sola
              </span>
            </span>

            <h1 className="text-light font-2rem ">VISITA DE DISTANCIA</h1>

            <h4 className="text-light pt-3 mt-5 mb-5">
              "Sonríe con confianza, confía en nosotros. Nuestros dentistas te
              brindan sonrisas impecables y atención personalizada para que
              luzcas tu mejor sonrisa todos los días."
            </h4>
            <div className=" mt-5 mb-5 mx-5 ">
              <button className="button-light">
                <a
                  className="text-primary bold font-1rem"
                  href="make-an-appointment.html"
                >
                  311 269 79 23
                </a>
              </button>
            </div>
          </Col>

          {/* <Col md={{ span: 5, offset: 1 }} className="mt-5" sm={12}>
          <div className="gb-primary-img-resina2"></div>
        </Col> */}
        </Row>
      </Container>
    </div>
  );
}
