import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'


export default function Section1() {

  
    return (
        <div name="section1-servicios" 
        className=" gradient-primary-dark mt-0 pt-5 pb-5">
             <Row >
                    <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                        <h3 className="text-light  bold mb-5" 
                        style={{ fontSize: 3 + "rem" }} >Con nuestros páquetes ahorras</h3>
                    </Col>
                </Row>
            <Row >
                <Col className='bg-light mx-3 mb-5'>
                <Row style={{ height:'70%',alignItems: 'center'}} >
                    <h1 className='text-primary mt-3 '> Paquete <span className='text-secondary'>1</span></h1> 
                    <ul className='lead mt-3 mx-3'>
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
                    <ul className='lead mx-3'>
                        <li  className='text-light'>Blanqueamiento</li>
                        <li  className='text-light'>Limpieza</li>
                        <li  className='text-light'>Pulido de dientes</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-light  lead bold'>$3600</p>
                    </Row>
                </Col>
                <Col className='bg-light mx-3 mb-5' >
                    <Row style={{ height:'70%',alignItems: 'center'}} >
                    <h1 className='text-primary mt-3'>Paquete <span className='text-secondary'>3</span></h1> 
                    <ul className='lead mx-3'>
                        <li>Limpieza</li>
                        <li>Pulido de dientes</li>
                        <li>Aplicacion de fluor</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center  lead bold'>$600</p>
                    </Row>
            
                    
                 </Col>

                 
                <Col className='bg-primary  mx-3 mb-5'>
                
                <Row style={{ height:'70%',alignItems: 'center'}} >
                <h1 className='text-light mt-3'>Paquete <span className='text-secondary'>4</span></h1> 
                    <ul className='lead mx-3'>
                        <li   className='text-light'>Consulta</li>
                        <li   className='text-light'>Valoracion</li>
                        <li   className='text-light'>Camara intraoral</li>
                        <li   className='text-light'>Radiografía</li>
                    </ul>
                    </Row>
                    <Row style={{ height:'30%',alignItems: 'center'}} >
                    <p className='text-center text-light  lead bold'>$600</p>
                    </Row>
                 </Col>
            </Row>

        </div>
    )
}
