import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Section5() {
  return (
    // anters tenia este background gb-primary-img-resina1
    <Container id="section5-home">
      <Row className="desktop-title">
        <Col md={12} lg={12} sm={12} my-5>
          <h1 className="font-3rem bold text-center text-primary ">
            Conocenos
          </h1>
        </Col>
      </Row>
      <Row className="desktop ">
        <Col>
          <h1
            style={{
              width: "30%",
              paddingTop: "10%",
              paddingLeft: "5%",
            }}
            className="text-light font-3rem"
          >
            Somos los especialistas que te ayudaran
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
        </Col>
        <Col className="sm-12 lg-12  mobile">
          {/* <Button variant="light" className="mt-3">
              <a
                className="btn btn-ellipse btn-white offset-top-60"
                href="/opoitment"
              >
                Diagnosticos Gratis
              </a>
            </Button> */}
        </Col>
      </Row>

      {/* </Col>
      </Row> */}
    </Container>
  );
}
