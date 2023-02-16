import React from 'react'
import {  Row, Col,Button } from 'react-bootstrap';
import Menu from"../../components/Menu";


export default function Banner() {
  return (
    <div className='overlay-blue  h-100'>
        <div className='gb-primary-img-servicios ' >          
            <Row className="pt-5 pb-5">
            <Menu></Menu>
            </Row>
            <Row className="mb-5 mt-5 d-flex justify-content-center  flex-row" >
            <Col  md={6} lg={8} sm= {12} >  
            <h1 className='text-light bold font-3rem' >Servicios</h1>  </Col>
                
            </Row>
        
        </div>
        </div>
  )
}