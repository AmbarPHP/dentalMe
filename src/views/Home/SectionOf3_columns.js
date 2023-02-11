import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Inicio.scss";
import ListaPrecios from '../Servicios/ListaPrecios';

export default function Section1() {

  
    return (
        <Container  className="content">
            <Row>
                <ListaPrecios></ListaPrecios>
            </Row>
            <Row>
                <span className="title-inicio">Laboratorio</span>
                <p className="text-big-18">

                    Contar con un laboratorio totalmente equipado es el sueño de todo restaurador dental, en Mi DCA hemos logrado equiparnos para fabricar las prótesis fijas y removibles, para asegurarnos de que la calidad, durabilidad y tratado de los materiales es siempre el mejor.

                </p>
            </Row>
            <Row >
                <span className="title-inicio">Servicios</span>
                <p className="text-big-18">

                    Te ofrecemos la mayor cantidad de servicios dentales para toda tu familia.

                    Cada uno de los servicios que ofrecemos cuenta con la dedicación profesional que los pacientes exigen. Desde una limpieza dental con ultrasonido, diagnóstico con cámara intraoral, rayos X, blanqueamiento, tratamientos restaurativos y curativos.

                </p>
            </Row>

        </Container>
    )
}
