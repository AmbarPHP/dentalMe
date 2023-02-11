import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap';
import "./Hero.scss";

export default function Hero() {
  return (
   
        <Container >
            <Row className="justify-content-lg-left  hero-container gb-primary-img">
                <Col  md={{ span: 4, offset: 1 }} style={{paddingTop:10+'rem'}} sm={12} >
                    <div className="overlay-blue">
                      
                      <h2 className='text-contrast ms-auto me-auto'>
                        Best Outcome for <span>Every Patient !!!</span></h2>
                        <p className='text-contrast pt-5' >Estamos capacitados para disgnosticar todo tipo de casos</p>
                        <Button variant="light">
                            <a class="btn btn-ellipse btn-white offset-top-24" href="make-an-appointment.html">make an appointment</a>
                            </Button>
                      </div>  
                      
            
                </Col>
               
               
            </Row>
        </Container>
    
  )
}
