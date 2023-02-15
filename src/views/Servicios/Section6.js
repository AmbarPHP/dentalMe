import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import logo from "../../assets/img/logo.png"

export default function Section6() {
  return (
    <div className=''>

   
    <Container  name="section6" className=' gb-primary-img h-60 d-flex ' >
        <Col  lg={{ span: 2, offset: 1 }} 
        style={{paddingTop:1+'rem'}} sm={12} className=" overlay d-flex justify-content-center flex-column mt-5">
        
                    <h1 className='text-light bold  mx-auto mb-5'>Somos expertos en </h1>
                    <h2 className='text-light mx-auto'>Implantología Oral</h2>
                    <h2 className='text-light  mx-auto'>Endodoncia</h2>
                    <h2 className='text-light  mx-auto'>Periodoncia</h2>
                    <h2 className='text-light  mx-auto'>Maxilofacial</h2>
                    <h2 className='text-light  mx-auto'>Ortodoncia</h2>
            
        </Col>
    </Container>
    </div>
  )
}