import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import diente1 from "../../assets/img/dientes/diente1.png"
import bg_diente1 from "../../assets/img/dientes/background_diente1.png";
import bg_diente2 from "../../assets/img/dientes/background_diente2.png";
import bg_diente3 from "../../assets/img/dientes/background_diente3.png";
import bg_diente4 from "../../assets/img/dientes/background_diente4.png";

export default function Section5() {
    return (
        <Container name="section2"
            className="content" style={{ paddingBottom: 4 + "rem", paddingTop: 4 + "rem" }}>
            <Row >
                <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                    <h3 className="text-primary  bold mb-5"
                        style={{ fontSize: 3 + "rem" }} >Trabajamos para mejorar tu salud</h3>
                </Col>
            </Row>
            {/* =======Contenido========= */}
            <Row>
            <Col lg={6} className="gb-primary-img" >
                {/* <img style={{ width: 100+ "%", height: 100 + "%" }} src={bg_diente4} /> */}
            </Col>
            <Col lg={6} >
                <Row className='gb-light' >
                    <Col lg={6}>
                        <img src={diente1} />
                        <h3 className='text-secondary bold'> Servicios Esteticos </h3>
                        <ul className='text-secondary lead'>
                            <li>Blanqueamientos</li>
                            <li>Carilla de porcelana</li>
                            <li>Carillas directas de resina</li>
                            <li>Incrustaciones al color</li>
                            <li>Coronas en cerámica libres de metal</li>
                            <li>Cirugía periodontal (cirugía de Encias)</li>
                        </ul>

                    </Col>
                    <Col lg={6}>
                        <img src={diente1} />
                        <h3 className='text-secondary bold'> Restauracion </h3>
                        <ul className='text-secondary lead'>
                            <li>Blanqueamientos</li>
                            <li>Carilla de porcelana</li>
                            <li>Carillas directas de resina</li>
                            <li>Incrustaciones al color</li>
                            <li>Coronas en cerámica libres de metal</li>
                            <li>Cirugía periodontal (cirugía de Encias)</li>
                        </ul>

                    </Col>

                </Row>

                <Row className='gb-light'>


                    <Col lg={6}>
                        <img src={diente1} />
                        <h3 className='text-secondary bold'> Prótesis fijas y removibles </h3>
                        <ul className='text-secondary lead'>
                            <li>Coronas de porcelana en zirconia</li>
                            <li>Coronas de porcelana en alúmina</li>
                            <li>Coronas de porcelana prensada </li>
                            <li>Coronas en metal y oro porcelana</li>
                            <li>Prótesis total o parcial </li>
                            <li>Guardas oclusales con activación </li>
                            <li>Implantes dentales de última generación</li>
                        </ul>

                    </Col>
                    <Col lg={6}>
                        <img src={diente1} />
                        <h3 className='text-secondary bold'> Otros servicios generales </h3>
                        <ul className='text-secondary lead'>
                            <li>  Otros servicios generales</li>
                            <li>  Rayos X</li>
                            <li>  Diagnóstico clínico con cámara intraoral </li>
                            <li> Rayo Láser Terapéutico </li>

                        </ul>

                    </Col>

                </Row>
            </Col>
            </Row>
        </Container>
    )
}
