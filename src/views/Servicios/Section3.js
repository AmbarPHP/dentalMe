import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import "./Inicio.scss";

export default function Section1() {

  
    return (
        <Container  name="section3" className="content mb-5 gradient-primary-dark">
            <Row className='d-flex justtify-content-center'>
                <span className="title-inicio text-light ">¡Usa un paquete y ahorra!</span>
              
            </Row>
            <Row style={{paddingBottom:4+"rem"}}>
                <Col className='bg-light mx-3 mb-5'>
                    <h1 className='text-primary '> Paquete <span className='text-secondary'>1</span></h1> 
                    <ul>
                        <li>Consulta</li>
                        <li>Radiografía</li>
                        <li>Limpieza</li>
                    </ul>
                    <p className='text-center'>$950</p>
                </Col>
                <Col className='bg-primary mx-3 mb-5'>
                <h1 className='text-light'>Paquete <span className='text-secondary'>2</span></h1> 
                    <ul>
                        <li  className='text-light'>Blanqueamiento</li>
                        <li  className='text-light'>Limpieza</li>
                        <li  className='text-light'>Pulido de dientes</li>
                    </ul>
                    <p className='text-center text-light'>$3,500</p>
                </Col>
                <Col className='bg-light mx-3 mb-5'>
                <h1 className='text-primary'>Paquete <span className='text-secondary'>3</span></h1> 
                    <ul>
                        <li>Limpieza</li>
                        <li>Pulido de dientes</li>
                        <li>Aplicacion de fluor</li>
                    </ul>
                    <p className='text-center'>$500</p>
                 </Col>
                <Col className='bg-primary  mx-3 mb-5'>
                <h1 className='text-light'>Paquete <span className='text-secondary'>4</span></h1> 
                    <ul>
                        <li   className='text-light'>Consulta</li>
                        <li   className='text-light'>Valoracion</li>
                        <li   className='text-light'>Camara intraoral</li>
                        <li   className='text-light'>Radiografía</li>
                    </ul>
                    <p className='text-center text-light'>$500</p>
                 </Col>
            </Row>

        </Container>
    )
}
