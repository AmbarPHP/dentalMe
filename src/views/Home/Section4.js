import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Section4() {
  const serviceData = [
    {
      title_banner: "Cosmetic Dentistry",
      description:
        "We hire the best specialists to deliver top-notch diagnostic services for you.",
      picture: "servicios1",
    },
    {
      title_banner: "General Dentistry",
      description:
        "We use the first-class medical equipment for timely diagnostics of various diseases.",
      picture: "servicios2",
    },
    {
      title_banner: "Children`s Dentistry",
      description:
        "Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.",
      picture: "servicios3",
    },
    {
      title_banner: "Dental Implants",
      description:
        "We hire the best specialists to deliver top-notch diagnostic services for you.",
      picture: "servicios4",
    },
    {
      title_banner: "Orthodontics",
      description:
        "We use the first-class medical equipment for timely diagnostics of various diseases.",
      picture: "servicios5",
    },
    {
      title_banner: "Dental Emergency",
      description:
        "Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.",
      picture: "servicios6",
    },
    {
      title_banner: "Periodontics",
      description:
        "The Periodontal department provides diagnosis, prevention and treatment of simple to severe periodontal (gum) disease,Gingivitis,Mild Periodontitis,Moderate Periodontitis,Severe Periodontitis",
      picture: "servicios4",
    },
    {
      title_banner: "Dental Surgery",
      description:
        "Surgeries are carried out in cases when other methods of therapeutic treatment can’t be used.Teeth extraction, Curettage, Plastic surgery,Other types of surgeries",
      picture: "servicios5",
    },
    {
      title_banner: "Crowns & Bridgets",
      description:
        "Crowns and bridges are the most usual dental restoration work in dentistry,Removable dentures,Fixed dentures,Veneers",
      picture: "servicios6",
    },
  ];

  function ServicioItem({ title, description, picture }) {
    return (
      <Col md={6} lg={4}>
        <Row>
          <img
            alt="rounded_pill"
            className="rounded-pill"
            style={{ maxWidth: 100 + "%", height: "auto" }}
            src={require(`../../assets/img/servicios/${picture}.png`)}
          />
        </Row>
        <Row>
          <h4 className="bold text-primary mt-5">{title}</h4>
          <p>{description}</p>
        </Row>
      </Col>
    );
  }
  // nuestros servicios
  return (
    <Container
      className=" bg-light alpha-4 my-5"
      id="section-4"
      style={{ width: "100%" }}
    >
      <div id="section4-home" className="desktop">
        <Row className="d-flex text-center my-5  ">
          <Col md={12} lg={12} sm={12}>
            <h1 className="text-primary bold font-3rem">Nuestros servicios</h1>{" "}
          </Col>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            voluptatum, atque maxime dignissimos magni laborum illo adipisci
            perspiciatis, accusamus incidunt laudantium aperiam quidem. Beatae
            ut illum at praesentium non fuga.
          </p>
        </Row>

        <Row>
          {serviceData.map((item, index) => (
            <ServicioItem
              key={index}
              title={item.title_banner}
              description={item.description}
              picture={item.picture}
            />
          ))}
        </Row>
      </div>
      <div id="section4-home" className="mobile">
        <Row>
          <h1 className="font-3rem bold text-center">Nuestro servicios</h1>
        </Row>
        <Row>
          <Col>
            <p className="font-1rem bold">Nuestro servicios</p>
          </Col>
          <Col>
            <Row>Implantes y Ortodoncia</Row>
            <Row>Limpieza y Blanqueamiento</Row>
            <Row>Especialistas</Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
