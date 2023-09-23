import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';

import "./BarraSup.scss";

export default function     BarraSupDesktop() {
    return (
        
        <Container className="sup-area" index="999" >
            <Row className='desktop w-100 ' style={{ backgroundColor:"#2E9B84"}} >
                
                <Col lg={{ span: 2}} className="pb-1 pt-1" >
                    <div className='d-flex 
                    justify-content-between align-items-center'>
                        <a href="http://locahost:3000/" style={{ fontSize: 15 + "px" }} className="me-0 text-light ">
                            <FaWhatsapp />
                        </a>
                        <span className='text-light pe-1'> 311 269 7923</span>
                    </div>
                </Col>
                
                <Col lg={{ span: 5, offset: 0 }} className="pb-1 pt-1" >
                    <div className='columna-doble d-flex justify-content-center align-items-center'>
                        <a href="http://localhost/" style={{ fontSize: 15 + "px" }} className="me-4 text-light bold">
                            <FaMapMarkerAlt />
                        </a>
                        <span className='text-light pe-2'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
                    </div>
                </Col>
                <Col lg={{ span: 4, offset: 1 }} md={12} sm={12} style={{ paddingTop: 0 + 'rem' }} className="pb-1 pt-1">
                    <div className="d-flex flex-row  
                    justify-content-center mb-0 font-1rem
                    ">
                        <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4 text-light">
                            <FaFacebook />
                        </a>
                        <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4  text-light">
                            <FaTwitter />
                        </a>
                        <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4  text-light">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.facebook.com/HealthSmileCenter/" className=" text-light">
                            <FaInstagram />
                        </a>
                    </div>
                </Col>
             
            </Row>
        </Container>
    );
}
