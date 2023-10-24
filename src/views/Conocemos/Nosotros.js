import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const images = {
  team1: require("../../assets/img/Doctores/team1.jpg"),
  team2: require("../../assets/img/Doctores/team2.jpg"),
  team3: require("../../assets/img/Doctores/team3.jpg"),
  team4: require("../../assets/img/Doctores/team4.jpg"),
};

export default function Nosotros() {
  const datos = [
    {
      name: "Dr. Jose Robles",
      title: "Dentista",
      description: "Especialista en incrustaciones",
      picture: "team1",
    },
    {
      name: "Dr. Maria Mora",
      title: "Dentista",
      description: "Especialista en incrustaciones",
      picture: "team2",
    },
    {
      name: "Dr. Samule Montes",
      title: "Dentista",
      description: "Especialista en incrustaciones",
      picture: "team3",
    },
    {
      name: "Dr. Alejandra Gala",
      title: "Dentista",
      description: "Especialista en incrustaciones",
      picture: "team4",
    },
  ];

  return (
    <Container id="Nosotros" className="mb-4 bg-light">
      <div id="sectionNosotros-home" className="desktop">
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center mt-5"
            lg={12}
          >
            <h3 className="text-primary bold mb-5 font-3rem">
              Nuestros profesionales
            </h3>
          </Col>
        </Row>
        <Row>
          {datos.map((item, index) => (
            <Col lg={3} sm={6} key={index} className="pe-5">
              <div className="picture-border">
                <Row className="mt-5">
                  <img
                    alt={item.name}
                    height="50%"
                    src={images[item.picture]}
                  />
                </Row>
                <Row className="bg-primary text-secondary m-0 pb-5">
                  <h5 className="pt-5">
                    <a href="#" className="text-light font-20 bold">
                      {item.name}
                    </a>
                  </h5>
                  <div className="text-light font-1rem">{item.title}</div>
                  <div>
                    <span className="text-light font-1rem text-regular">
                      {item.description}
                    </span>
                  </div>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div id="sectionNosotros-home" className="mobile">
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center mt-5"
            lg={12}
          >
            <h3 className="text-primary bold mb-5 font-3rem">
              Nuestros profesionales
            </h3>
          </Col>
        </Row>
        <Row>
          {datos.map((item, index) => (
            <Row lg={3} sm={12} key={index} className="pe-5">
              <Col className="mt-0">
                <img
                  alt={item.name}
                  height="30%"
                  className="rounded-image"
                  src={images[item.picture]}
                />{" "}
                {/* Ajusta la altura aquí */}
              </Col>
              <Col className="bg-primary text-secondary m-0 pb-5">
                <h5 className="pt-5">
                  <a href="#da" className="text-light font-20 bold">
                    {item.name}
                  </a>
                </h5>
                <div className="text-light font-1rem">{item.title}</div>
                <div>
                  <span className="text-light font-1rem text-regular">
                    {item.description}
                  </span>
                </div>
              </Col>
            </Row>
          ))}
        </Row>
      </div>
    </Container>
  );
}
