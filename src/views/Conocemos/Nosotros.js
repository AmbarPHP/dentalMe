import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doc1 from "../../assets/img/Doctores/team1.jpg";
import doc2 from "../../assets/img/Doctores/team2.jpg";
import doc3 from "../../assets/img/Doctores/team3.jpg";
import doc4 from "../../assets/img/Doctores/team4.jpg";

import Nosotros2 from "./Nosotros2";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

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
    <Container className="content  mb-4 bg-light">
      <div id="sectionNosotros-home">
        {/* TODO poner los datos en un map y repetir por 4  */}
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center mt-5"
            lg={12}
          >
            <h3
              className="text-primary  bold mb-5"
              style={{ fontSize: 3 + "rem" }}
            >
              Nuestros profesionales{" "}
            </h3>
          </Col>
        </Row>
        <Row>
          {datos.map((item, index) => {
            return (
              <Col lg={3} sm={6} key={index} className="pe-5">
                <div className="picture-border">
                  <Row className="mt-5">
                    <img
                      height="auto"
                      alt={item.name}
                      src={require("../../assets/img/Doctores/" +
                        item.picture +
                        ".jpg")}
                    />
                  </Row>
                  <Row className="bg-primary text-secondary  m-0 pb-5">
                    <h5 className="pt-5">
                      <a href="#" className="text-light font-20 bold">
                        {item.name}
                      </a>
                    </h5>
                    <div className=" text-light font-1rem">{item.title}</div>
                    <div>
                      <span className=" text-light font-1rem text-regular">
                        {item.description}
                      </span>
                    </div>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div id="sectionNosotros-home-mobile"></div>
    </Container>
  );
}
