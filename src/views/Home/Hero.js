import React from 'react'
import {  Row, Col,Button } from 'react-bootstrap';
import "./Hero.scss";
import Menu from"../../components/Menu";
import BarraSup from "../../components/BarraSup";

export default function Hero() {
  return (
    <div className='overlay-blue  h-100'>
        <div className='gb-primary-img-resina2 ' >          
            <Row className="">
            <BarraSup></BarraSup>
            <Menu></Menu>
            </Row>
            <Row className=" d-lg-flex align-middle mt-5 mb-5 mx-0  h-100">
            
              <Col  md={{ span: 5, offset: 1 }} className="mt-5" sm={12} >
                    
                    
                      <h1 className='text-secondary ms-auto mx-auto mb-0 bold font-3rem'  >
                      Health & Smile </h1> 
                      <span className='text-secondary font-2rem' >Dental Center</span>
                        <h4 className='text-secondary pt-5' >Clínica dental, realizamos odontología integral, cirugías, implantes ortodoncia y prótesis</h4>
                        <Button className='btn_round  mt-4'>
                            <a className="text-primary bold text-uppercase" 
                            href="make-an-appointment.html">
                              <span className='me-2'>Citas: </span>311 269 79 23</a>
                        </Button>
                       
                      
            
                </Col>
                
               
            </Row>
            
        </div>
        </div>
  )
}
