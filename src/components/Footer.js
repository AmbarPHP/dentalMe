import React from "react";

import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <Container
      name="div_container_footer"
      className=" gradient-primary-dark pt-3"
      style={{ height: 300 + "px", fontSize: 20 + "px" }}
    >
      <Row className=" gb-light gap-y pt-0 mx-5 text-light ">
        <div className="col-lg-4">
          <h5 className="bold d-flex justify-content-start mb-0 mt-5">
            Horarios
          </h5>
          <hr />
          <Row>
            <div className="d-flex flex-column justify-content-start ">
              <p>Lunes a Viernes 9 a 2 PM y 4 a 8 PM</p>
              <p>Sábados 9 a 2 PM y 4 a 8 PM</p>
              <p>Domingo Cerrado</p>
            </div>
          </Row>
        </div>
        <Col lg={{ span: 4, offset: 0 }} className="p-0">
          <h5 className="bold d-flex justify-content-start mb-0 mt-5">
            Dirección:
          </h5>
          <hr />

          <Row>
            {/* <Col lg={{ span: 4, offset: 0 }} className="p-0">
                            <span> <a href="https://www.facebook.com/HealthSmileCenter/"
                                className="  icon-circle text-primary">
                                <FaMapMarkerAlt className='icon-whatsap' />
                            </a></span>
                        </Col> */}
            <Col
              lg={{ span: 11, offset: 0 }}
              className="d-flex flex-column justify-content-start my-0"
            >
              <p>Plaza Manglar, Int. 2</p>
              <p>Av. de la Cultura #94 Int. 2,</p>
              <p>Los Fresnos Oriente, 63190 Tepic, Nay.</p>
            </Col>
          </Row>
        </Col>

        <div className="col-lg-4">
          <h5 className="bold d-flex justify-content-start mb-0 mt-5">
            Redes sociales:
          </h5>

          <hr />

          <div className="d-flex flex-row  justify-content-start mb-0 small text-light pb-3">
            <a
              href="https://www.facebook.com/HealthSmileCenter/"
              className="me-4  icon-circle text-primary"
            >
              <FaFacebook className="icon-style" />
            </a>
            <a
              href="https://www.facebook.com/HealthSmileCenter/"
              className="me-4 icon-circle  text-primary"
            >
              <FaTwitter className="icon-style" />
            </a>
            <a
              href="https://www.facebook.com/HealthSmileCenter/"
              className="me-4 icon-circle  text-primary"
            >
              <FaWhatsapp className="icon-style" />
            </a>
            <a
              href="https://www.facebook.com/HealthSmileCenter/"
              className=" icon-circle  text-primary"
            >
              <FaInstagram className="icon-style" />
            </a>
            <a
              href="https://www.facebook.com/HealthSmileCenter/"
              className=" icon-circle  text-primary"
            >
              <FaYoutube className="icon-style" />
            </a>
          </div>
          <div className="columna-doble d-flex justify-content-start align-items-start">
            <span className="bold">311 269 7923</span>
          </div>
          <div className="columna-doble d-flex justify-content-start align-items-center">
            <span className="regular">dental&smile@gmail.com</span>
          </div>
        </div>

        {/* <div className="col-lg-1">
                        <h5 className="bold d-flex justify-content-center mb-0 mt-5">Clinica</h5>
                        <h5 className="d-flex justify-content-center mb-0 mt-5">Dental& healt</h5>
                           
                                <div className="d-flex flex-row  justify-content-center mb-0 small text-secondary">
                                <img src={logo} alt="" className="logo" />
                                </div>
                                
                            
                </div>  */}
      </Row>
    </Container>
  );
};

export default Footer;
