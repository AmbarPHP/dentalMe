import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Section6() {
    return (
        <div className='my-0 bg-secondary '>
            <Row className=" d-flex  align-items-start gradient-primary-dark ">
                
                <Col lg={6} sm={12} className="mt-5"  >

                    <h1 className='text-title-mobile text-title-desktop text-border-round-light font-3rem bold mb-3 px-5'>Beneficios de la <span>resina dental</span></h1>
                  
{/* text-border-round-primary text-light */}
                    <h4 className="  text-border-round-secondary text-light mt-5">Se adhiere a la superficie del diente.</h4>

                    <h4 className=" text-border-round-secondary text-light ">Respeta la estetica dental.</h4>
                    <h4 className=" text-border-round-secondary text-light ">Mantiene una apariencia natural</h4>
                    <h4 className="text-border-round-secondary text-light  ">Es practicamente inperceptible</h4>

                    <Button  className='mt-5 mb-0'>
                        <a className="btn-primary text-light "
                            href="/opoitment ">Consultas Gratis</a>
                    </Button>


                </Col>
                <Col lg={6} sm={12} className='bg-primary  py-5 px-5 my-5' >

                    <h1 className='bold text-light font-3rem'> 50% de descuento</h1>
                    <p className='text-light'>Aplicable: 25 Feb al 11 de Marzo</p>


                </Col>



            </Row>
        </div>


    )
}
