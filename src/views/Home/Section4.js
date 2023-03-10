import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function Section4() {
    const data = [{
        title_banner: "AboutUs",
        description:"We hire the best specialists to deliver top-notch diagnostic services for you.",
        picture: "servicios1",
    },
    {
        title_banner: "Equipo Moderno",
        description:"We use the first-class medical equipment for timely diagnostics of various diseases.",
        picture: "servicios2",
    },
    {
        title_banner: "Servicio de Emergencias",
        description: "Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.",
        picture: "servicios3",
    },
    {
        title_banner: "AboutUs",
        description:"We hire the best specialists to deliver top-notch diagnostic services for you.",
        picture: "servicios4",
    },
    {
        title_banner: "Equipo Moderno",
        description:"We use the first-class medical equipment for timely diagnostics of various diseases.",
        picture: "servicios5",
    },
    {
        title_banner: "Servicio de Emergencias",
        description: "Our emergency diagnostics services help you get the most accurate diagnosis in a minimal time.",
        picture: "servicios6",
    }
];


    return (

        <Container name="section4-home" className="content bg-light alpha-4 mb-5" >
            <Row className="mb-5 mt-5 d-flex justify-content-end  flex-row" >
                <Col md={6} lg={8} sm={12} >
                    <h1 className='text-secondary bold font-3rem' >Nuestros servicios</h1>  </Col>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatum, atque maxime dignissimos magni laborum illo adipisci perspiciatis, accusamus incidunt laudantium aperiam quidem. Beatae ut illum at praesentium non fuga.</p>
            </Row>

            <Row>
                {
                    data.map((item, index) => {
                        return (
                       
                                <Col md={6} lg={4} key={index}>
                                    <Row >
                                        <img
                                    className="rounded-pill"
                                    style={{ maxWidth: 100 + "%", height: "auto" }}
                                    src={require('../../assets/img/servicios/' + item.picture + '.png')} />
                                    </Row>
                                    <Row>
                                        <h4 className="bold text-primary mt-5">{item.title_banner}</h4>
                                        <p>{item.description}</p>
                                    </Row>

                                </Col>
                            
                           
                        )
                    })
                }


            </Row>
        </Container>

    )
}
