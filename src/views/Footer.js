import React from 'react';

import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./Footer.scss"

const Footer = () => {
    return (
        <Container className="">
            <footer className=" section">
                <Container className="bg-contrast">
                    
                    <Row className="gap-y">
                        <div class="col-md-3  ">
                            <h6 className="bold d-flex justify-content-center mb-0 mt-2">Horarios</h6>
                                <p className="d-flex justify-content-center mb-0 small">
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
                        <h6 className="bold  d-flex justify-content-center mb-0 mt-2">Citas</h6>
                          
    
                            <p class="text-secondary d-flex justify-content-center">Whatsapp</p>
                            <div className='columna-doble d-flex justify-content-center align-items-center'>
                                <span> <FaWhatsapp className='icon-whatsap' />33-23 342-134</span>
                                
                            </div>
                           
                            
                        </div>
                        <div className='col-md-3'>
                          
                            <h6 class="bold  d-flex justify-content-center mb-0 mt-2">Ubícanos</h6>
                                <p className="d-flex justify-content-center mb-0 small">
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
                        <h6 class="bold  d-flex justify-content-center mb-0 mt-2">Siguenos</h6>
                            
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
            </footer >
        </Container >

    );
};

export default Footer;