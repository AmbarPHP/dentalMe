import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Testimonials.scss";

export default function Testimonial() {
  const data = [
    {
      testimonial:
        "Yo quisera agradecerle al personal de la Dra, incluyendo al laboratorista, por facilitar mi cirugia el dia 9 de Enero.",
      by: "Martha Solana",
      picture: "doc3",
      title: "Paciente",
    },
    {
      testimonial:
        "Yo admiro su dedicacion, su trabajo es inpecable, publicado el dia  12 de Enero.",
      by: "Bryan Bunch",
      picture: "doc1",
      title: "Paciente",
    },
    {
      testimonial: "Me gusta mucho su trabajo, son muy profesionales.",
      by: "Issac Levi",
      picture: "doc2",
      title: "Paciente",
    },
  ];
  return (
    <Container
      className="container"
      style={{ height: "auto", fontSize: 20 + "px" }}
    >
      <div id="sectionTestimonilas-home">
        <Col
          className="d-flex justify-content-around align-items-end mt-5"
          lg={12}
        >
          <h3 className="text-primary  bold mb-5 font-3rem">Testimoniales</h3>
        </Col>
        <Row className="mt-5 mb-3">
          {data.map((item, index) => {
            return (
              <Col
                lg={{ span: 3, offset: 1 }}
                sm={12}
                md={12}
                key={index}
                className="quote-clasic"
              >
                <Row>
                  <q className="font-20 text-gray ">{item.testimonial}</q>
                </Row>
                <Row className="d-flex align-items-stretch">
                  <Col className="my-5">
                    <img
                      className="round-circle"
                      src={require("../../assets/img/Doctores/" +
                        item.picture +
                        ".png")}
                    />
                  </Col>

                  <Col className="my-5">
                    <div className='"quote-meta unit flex-row unit-spacing-sm align-items-center">'>
                      <h5 className="quote-author text-capitalize font-weight-bold text-primary">
                        <cite className="font-20 bold">{item.by}</cite>
                      </h5>
                    </div>
                    <p className="quote-desc  text-gray font-italic">
                      {item.title}
                    </p>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
      <div id="sectionTestimonilas-mobile"></div>
    </Container>
  );
}
