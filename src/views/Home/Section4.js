import React from 'react'
import { Container, Row,Col, Button } from 'react-bootstrap';
import rounded2 from "../../assets/img/carrusel/carrusel2.png"
import rounded3 from "../../assets/img/carrusel/carrusel3.png"
import rounded4 from "../../assets/img/carrusel/carrusel4.png"

export default function Section4() {
    


    return (

        <Container name="section4-home" className="content bg-light alpha-4 mb-5" >
            <Row className="mb-5 mt-5 d-flex justify-content-end  flex-row" >
            <Col  md={6} lg={8} sm= {12} >  
            <h1 className='text-secondary bold font-3rem' >Nuestros servicios</h1>  </Col>
                
            </Row>
           
            <Row>
                <Col  md={6} lg={4} >
                    <Row >

                        <img className="rounded-pill" alt="avatar1" 
                        src={rounded2} 
                        style={{maxWidth:100+"%", height:"auto"}}/>

                    </Row>
                    <Row>
                        <h4 className="bold text-primary mt-5">Especialistas Calificados</h4>
                        <p>We hire the best specialists to deliver top-notch diagnostic services for you.</p>
                    </Row>

                </Col>
                <Col  md={6} lg={4} > 

                    <Row >

                    <img className="rounded-pill" alt="avatar1" src={rounded3} style={{maxWidth:100+"%", height:"auto"}}/>

                    </Row>
                    <Row>
                        <h4 className="bold text-primary mt-5">Equipo Moderno</h4>
                        <p>We use the first-class medical equipment for timely diagnostics of various diseases.</p>
                    </Row>
                </Col> 

               

                <Col  md={6} lg={4} >
                    <Row >

                    <img className="rounded-pill" alt="avatar1" src={rounded4} style={{maxWidth:100+"%", height:"auto"}}/>

                    </Row>
                    <Row>
                        <h4 className="bold text-primary mt-5">Servicio de Emergencias</h4>
                        <p>Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.</p>
                    </Row>

                </Col> 

            </Row>
        </Container>

    )
}
