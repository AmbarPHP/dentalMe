import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./BarraSup.scss";

export default function     BarraSupDesktop() {
    return (
        <div name="div_container_desk_barra_sup" className="sup-area" index="999" >
            <Row className='desktop w-100 ' >
                <Col lg={{ span: 1, offset: 1 }} >
                    <img src={logo} alt={"logo"} style={{ height:"6rem"}} className="logo" />
                    <span className='text-primary'> Health&Smile</span>
                </Col>
                <Col lg={{ span: 2, offset: 1 }} className="pb-3 pt-3" >
                    <div className='columna-doble d-flex justify-content-center align-items-center'>
                        <a href="http://locahost:3000/" style={{ fontSize: 38 + "px" }} className="me-4 text-primary ">
                            <FaWhatsapp />
                        </a>
                        <span className='bold text-primary'> 311 269 7923</span>
                    </div>
                </Col>
                <Col lg={{ span: 3, offset: 0 }} className="pb-3 pt-3" >
                    <div className='columna-doble d-flex justify-content-center align-items-center'>
                        <a href="http://localhost/" style={{ fontSize: 38 + "px" }} className="me-4 text-primary bold">
                            <FaMapMarkerAlt />
                        </a>
                        <span className='bold text-primary pe-2'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
                    </div>
                </Col>
                <Col lg={{ span: 3, offset: 1 }} md={12} sm={12} style={{ paddingTop: 0 + 'rem' }} >
                    <div className="d-flex flex-row  justify-content-center mb-0 font-2rem  text-primary">
                        <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4 bold">
                            <FaFacebook />
                        </a>
                        <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4  bold">
                            <FaTwitter />
                        </a>
                        <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4  bold ">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.facebook.com/HealthSmileCenter/" className=" bold ">
                            <FaInstagram />
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
