import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Section5() {
    return (
        <Container className='d-flex  container-fluid  '>
            <Row className="justify-content-lg-left  hero-container gb-primary-img">
                <div className="overlay h-100" >
                    <Col md={{ span: 5, offset: 1 }} style={{ paddingTop: 10 + 'rem' }} sm={12} >



                        <h1 style={{ fontSize: 4 + "rem" }} className='text-light'>Diagnósticos <br /> mas efectivos</h1>
                        <h4 className=" text-white">Le ofrecemos el mas amplio rango de diagnostico,desde Rayos X hasta PruebasX.</h4>

                        <Button variant="light">
                            <a class="btn btn-ellipse btn-white offset-top-30"
                                href="/opoitment">Consultas Gratis</a>
                        </Button>


                    </Col>

                </div>
            </Row>
        </Container>
    )
}
