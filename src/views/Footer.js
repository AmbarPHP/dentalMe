import React from 'react';

import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./Footer.scss"

const Footer = () => {
    return (
        <Container className="contentainer">
         
                <Container>
                    <Row className=" gb-light gap-y pt-5">
                        <div class="col-md-3 ">
                            <h5 className="bold d-flex justify-content-center mb-0 ">Horarios</h5>
                                <p className="d-flex justify-content-center mb-0 small mt-3">
                                    Lunes a Viernes 9 a 2 PM y 4 a 8 PM
                                </p>
                                <p className="d-flex justify-content-center mb-0 small">
                                    Sabados 9 a 2 PM y 4 a 8 PM
                                </p>
                                <p className="d-flex justify-content-center mb-0 small">
                                    Domingo Cerrado
                                </p>
                                
                        </div>
                        <div className="col-md-3">
                        <h5 className="bold  d-flex justify-content-center mb-0 mt-2">Citas</h5>
                          
    
                            <p class="text-secondary d-flex justify-content-center mt-3 ">Whatsapp</p>
                            <div className='columna-doble d-flex justify-content-center align-items-center'>
                                <span> <FaWhatsapp className='icon-whatsap' />33-23 342-134</span>
                                
                            </div>
                           
                            
                        </div>
                        <div className='col-md-3'>
                          
                            <h5 class="bold  d-flex justify-content-center mb-0 mt-2">Ubícanos</h5>
                                <p className="d-flex justify-content-center mb-0 small mt-3">
                                Plaza Manglar local #2323,
                                </p>
                                <p className="d-flex justify-content-center mb-0 small">
                                 Av. de la Cultura Col del Valle
                                </p>
                                <p className="d-flex justify-content-center mb-0 small">
                                Tepic Nayarit, 
                                </p>
                                <p className="d-flex justify-content-center mb-0 small">

                                    <a href="mailto:yourmail@domain.com">yourmail@domain.com</a>
                                </p>
                            
                        </div>
                        <div class="col-md-3">
                        <h5 class="bold  d-flex justify-content-center mb-0 mt-2">Siguenos</h5>
                            
                            <div class="d-flex flex-row  justify-content-center mb-0 small text-secondary">
                                
                                <nav className="nav  my-4">
                                <a href="#" className="me-4 font-regular text-primary">
                                <FaFacebook />
                                </a> <a href="#" className="me-4 font-regular text-primary">
                                <FaTwitter />

                                </a> <a href="#" className="me-4 font-regular text-primary">
                                <FaWhatsapp />

                                </a> <a href="#" className="font-regular text-primary">
                                <FaInstagram />

                                </a>
                                </nav>
                            </div>
                                <div class="d-flex flex-row  justify-content-center mb-0 small text-secondary">
                                <img src={logo} alt="" class="logo" />
                                </div>
                                
                            
                        </div>
                    </Row>
                  


                </Container>
         
        </Container >

    );
};

export default Footer;