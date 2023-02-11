import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import logo from "../../assets/img/logo.png"

export default function Section2() {
  return (
    <Container  className="content bg-light">
    <Row className='div-diente gb-primary'>
        <div className='d-flex justify-content-center  align-items-center flex-row'>
            <div className='p-3'>
                <h1 className='text-light text-big-18 bold'>Haz una cita</h1>
                <h1 className='text-light text-big-18 bold'>hoy mismo</h1>
            </div>
            <div>
                <img src={logo}  /> 
            </div>
        </div>
    
    </Row>
    <Row className='mt-3 mb-2'>
        <h1 className="d-flex justify-content-center hl-2">
        <span className='text-primary'>Aprovecha nuestras 
         <span className='text-secondary'> promociones vigentes</span></span>
        </h1>
    </Row>
        
        
    <Row>
        <Col className='d-flex justify-content-center flex-column'>
        <p className="text-big-18">
            Al realizar el blanqueamiento dental:
        </p>
        <p className="numero-grande">
            1
        </p>
        <h1 className="text-primary bold">
          Gratis
        </h1>
        <p className="text-big-18">
            <span className='text-primary bold'>Consulta</span>
            <span className='text-secondary bold'>+</span>
            <span className='text-primary bold' >diagnóstico</span>
            <span className='text-secondary bold'>+</span>
            <span className='text-primary bold'>limpieza con ultrasonido.</span>
        </p>
        <p className='text-secondary'>*Pregunta por nuestros terminos y condiciones</p>
        </Col>
        <Col>
        
        <p className="text-big-18">
        Al realizarte tu limpieza dental en la primera cita:
       </p>
        <p className="numero-grande">
            2
        </p>
        <h1 className="text-primary bold">
          Gratis
        </h1>
        <p className="text-big-18 text-primary bold">
      
                Diagnóstico y Radiografía
            
           
        </p>    
        
        <p className='text-secondary'>*Pregunta por nuestros terminos y condiciones</p>
        </Col>
    </Row>
    

</Container>
  )
}
