import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import logo from "../../assets/img/logo.png"

export default function Section6() {
  return (
    <Container className='d-flex justify-content-center' >
        <Row className=" gb-primary-img ">
        
                    <h1 className='text-light bold '>Somos expertos en </h1>
                    <li className='text-light'>Implantología Oral</li>
                    <li className='text-light'>Endodoncia</li>
                    <li className='text-light'>Periodoncia</li>
                    <li className='text-light'>Maxilofacial</li>
                    <li className='text-light'>Ortodoncia</li>
            
        </Row>
    </Container>
  )
}
