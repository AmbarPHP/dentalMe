import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Section6() {
        return (
            <div className='d-flex  container-fluid  mt-0 mb-0 bg-light'>
                <Row className=" d-flex justify-content-lg-left  align-items-start  bg-img">
                    
                        <Col md={6} className="mt-5" sm={12} >
    
                            <h1 className='text-title-mobile text-title-desktop text-border-round-light font-3rem bold mb-3 px-5'>Beneficios de la <span>resina dental</span></h1>
                            <h4 className=" text-border-round-primary text-light mt-5">Se adhiere a la superficie del diente.</h4>
                            
                            <h4 className=" text-border-round-primary text-light ">Respeta la estetica dental.</h4>
                            <h4 className=" text-border-round-primary text-light">Mantiene una apariencia natural</h4>
                            <h4 className=" text-border-round-primary text-light">Es practicamente inperceptible</h4>
    
                            <Button variant="light" className='mt-5 mb-0'>
                                <a className="btn btn-primary text-light "
                                    href="/opoitment ">Consultas Gratis</a>
                            </Button>
    
    
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <div className='bg-primary pt-5 pb-5 px-5 mt-5' style={{width:"100%"}}>
                            <h1 className='bold text-light font-3rem'> 50% de descuento</h1>
                            <p className='text-light'>Aplicable: 25 Feb al 11 de Marzo</p>
                            </div>
                        
                        </Col>
    
                    
                </Row>
            </div>

            
        )
    }
