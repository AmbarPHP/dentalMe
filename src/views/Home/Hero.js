import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap';
import "./Hero.scss";

export default function Hero() {
  return (
   
        <Container className='d-flex  container-fluid gb-primary-img '>
            <Row className=" justify-content-lg-left  hero-container ">
            <div className="overlay-blue h-100">
              <Col  md={{ span: 4, offset: 1 }} style={{paddingTop:10+'rem'}} sm={12} >
                    
                    
                      <h1 className='text-contrast ms-auto me-auto' style={{fontSize:3+"rem"}} >
                        El Mejor precio  <span>para cada paciente !!!</span></h1>
                        <h4 className='text-contrast pt-5' >Estamos capacitados para disgnosticar todo tipo de casos</h4>
                        <Button variant="light">
                            <a class="btn btn-ellipse btn-white offset-top-24" href="make-an-appointment.html">haz una cita</a>
                            </Button>
                       
                      
            
                </Col>
                </div> 
               
            </Row>
        </Container>
    
  )
}
