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
      <div className="desktop ">
        <h1
          style={{
            fontSize: 3 + "rem",
            width: "30%",
            paddingTop: "10%",
            paddingLeft: "5%",
          }}
          className="text-light "
        >
          Conocemos somos los especialistas que te ayudaran
        </h1>
        <h4
          style={{
            fontSize: 1 + "rem",
            width: "30%",
            paddingTop: "10%",
            paddingLeft: "5%",
          }}
          className=" text-white"
        >
          Le ofrecemos el mas amplio rango de diagnostico,desde Rayos X hasta
          Pruebas Clinicas.
        </h4>
      </div>
      <div class="mobile">
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
