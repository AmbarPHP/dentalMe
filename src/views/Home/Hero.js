import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap';
import "./Hero.scss";
import Menu from"../Menu";
import BarraSup from "../BarraSup";

export default function Hero() {
  return (
   
        <div className='gb-primary-img-resina2 ' >
            <Row className="overlay-blue ">
            <BarraSup></BarraSup>
            <Menu></Menu>
            </Row>
            <Row className=" d-lg-flex align-middle mt-5 mx-0 overlay-blue h-100">
            <div className="">
              <Col  md={{ span: 5, offset: 1 }} className="mt-5" sm={12} >
                    
                    
                      <h1 className='text-light ms-auto mx-auto mb-0 bold font-3rem'  >
                      Health & Smile </h1> 
                      <span className='text-contrast font-2rem' >Dental Center</span>
                        <h4 className='text-contrast pt-5' >Clínica dental, realizamos odontología integral, cirugías, implantes ortodoncia y prótesis</h4>
                        <Button className='btn_round  mt-4'>
                            <a className="text-dark bold text-uppercase" 
                            href="make-an-appointment.html">
                              Haz una cita</a>
                        </Button>
                       
                      
            
                </Col>
                </div> 
               
            </Row>
        </div>
    
  )
}
