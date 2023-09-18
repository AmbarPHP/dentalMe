import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.scss";

export default function Menu() {
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // a l atura de 38 cambia d posisicion el menu
      const altura_hero = 38;
      if (window.scrollY > altura_hero) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [setSticky]);

  return (
    // SE DESPLAZA CUANDO EL SCRIOLL AVANZA 380, POR ESO TIENE EL EVENT LISTENER
    <Navbar
      expand="lg"
      className={`menu-container  ${
        sticky ? "position_fixed" : "position_initial"
      } mt-4 mb-2  `}
      style={{ position: "fixed ", maxWidth: "100%" }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <p className="title-menu">Clínica Dental</p> */}
      <Navbar.Collapse id="basic-navbar-nav" className="margin-20">
        <Nav className="font-20 p-4 menu-colapsible">
          <Nav.Link href="/home" className=" text-uppercase">
            Inicio
          </Nav.Link>
          <Nav.Link href="/servicios" className=" text-uppercase">
            Servicios
          </Nav.Link>
          <Nav.Link href="/about" className=" text-uppercase">
            Nuestros Profesionales
          </Nav.Link>
          <Nav.Link href="/ubicacion" className=" text-uppercase">
            Ubícanos
          </Nav.Link>
          <Nav.Link href="/testimoniales" className=" text-uppercase">
            testimoniales
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
