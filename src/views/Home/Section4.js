import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Section4() {
  const data = [
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
  // nuestros servicios
  return (
    <Container
      className="content bg-light alpha-4 mb-5"
      style={{ width: "100%", margin: " 0 auto" }}
    >
      <div id="section4-home-desktop">
        <Row className="d-flex justify-content-between  flex-row mb-5 mt-5 ">
          <Col md={6} lg={8} sm={12}>
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
          {data.map((item, index) => {
            return (
              <Col md={6} lg={4} key={index}>
                <Row>
                  <img
                    alt="rounded_pill"
                    className="rounded-pill"
                    style={{ maxWidth: 100 + "%", height: "auto" }}
                    src={require("../../assets/img/servicios/" +
                      item.picture +
                      ".png")}
                  />
                </Row>
                <Row>
                  <h4 className="bold text-primary mt-5">
                    {item.title_banner}
                  </h4>
                  <p>{item.description}</p>
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
      <div id="section4-home-mobile"></div>
    </Container>
  );
}
