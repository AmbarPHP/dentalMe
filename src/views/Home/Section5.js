import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Resina from "../../assets/img/carrusel/carrusel4.png"
export default function Section5() {
  return (
    // anters tenia este background gb-primary-img-resina1
    <Container id="section5-home" className="d-flex  container-fluid  ">
      {/* <Row className="justify-content-lg-left  ">
        <Col
          md={{ span: 5, offset: 1 }}
          style={{ paddingTop: 10 + "rem" }}
          sm={12}
        > */}
      <div className="desktop">
        <h1 style={{ fontSize: 4 + "rem" }} className="text-light">
          Diagnosticos rapidos y eficientes
        </h1>
        <h4 className=" text-white">
          Le ofrecemos el mas amplio rango de diagnostico,desde Rayos X hasta
          Pruebas Clinicas.
        </h4>
      </div>
      <div class="mobile ">
        <div className="position-right-1">
          <h1 style={{ fontSize: 1 + "rem" }} className="  bold text-dark">
            Acerca de nuestros servicios
          </h1>
          <h4 className=" text-dark" style={{ fontSize: 0.8 + "rem" }}>
            Modernas instalaciones y tecnología para realizar todas tus
            evaluaciones.
          </h4>
          <h4 className=" text-dark" style={{ fontSize: 0.8 + "rem" }}>
            Nuestra proridad es tu tranquilidad, con nosotros no temeras en
            venir al dentista.
          </h4>
          <h4 className=" text-dark" style={{ fontSize: 0.8 + "rem" }}>
            Somos una clinica que te ofrece bienestar y estetica de calidad.
          </h4>
        </div>
        <div className="position-left">
          <h4 className=" text-white bold">
            {/* Razones por las que agendar con dental  */}
            Tu salud es nuestra proridad en Healt & Smile
          </h4>
        </div>
        <div className="position-left-down">
          <h4 className=" text-white">Los mejores dentistas</h4>
          <p className=" text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum
            ex vero, tempore dicta veritatis, sed soluta adipisci.
          </p>
        </div>
        <div className="position-left-down-2">
          <h4 className="text-uppercase text-white">Tecnologia Dental</h4>
          <p className=" text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum
            ex vero.
          </p>
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
      {/* </Col>
      </Row> */}
    </Container>
  );
}
