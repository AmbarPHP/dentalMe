import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Section6() {
        return (
            <div className='d-flex  container-fluid  '>
                <Row className="justify-content-lg-left  hero-container bg-img">
                    <div className="overlay-blue h-100" >
                        <Col md={{ span: 6, offset: 1 }} style={{ paddingTop: 10 + 'rem' }} sm={12} >
    
                            <h1 style={{ fontSize: 4 + "rem" }} className='text-light bold'>Beneficios de la <span>resina dental</span></h1>
                            <h4 className=" text-white">-Se adhiere a la superficie del diente.</h4>
                            <h4 className=" text-white">-Respeta la estetica dental.</h4>
                            <h4 className=" text-white">-Mantiene una apariencia natural</h4>
                            <h4 className=" text-white">-Es practicamente inperceptible</h4>
    
                            <Button variant="light" className='mt-3'>
                                <a className="btn btn-ellipse btn-white offset-top-30"
                                    href="/opoitment">Consultas Gratis</a>
                            </Button>
    
    
                        </Col>
    
                    </div>
                </Row>
            </div>
        )
    }
