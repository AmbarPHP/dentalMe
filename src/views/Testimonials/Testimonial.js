import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Testimonial() {
    const data = [{
        testimonial: "Yo quisera agradecerle al personal de la Dra ,incluyendo al laboratorista, por facilitar mi cirugia el dia 9 de Enero",
        by: "Martha Solana",
        picture: "doc3",
        title: "Profesor de la universidad UAN"
    },
    {
        testimonial: "Yo admiro su dedicacion,su trabajo es inpecable dia  12 de Enero",
        by: "Bryan Bunch",
        picture: "doc1",
        title: "Paciente"
    }
        ,
    {
        testimonial: "Me gusta mucho su trabajo, son muy profesionales",
        by: "Issac Levi",
        picture: "doc2",
        title: "Contador de Nissan"
    }]
    return (
        <Container className="container" style={{ height: "auto", fontSize: 20 + "px" }}>
            <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                <h3 className="text-primary  bold mb-5" style={{ fontSize: 3 + "rem" }} >Testimoniales</h3>
            </Col>
            <Row className="mt-5 mb-3">

                {
                    data.map((item) => {
                        return (
                            <Col lg={6} sm={12} md={12} >
                                <p className="font-italic text-gray-dark">
                                    <q className='font-20'>{item.testimonial}</q>
                                </p>

                                <hr className='text-contrast bold'/>
                                <img
                                    className="rounded-circle quote-img"
                                    style={{ width: "30", height: "30" ,borderRadius:"25%" ,borderColor:"#cc5" ,borderStyle:"solid"}}
                                    src={require('../../assets/img/Doctores/' + item.picture + '.png')} />
                                <h5 className="quote-author text-capitalize font-weight-bold text-primary">
                                    <cite className="text-normal">{item.by}</cite>
                                </h5>
                                <p className="quote-desc  text-gray font-italic">{item.title}</p>
                            </Col>
                        )
                    })
                }


            </Row>
        </Container>
    )
}
