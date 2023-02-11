import React from 'react'
import { Container, Row,Col, Button } from 'react-bootstrap';
import rounded2 from "../../assets/img/carrusel/carrusel2.png"
import rounded3 from "../../assets/img/carrusel/carrusel3.png"
import rounded4 from "../../assets/img/carrusel/carrusel4.png"

export default function Section4() {
    const rounded = "https://mdbcdn.b-cdn.net/img/new/avatars/9.webp";


    return (

        <Container name="section4" className="content bg-light " >
            <Row className="mb-5 d-flex justify-content-center align-items-center flex-row" >
                <h1 className='text-secondary bold' style={{fontFamily:"Montserrat", fontSize:3+"rem"}}>El mejor y mas avanzado tratamiento</h1>
            </Row>
           
            <Row>
                <Col  md={6} lg={4} >
                    <Row >

                        <img className="rounded-pill" alt="avatar1" src={rounded2} style={{maxWidth:100+"%", height:"auto"}}/>

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
