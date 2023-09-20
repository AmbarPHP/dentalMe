import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagen from "../../assets/img/dental6.jpg";

function OppointmentCard({ schedule, doctorName, items, color, number }) {
  return (
    <Col
      xs={5}
      sm={5}
      md={5}
      lg={5}
      className={` bg-${color}  px-1 mx-1 `}
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {/* lado derecho */}
      <Row>
        <span
          className={`text-${
            color === "light" ? "primary" : "light"
          }  d-block mt-2`}
        >
          {doctorName}
        </span>
        <h2 className={`text-${color === "light" ? "primary" : "light"} mt-3 `}>
          {schedule}
        </h2>
      </Row>
      <Row
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {/* <ul
          className={`lead mx-3 ${
            color === "light" ? "text-primary" : "text-light"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        <p
          className={`text-${color === "light" ? "primary" : "light"} mt-3 `}
          style={{ width: "50%" }}
        >
          Lorem
          <span
            // style={{ backgroundColor: "#ff6" }}
            className={`text-${
              color === "light" ? "primary" : "light"
            }  d-block mt-2`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus
            cupiditate sapiente nostrum tenetur. Accusamus ex cumque tenetur
            impedit!
          </span>
        </p>
      </Row>
    </Col>
  );
}

function Card({ color }) {
  return (
    <Col
      xs={5}
      sm={5}
      md={5}
      lg={5}
      className={` bg-${color}   my-1 mx-1  borderColor: "#9c9",
           `}
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {/* esta dividido en dos */}
      <div
        style={{
          backgroundColor: "#ccc",
          margin: "auto",
          marginTop: "0%",
          marginBottom: "0%",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          alt="rounded_pill"
          src={imagen}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </Col>
  );
}

function HeadTitle() {
  return (
    <Row className="d-flex justify-content-center align-items-center ">
      <Col
        className="d-flex justify-content-center align-items-center mx-0"
        xs={12}
        md={12}
        lg={12}
      >
        <h1 className="text-light bold mb-5 font-3rem text-center">
          Make and oppointment
        </h1>
      </Col>
    </Row>
  );
}

function HeadDescription() {
  return (
    <Row>
      <Col
        className="d-flex justify-content-center align-items-center mx-0 gradient-primary-dark"
        sm={12}
        md={12}
        lg={12}
      >
        <h4 className="text-light  my-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          enim ut in, quam inventore obcaecati est delectus. Laborum facere
          placeat et mollitia aperiam officia sit cumque, non natus, ea
          delectus.
        </h4>
      </Col>
    </Row>
  );
}

export default function Section7() {
  function getSpecialistName() {
    const specialists = ["Sandra Ortega", "Maria Jose Luna"];
    return specialists;
  }

  const [specialistsName, setSpecialistName] = useState([]);
  useEffect(() => {
    const specialists = getSpecialistName();
    console.log(specialists);
    setSpecialistName(specialists);
  }, [specialistsName]);
  return (
    <Container
      name="section7-home"
      className="gradient-primary-dark mt-0 pt-5 pb-5"
    >
      <HeadTitle></HeadTitle>
      <HeadDescription></HeadDescription>
      <Row
        xs={3}
        sm={3}
        md={3}
        lg={3}
        style={{
          display: "flex",
          flexDirection: "row",
          borderColor: "#ff6",
          justifyContent: "center",
        }}
      >
        <Card></Card>

        <OppointmentCard
          schedule="Morning"
          doctorName={specialistsName[0]}
          items={["9:30", "10:00", "11:00"]}
          color="light"
          number={"1"}
        />
      </Row>
      <Row
        xs={3}
        sm={3}
        md={3}
        lg={3}
        style={{
          display: "flex",
          flexDirection: "row",
          borderColor: "#ff6",
          justifyContent: "center",
        }}
      >
        <Card></Card>

        <OppointmentCard
          schedule="Aftenoon"
          doctorName={specialistsName[1]}
          items={["4:30", "5:00", "6:00"]}
          color="primary"
          number={"2"}
        />
      </Row>
    </Container>
  );
}
