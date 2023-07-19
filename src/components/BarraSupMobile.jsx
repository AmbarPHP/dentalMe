import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./BarraSup.scss";

export default function BarraSupMobile() {
    return (
        <div name="div_container_mobile_barra_sup" className="sup-area" index="999" >
            <Row className='mobile' style={{ backgroundColor: 'red', fontSize: "18px", display: "block" }}>
                <Col md={12} className="pb-3 pt-3" >
                    <div className='columna-doble d-flex justify-content-start ms-2 align-items-center'>
                        <a href="https://www.facebook.com/HealthSmileCenter/" style={{ fontSize: 38 + "px" }}
                            className="me-4 text-light bold ">
                            <FaWhatsapp />
                        </a>
                        <span className=' text-light'> 311 269 7923</span>
                    </div>
                </Col>
                <Col md={12} sm={12} className="pb-3 pt-3" >
                    <div className='columna-doble d-flex justify-content-start ms-2 align-items-center'>
                        <a href="https://www.facebook.com/HealthSmileCenter/" style={{ fontSize: 38 + "px" }} className="me-4 text-light bold">
                            <FaMapMarkerAlt />
                        </a>
                        <span className='bold text-light pe-3'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
