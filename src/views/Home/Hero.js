import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Menu from "../../components/Menu";
import BarraSup from "../../components/BarraSup";
import logo from "../../assets/img/logo.png";
import img_doc from "../../assets/img/DraHero_bg_ant.png";
import "./Hero.scss";

// import { FaPhone } from "react-icons/fa";

export default function Hero() {
  /* Muestra el menu y la barra superior */
  return (
    <div>
      {/* //gb-primary-img  */}
      <Container className="overlay-hero-bg">
        {/* cambie el tamaño de la imagend de hero en el css */}
        <Row>
     
          <BarraSup></BarraSup>

          <Menu></Menu>
        </Row>
        <Row className=" d-lg-flex align-items-center  mb-5 mx-0 ">
          <Col md={{ span: 5, offset: 1 }} sm={12}>
            <div className="location-1 pt-3 my-5">
              <span className="text-primary font-2rem  ">La sonrrisa</span>
              <span className="text-primary bold font-2rem"> perfecta </span>

              <span className="text-primary font-2rem ">
                esta a una{" "}
                <span className="text-primary  bold font-2rem">sola</span>
              </span>

              <span className="text-primary font-2rem ">
                {" "}
                VISITA DE DISTANCIA
              </span>
              <p>

                <ul>
                   <li>Implantes dentales</li>
                <li>Ortodoncia</li>
                <li>Cirugía de terceros molares</li>
                <li>Rehabilitación estética</li>
               
                </ul>
               
              </p>
              <button className="button-light">
                <a
                  className="text-light bold font-1rem"
                  href="https://www.facebook.com/HealthSmileCenter/"
                >
                  haz tu cita hoy
                </a>
              </button>
            </div>

            {/* <div className="text-light pt-3 mt-5 mb-5">
              "Sonríe con confianza, confía en nosotros. Nuestros dentistas te
              brindan sonrisas impecables y atención personalizada para que
              luzcas tu mejor sonrisa todos los días."
            </div> */}
            {/* <div className="location-2  mt-5 mb-5 mx-5 ">
             
            </div> */}
          </Col>

          <Col md={{ span: 5 }} className=" img_space mt-5" sm={12}>
            {/* <div className="gb-primary-img-resina2"></div> */}
            <img src={img_doc} alt="dra_imag" />
            {/* <div
              className="d-flex flex-column justify-content-end align-items-end
            mt-5  mx-5"
            >
              <p>
                <a href="#xfd" className="me-4 icon-circle">
                  <FaPhone className="icon-style" />
                </a>
                haga una cita al:{" "}
              </p>
              (311) 219-30-79
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
