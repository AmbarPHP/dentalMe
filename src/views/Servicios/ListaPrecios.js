import { React } from "react";
import data from "./data.json";
import { Row, Col } from "react-bootstrap";




export default function ListaPrecios() {

  return (
    <div className="my-5 ">
      <Row className="d-flex justify-content-center align-content-stretch  mx-auto bg-light ">
        <h1 className="text-primary d-flex justify-content-center font-3rem bold my-5 ">
          Otro Servicios
        </h1>

        {
          data &&
          data.length > 0 &&
          data.map((item) => (
            <Col lg={3} key={item.id} className="d-flex flex-column align-items-center  
            bg-primary mx-1 px-1 py-1 ">

              <div style={{ height: 15 + "%", width: "auto" }}>
                <h3 className="  justify-content-center align-items-center text-light bold py-0 my-auto mx-auto">
                  <span> {item.descripcion} </span>
                </h3>
              </div>

              <img
                alt="precios"
                style={{ height: 50 + "%", width: "auto" }}
                src={require("../../assets/img/productos/" +
                  item.picture +
                  ".png")}
              />

              <div style={{ height: 35 + "%", width: "auto" }}>

                <p className="text-light font-20">
                  Los precios son validos hasta el 1 de enero 2024
                </p>
                <p className="text-light font-bold">
                  Incluye revisión y tiene garantía
                </p>
                <h2 className="text-light bold text-center py-1">${item.precio}</h2>

              </div>


            </Col>
          ))}
      </Row>
    </div>
  );
}
