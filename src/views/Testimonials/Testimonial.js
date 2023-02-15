import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Testimonial() {
    return (
        <Container className="container" style={{height:300+"px", fontSize:20+"px"}}>
           <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                        <h3 className="text-primary  bold mb-5" style={{ fontSize: 3 + "rem" }} >Testimoniales</h3>
                    </Col>
            <Row className="offset-top-66">
     

                <Col lg={6} sm={12} md={12}>
                <p className="font-italic text-gray-dark">
                <q>Yo quisera agradecerle al personal de la Dra ,incluyendo al laboratorista, por facilitar mi cirugia el dia 9 de Enero</q>
                                </p>
                                <img className="rounded-circle quote-img" 
                                style={{width:"60", height:"60"}} 
                                src="images/users/user-bryan-green-60x60.jpg" alt="" />
                                <h5 className="quote-author text-capitalize font-weight-bold text-primary">
                                            <cite className="text-normal">Martha Solana</cite>
                                        </h5>
                                        <p className="quote-desc text-capitalize text-gray font-italic">Patient</p>
                </Col>
                <Col lg={6} sm={12} md={12}>
                <p className="font-italic text-gray-dark">
                                    <q>Yo quisera agradecerle al personal de la Dra ,incluyendo al laboratorista, por facilitar mi cirugia el dia 9 de Enero</q>
                                </p>
                                <img className="rounded-circle quote-img" 
                                style={{width:"60", height:"60"}} 
                                src="images/users/user-bryan-green-60x60.jpg" alt="" />
                                <h5 className="quote-author text-capitalize font-weight-bold text-primary">
                                            <cite className="text-normal">Ever Zamora</cite>
                                        </h5>
                                        <p className="quote-desc text-capitalize text-gray font-italic">Paciente</p>
                </Col>




                 
            </Row>
        </Container>
    )
}
