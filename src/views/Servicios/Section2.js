import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import logo from "../../assets/img/logo.png"

export default function Section2() {
  return (
    <Container  name="section2" className=" bg-light">
    <Row className='div-diente gb-primary'>
        <div className='d-flex justify-content-center   flex-row'>
            <div className='p-3'>
                <h1 className='text-secondary font-3rem bold'>Haz una cita hoy mismo</h1>
              
            </div>
            <div>
                {/* <img src={logo}  />  */}
            </div>
        </div>
    
    </Row>
    <Row className='mt-3 mb-2'>
        <h1 className="d-flex justify-content-center hl-2">
        <span className='text-primary font-3rem  '>Aprovecha nuestras 
         <span className='text-secondary font-3rem '> promociones vigentes</span></span>
        </h1>
    </Row>
        
        
    <Row>
        <Col className='d-flex justify-content-center flex-column'>
        <p className="font-2rem text-gray">
            Al realizar el blanqueamiento dental:
        </p>
        <p className="font-3rem text-secondary ms-5">
            1
        </p>
        <h1 className="text-primary bold">
          Gratis
        </h1>
        <p className="lead">
            <span className='text-primary bold'>Consulta</span>
            <span className='text-secondary bold'>+</span>
            <span className='text-primary bold' >diagnóstico</span>
            <span className='text-secondary bold'>+</span>
            <span className='text-primary bold'>limpieza con ultrasonido.</span>
        </p>
        <p className='text-secondary'>*Pregunta por nuestros terminos y condiciones</p>
        </Col>
        <Col>
        
        <p className="font-2rem text-gray">
        Al realizarte tu limpieza dental en la primera cita:
       </p>
        <p className="font-3rem text-secondary ms-5">
            2
        </p>
        <h1 className="text-primary bold">
          Gratis
        </h1>
        <p className="lead text-primary bold">
      
                Diagnóstico y Radiografía
            
           
        </p>    
        
        <p className='text-secondary'>*Pregunta por nuestros terminos y condiciones</p>
        </Col>
    </Row>
    

</Container>
  )
}
