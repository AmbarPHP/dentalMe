import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'


export default function Section1() {

  
    return (
        <div name="section1-servicios" 
        className=" gradient-primary-dark mt-0 pt-5 pb-5">
            <Container>
             <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                       
                        <h3 className="text-light  bold mb-5 font-3rem" 
                        >Con nuestros páquetes ahorras</h3>
                    </Col>
                </Row>
                <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                        <h3 className="text-light  bold mb-5" 
                    >Haz una cita hoy mismo, con nosotros ahorras tiempo y dinero</h3>
                    </Col>
                </Row>    
            <Row >
                <Col className='bg-light mx-5 mb-5' >
                <Row style={{ height:'70%',alignItems: 'center'}} >
                    <h1 className='text-primary mt-3 ' > Paquete <span className='text-secondary bold ms-2'>1</span></h1> 
                    <ul className='lead mt-3 mx-3'>
                        <li>Consulta</li>
                        <li>Radiografía</li>
                        <li>Limpieza</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-secondary font-2rem bold'>$950</p>
                    </Row>
                </Col>
                <Col className='bg-primary mx-3 mb-5'>

                <Row style={{ height:'70%',alignItems: 'center'}} >
                <h1 className='text-light mt-3'>Paquete <span className='text-contrast bold ms-2'>2</span></h1> 
                    <ul className='lead mx-3'>
                        <li  className='text-light'>Blanqueamiento</li>
                        <li  className='text-light'>Limpieza</li>
                        <li  className='text-light'>Pulido de dientes</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-light font-2rem bold'>$3600</p>
                    </Row>
                </Col>
                <Col className='bg-light mx-3 mb-5' >
                    <Row style={{ height:'70%',alignItems: 'center'}} >
                    <h1 className='text-primary mt-3'>Paquete
                     <span className='text-secondary bold ms-2'>3</span></h1> 
                    <ul className='lead mx-3'>
                        <li>Limpieza</li>
                        <li>Pulido de dientes</li>
                        <li>Aplicacion de fluor</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-primary font-2rem bold'>$600</p>
                    </Row>
            
                    
                 </Col>

                 
                <Col className='bg-primary  mx-3 mb-5 mx-5'>
                
                <Row style={{ height:'70%',alignItems: 'center'}} >
                <h1 className='text-light mt-3 '>Paquete <span className='text-contrast bold ms-2'>4</span></h1> 
                    <ul className='lead mx-3'>
                        <li   className='text-light'>Consulta</li>
                        <li   className='text-light'>Valoracion</li>
                        <li   className='text-light'>Camara intraoral</li>
                        <li   className='text-light'>Radiografía</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-light  font-2rem bold'>$600</p>
                    </Row>
                 </Col>
            </Row>

            </Container>
            </div>
    )
}
