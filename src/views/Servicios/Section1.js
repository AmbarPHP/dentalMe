import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PackageCard({ packageName, price, items, color, number }) {
  return (
    <div className={`package-card bg-${color}  lg-3 md-6 mx-3 mb-5`}>
      <div style={{ height: "50%", alignItems: "center" }}>
        <h1
          className={`text-${
            color === "light" ? "primary" : "light"
          } mt-3 text-center`}
        >
          {packageName}{" "}
          <span className="text-secondary bold d-block mt-2">{number}</span>
        </h1>
        <ul
          className={`lead mx-3 ${
            color === "light" ? "text-primary" : "text-light"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div style={{ height: "50%", alignItems: "center" }}>
        <p
          className={`text-center text-${
            color === "light" ? "primary" : "light"
          } font-2rem bold`}
        >
          ${price}
        </p>
      </div>
    </div>
  );
}

export default function Section1() {
  return (
    <div
      name="section1-servicios"
      className="gradient-primary-dark mt-0 pt-5 pb-5"
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
          className="d-flex justify-content-center align-items-center mx-0"
          style={{ backgroundColor: "red" }}
          xs={12}
          md={12}
          lg={12}
        >
          <h3 className="text-light bold my-5 text-center">
            Haz una cita hoy mismo, con nosotros ahorras tiempo y dinero
          </h3>
        </Col>
      </Row>
      <div className="d-flex justify-content-around">
        <Col
          className="  bg-light px-5  mx-3 mb-5"
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <PackageCard
            packageName="Paquete"
            price={950}
            items={["Consulta", "Radiografía", "Limpieza"]}
            color="light"
            number={"1"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="bg-primary mx-3 mb-5">
          <PackageCard
            packageName="Paquete"
            price={3600}
            items={["Blanqueamiento", "Limpieza", "Pulido de dientes"]}
            color="primary"
            number={"2"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="bg-light mx-3 mb-5">
          <PackageCard
            packageName="Paquete"
            price={600}
            items={["Limpieza", "Pulido de dientes", "Aplicación de fluor"]}
            color="light"
            number={"3"}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="bg-primary  mx-3 mb-5 ">
          <PackageCard
            packageName="Paquete"
            price={600}
            items={[
              "Consulta",
              "Valoración",
              "Camara intra-oral",
              "Radiografía",
            ]}
            color="primary"
            number={"4"}
          />
        </Col>
      </div>
    </div>
  );
}
