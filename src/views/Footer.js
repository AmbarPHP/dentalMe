import React from 'react';

import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./Footer.scss"

const Footer = () => {
    return (
        <Container className="contentainer bg-primary pb-5">
         
                <Container>
                    <Row className=" gb-light gap-y pt-5 text-light ">
                        <div class="col-md-4 ">
                            <h5 className="bold d-flex justify-content-center mb-0 mt-2">Horarios</h5>
                            <hr/>
                                <p className="d-flex justify-content-center mb-0 ">
                                    Lunes a Viernes 9 a 2 PM y 4 a 8 PM
                                </p>
                                <p className="d-flex justify-content-center mb-0 ">
                                    Sábados 9 a 2 PM y 4 a 8 PM
                                </p>
                                <p className="d-flex justify-content-center mb-0 ">
                                    Domingo Cerrado
                                </p>
                                
                        </div>
                        <div className="col-md-4">
                        <h5 className="bold d-flex justify-content-center mb-0 mt-2">Citas:</h5>
                        <hr/>
                        <div class="d-flex flex-row  justify-content-center mb-0 small text-light pb-3">
                                
                                
                                <a href="https://www.facebook.com/HealthSmileCenter/" 
                                className="me-4  icon-circle text-primary">
                                <FaFacebook className='icon-whatsap' />
                                </a> 
                                <a href="#" className="me-4 icon-circle  text-primary">
                                <FaTwitter className='icon-whatsap'/>
                                </a> 
                                <a href="#" className="me-4 icon-circle  text-primary">
                                <FaWhatsapp className='icon-whatsap'/>
                                </a> 
                                <a href="#" className=" icon-circle  text-primary">
                                <FaInstagram className='icon-whatsap'/>
                                </a>
                                
                            </div>
                            <div className='columna-doble d-flex justify-content-center align-items-center'>
                                <span className='bold'> 
                                311 269 7923</span>
                                
                            </div>
                            
                           
                            
                        </div>
                        <div className='col-md-4'>
                          
                            <h5 class="bold d-flex justify-content-center mb-0 mt-2">Dirección:</h5>
                            <hr/>
                                <p className="d-flex justify-content-center mb-0 mt-3">
                                Plaza Manglar, Int. 2 
                                </p>
                                <p className="d-flex justify-content-center mb-0 ">
                                Av. de la Cultura #94 Int. 2, 
                                </p>
                                <p className="d-flex justify-content-center mb-0 ">
                                Los Fresnos Oriente, 63190 Tepic, Nay.
                                </p>
                              
                            
                        </div>
                        {/* <div class="col-md-3">
                        <h5 class="bold d-flex justify-content-center mb-0 mt-2">Siguenos:</h5>
                            
                           
                                <div class="d-flex flex-row  justify-content-center mb-0 small text-secondary">
                                <img src={logo} alt="" class="logo" />
                                </div>
                                
                            
                        </div> */}
                    </Row>
                  


                </Container>
         
        </Container >

    );
};

export default Footer;