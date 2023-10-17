import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./servicios.scss";

function PackageCard({ packageName, price, items, color, number }) {
  return (
    <Col
      className={`package-card bg-${color} px-0 d-flex flex-column text-center`}
    >
      <div className="text-center">
        <h1
          className={`text-${
            color === "light" ? "primary" : "light"
          } mt-3 font-1rem`}
        >
          {packageName}{" "}
          <span
            className={`text-${
              color === "light" ? "primary" : "light"
            } font-1rem bold d-block mt-2`}
          >
            {number}
          </span>
        </h1>
        <ul
          className={`lead mx-3 font-1rem ${
            color === "light" ? "text-dark" : "text-light"
          }`}
        >
          {items.map((item, index) => (
            <li className="font-1rem" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <p
          className={`text-${
            color === "light" ? "primary" : "light"
          } font-1rem bold mt-5`}
        >
          ${price}
        </p>
      </div>
    </Col>
  );
}

export default function Section1() {
  const packageData = [
    {
      packageName: "Paquete",
      price: 950,
      items: ["Consulta", "Radiografía", "Limpieza"],
      color: "light",
      number: "1",
    },
    {
      packageName: "Paquete",
      price: 3600,
      items: ["Blanqueamiento", "Limpieza", "Pulido de dientes"],
      color: "primary",
      number: "2",
    },
    {
      packageName: "Paquete",
      price: 600,
      items: ["Limpieza", "Pulido de dientes", "Aplicación de fluor"],
      color: "light",
      number: "3",
    },
    {
      packageName: "Paquete",
      price: 600,
      items: ["Consulta", "Valoración", "Cámara intraoral", "Radiografía"],
      color: "primary",
      number: "4",
    },
  ];

  return (
    <Container
      name="section1-servicios"
      className="gradient-primary-dark mx-auto text-center my-5 py-5"
    >
      <Row>
        <Col
          className="d-flex justify-content-center align-items-center mx-0"
          xs={12}
          md={12}
          lg={12}
        >
          <h3 className="text-light bold mb-5 font-3rem text-center">
            Con nuestros paquetes ahorras
          </h3>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex mx-auto text-center mx-0 gradient-primary-dark"
          sm={12}
          md={12}
          lg={12}
        >
          <h3 className="text-light bold my-5 font-3rem text-center">
            Haz una cita hoy mismo, con nosotros ahorras tiempo y dinero
          </h3>
        </Col>
      </Row>
      <div className="d-flex  flex-wrap justify-content-around">
        {packageData.map((pack, index) => (
          <Col
            key={index}
            xs={12}
            sm={12}
            md={6}
            lg={3}
            className="d-flex flex-row"
          >
            <PackageCard
              packageName={pack.packageName}
              price={pack.price}
              items={pack.items}
              color={pack.color}
              number={pack.number}
            />
          </Col>
        ))}
      </div>
    </Container>
  );
}
