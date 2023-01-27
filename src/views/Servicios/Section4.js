import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from "../../assets/img/logo.png"
import { FaWhatsapp , FaFacebook, FaTwitter,FaInstagram,FaYoutube } from 'react-icons/fa';

export default function Section4() {
    return (
        <Container className="d-flex content ">
            <Row>
                <Col className="lg-3 md-3 mx-5">
                    <p className="title-inicio text-secondary"> 
                    Suscribete a <span className='text-primary'>nuestras novedades</span></p>
                   
                    
                </Col>
                <Col  className="lg-6 md-6 mx-5 address">

                    <p  className='title-inicio text-secondary '>Visítanos, contáctanos</p>
                    <p>Av. Jacarandas No. 255A</p>
                    <p>Col. Versalles. Tepic, Nay.</p>
                    <p>CP 63138</p>
                    <p className='bold'>Cel y Whatsapp:</p>
                    <div className='dos-columnas ' >
                        <div className=' lg-6 md-6  whatsap_icon '>
                            <FaWhatsapp  />
                        </div>
                        <div className='  lg-6 md-6 ' >
                            <p>Tel: <a href="tel:311 210 09 50">311&nbsp;210 09 50</a></p>
                            <p><a href="tel:311 213 08 69">311&nbsp;213 08 69</a></p>
                            <p><a href="tel:311 213 08 69">311&nbsp;213 08 69</a></p>
                        </div>
                       
                    
                    </div>
                    <p className='text-sencondary' >contacto@midca.com.mx</p>
                   
                </Col>
                <Col  className="flex-md-row lg-3 md-3 mx-5 align-text-center justify-content-center ">

                    <img src={logo}  alt="" />
                    <span style={{paddingLeft :"20px"}}> <FaFacebook /> </span>
                    <span style={{paddingLeft :"20px"}}>  <FaTwitter />  </span >
                    <span style={{paddingLeft :"20px"}} >  <FaInstagram/></span> 
                    <span style={{paddingLeft :"20px"}} >  <FaYoutube /></span>   
                    <Button className='boton-cita'>Haz tu cita aqui</Button>
                </Col>

            </Row>
        </Container>
    )
}
