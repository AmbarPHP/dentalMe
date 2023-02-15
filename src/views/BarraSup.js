import React from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./BarraSup.scss";


export default function BarraSup() {


  return (


    <Container className="sup-area">
      <Col lg={{ span: 1, offset: 1 }} >
      <img src={logo} className="logo"/><span className='text-light'> Health&Smile</span>
      </Col>
      <Col md={{ span: 4, offset: 1 }} sm={12} className="pb-3 pt-3" >
        <div className='columna-doble d-flex justify-content-center align-items-center'>
          <span className='bold text-light pe-3'> Teléfono:   </span><span className=' text-light'> 311 269 7923</span>
        </div>
      </Col>


      <Col md={{ span: 5, offset: 1 }} style={{ paddingTop: 0 + 'rem' }} sm={12} >
        <div class="d-flex flex-row  justify-content-center mb-0 small text-secondary">

          
            <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4 font-regular text-light bold">
              <FaFacebook />
            </a> <a href="#" className="me-4 font-regular  text-light bold">
              <FaTwitter />

            </a> <a href="#" className="me-4 font-regular  text-light bold ">
              <FaWhatsapp />

            </a> <a href="#" className="font-regular  text-light bold ">
              <FaInstagram />

            </a>
          
        </div>




      </Col>
    </Container>



  )
}


