import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import doc1 from "../../assets/img/Doctores/team1.jpg";
import doc2 from "../../assets/img/Doctores/team2.jpg";
import doc3 from "../../assets/img/Doctores/team3.jpg";
import doc4 from "../../assets/img/Doctores/team4.jpg";

import Nosotros2 from './Nosotros2';



export default function Nosotros() {
    return (
            
            <Container className='content  mb-4 bg-light' >
         
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                        <h3 className="text-secondary  bold mb-5" 
                        style={{ fontSize: 3 + "rem" }} >Somo profesionales </h3>
                    </Col>
                </Row>
                <Row >
                    <Col lg={3} sm={6} className="pe-2">
                      
                            <Row className="mt-5">
                                <img 
                                     height="auto" alt="dr-joseph-phillips.jpg"
                                    src={doc1} />
                            </Row>
                            <Row className="bg-primary text-secondary bold m-0 " >
                                
                                    <h5 className='pt-5'>
                                        <a href="#" className="text-light bold">Dr. Jose Robles</a>
                                    </h5>
                                    <div style={{fontSize:"1.5rem"}}>Dentista</div>
                                    <div >
                                        <span >Lorem ipsum dolor sit amet, consectetur...</span>
                                    </div>
                               
                                  
                                
                            </Row>
                        
                    </Col>
                    <Col lg={3} sm={6} className="pe-2">
                      
                      <Row className="mt-5">
                          <img 
                               height="auto" alt="dr-joseph-phillips.jpg"
                              src={doc2} />
                      </Row>
                      <Row className="bg-primary text-secondary bold m-0">
                          
                              <h5 className='pt-5'>
                                  <a href="#" className="text-light bold">Dr. Martha Gala</a>
                              </h5>
                              <div style={{fontSize:"1.5rem"}}>Dentista</div>
                              <div >
                                  <span >Lorem ipsum dolor sit amet, consectetur...</span>
                              </div>
                         
                            
                          
                      </Row>
                  
              </Col>
              <Col lg={3} sm={6} className="pe-2">
                      
                      <Row className="mt-5">
                          <img 
                               height="auto" alt="dr-joseph-phillips.jpg"
                              src={doc3} />
                      </Row>
                      <Row className="bg-primary text-secondary bold m-0 " >
                          
                              <h5 className='pt-5'>
                                  <a href="#" className="text-light bold">Dr. Samuel Montes</a>
                              </h5>
                              <div style={{fontSize:"1.5rem"}}>Dentista</div>
                              <div >
                                  <span className="">Lorem ipsum dolor sit amet, consectetur...</span>
                              </div>
                         
                            
                          
                      </Row>
                  
              </Col>
              <Col lg={3} sm={6}  >
                      
                      <Row className="mt-5">
                          <img 
                               height="auto" alt="dr-joseph-phillips.jpg"
                              src={doc4} />
                      </Row>
                      <Row className="bg-primary text-secondary bold m-0">
                          
                              <h5 className='pt-5'>
                                  <a href="#" className="text-light bold">Dr. Maria Mora</a>
                              </h5>
                              <div style={{fontSize:"1.5rem"}}>Dentista</div>
                              <div >
                                  <span className="">Lorem ipsum dolor sit amet, consectetur...</span>
                              </div>
                         
                            
                          
                      </Row>
                  
              </Col>
                    
                    
                </Row>


            </Container>

            // <Nosotros2></Nosotros2>
      
    )
}
