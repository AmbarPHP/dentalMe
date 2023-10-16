import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaBriefcaseMedical,
} from "react-icons/fa";

const sectionData = [
  {
    title: "Horario",
    icon: FaCalendarAlt,
    content: [
      "Lun a Vie 9-2 PM y 4 a 8 PM",
      "Sábado 9-2 PM y 4 a 8 PM",
      "Domingo Cerrado, solo emergencias",
    ],
  },
  {
    title: "Disponibilidad",
    icon: FaClipboardList,
    content: [
      "Si necesita ayuda!!, elige tu dentista, agende con tiempo, los dentistas tiene disponibilidad limitada a los horarios de servicio",
    ],
  },
  {
    title: "Citas",
    icon: FaClipboardList,
    content: [
      "Agenda tu cita de valoración sin costo y con gusto te atenderemos 📲311 269 7923",
    ],
  },
  {
    title: "Casos de Emergencias",
    icon: FaBriefcaseMedical,
    content: ["01800-1234-567", "Llámenos y con gusto lo atenderemos"],
  },
];

export default function Section2() {
  return (
    <Container name="section2-home" className="content">
      <Row
        style={{ height: "310px" }}
        className="d-flex justify-content-center"
      >
        {sectionData.map((section, index) => (
          <Col
            key={index}
            lg={3}
            md={12}
            className="gradient-primary-light d-flex justify-content-between py-5 mb-5"
          >
            <Row className="text-center">
              <h5 className="text-primary bold text-uppercase">
                <div className="btn-rounded gradient-primary-dark mx-auto text-center">
                  {<section.icon className="text-light font-3rem" />}
                </div>{" "}
                <p className="text-contrast bold mt-3">{section.title}</p>
              </h5>
              <hr className="text-primary me-5 mb-5" />
              <ul className="text-primary text-big-18 mx-2">
                {section.content.map((item, i) => (
                  <p key={i} className="text-primary text-center">
                    {item}
                  </p>
                ))}
              </ul>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
