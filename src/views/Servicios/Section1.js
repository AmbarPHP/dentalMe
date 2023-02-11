import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'


export default function Section1() {

  
    return (
        <Container  name="section1"  style={{backgroundColor:"#ccc"}} 
        className="container  gradient-primary-dark">
            <Row className='d-flex justtify-content-center'>
                <span className="title-inicio text-light ">¡Usa un paquete y ahorra!</span>
              
            </Row>
            <Row style={{paddingBottom:4+"rem"}}>
                <Col className='bg-light mx-3 mb-5'>
                <Row style={{ height:'70%',alignItems: 'center'}} >
                    <h1 className='text-primary mt-3 '> Paquete <span className='text-secondary'>1</span></h1> 
                    <ul className='lead mt-3'>
                        <li>Consulta</li>
                        <li>Radiografía</li>
                        <li>Limpieza</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center   lead bold'>$950</p>
                    </Row>
                </Col>
                <Col className='bg-primary mx-3 mb-5'>
                <Row style={{ height:'70%',alignItems: 'center'}} >
                <h1 className='text-light mt-3'>Paquete <span className='text-secondary'>2</span></h1> 
                    <ul className='lead'>
                        <li  className='text-light'>Blanqueamiento</li>
                        <li  className='text-light'>Limpieza</li>
                        <li  className='text-light'>Pulido de dientes</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-light  lead bold'>$3500</p>
                    </Row>
                </Col>
                <Col className='bg-light mx-3 mb-5' >
                    <Row style={{ height:'70%',alignItems: 'center'}} >
                    <h1 className='text-primary mt-3'>Paquete <span className='text-secondary'>3</span></h1> 
                    <ul className='lead'>
                        <li>Limpieza</li>
                        <li>Pulido de dientes</li>
                        <li>Aplicacion de fluor</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center  lead bold'>$500</p>
                    </Row>
            
                    
                 </Col>

                 
                <Col className='bg-primary  mx-3 mb-5'>
                
                <Row style={{ height:'70%',alignItems: 'center'}} >
                <h1 className='text-light mt-3'>Paquete <span className='text-secondary'>4</span></h1> 
                    <ul className='lead'>
                        <li   className='text-light'>Consulta</li>
                        <li   className='text-light'>Valoracion</li>
                        <li   className='text-light'>Camara intraoral</li>
                        <li   className='text-light'>Radiografía</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-light  lead bold'>$500</p>
                    </Row>
                 </Col>
            </Row>

        </Container>
    )
}
