import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./BarraSup.scss";

export default function BarraSupMobile() {
    return (
        <Container name="div_container_mobile_barra_sup"  >
            <Row style={{ fontSize: "18px", zIndex: "1" }}>
                <div className='d-flex justify-content-start  align-items-center'>
                    {/* <img
                    src={logo}
                    alt={"logo"}
                    style={{ height: "12rem" }}
                    className="logo"
                    /> */}
                    <a href="https://www.facebook.com/HealthSmileCenter/"
                        style={{ fontSize: "18px" }}
                        className="me-4 text-secondary ">
                        <FaWhatsapp />
                    </a>
                    <span className='text-secondary'> 311 269 7923</span>
                </div>

            </Row>
            <Row style={{ fontSize: "18px", zIndex: "1" }}>
                <div className='d-flex justify-content-start  align-items-center'>
                    <a href="https://www.facebook.com/HealthSmileCenter/"
                        style={{ fontSize: "18px" }}
                        className="me-4 text-secondary ">
                        <FaMapMarkerAlt />
                    </a>
                    <span className='text-secondary pe-3'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
                </div>
            </Row>
        </Container >
    );
}
