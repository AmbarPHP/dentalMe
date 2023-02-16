import React from 'react';
import { FaMapMarkerAlt,FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./BarraSup.scss";


export default function BarraSup() {


  return (
    <div className="sup-area">
      <Row className='desktop w-100'>
      <Col  lg={{ span: 1, offset: 1 }} >
      <img src={logo} className="logo"/> <span className='text-light'> Health&Smile</span>
      </Col>
      <Col lg={{ span: 2, offset: 1 }} className="pb-3 pt-3" >
        <div className='columna-doble d-flex justify-content-center align-items-center'>
        <a href="#" style={{fontSize:38+"px"}} 
        className="me-4 text-light bold ">
              <FaWhatsapp />

            </a> <span className=' text-light'> 311 269 7923</span>
        </div>
      </Col>
      <Col lg={{ span: 3, offset: 0}} className="pb-3 pt-3" >
        <div className='columna-doble d-flex justify-content-center align-items-center'>
        <a href="" style={{fontSize:38+"px"}} className="me-4 text-light bold">
              <FaMapMarkerAlt/>
            </a>
          <span className='bold text-light pe-2'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
        </div>
      </Col>


      <Col lg={{ span: 3, offset: 1 }} md={12} sm={12}
       style={{ paddingTop: 0 + 'rem' }} sm={12} >
        <div className="d-flex flex-row  justify-content-center mb-0 small text-secondary">

          
            <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4 font-regular text-light bold">
              <FaFacebook/>
            </a> <a href="#" className="me-4 font-regular  text-light bold">
              <FaTwitter />

            </a> <a href="#" className="me-4 font-regular  text-light bold ">
              <FaWhatsapp />

            </a> <a href="#" className="font-regular  text-light bold ">
              <FaInstagram />

            </a>
          
        </div>




      </Col>
      </Row>
      <Row className='mobile'>
  
      <Col md={12}  className="pb-3 pt-3" >
        <div className='columna-doble d-flex justify-content-start ms-2 align-items-center'>
        <a href="#" style={{fontSize:38+"px"}} 
        className="me-4 text-light bold ">
              <FaWhatsapp />

            </a> <span className=' text-light'> 311 269 7923</span>
        </div>
      </Col>
      <Col  md={12} sm={12} className="pb-3 pt-3" >
        <div className='columna-doble d-flex justify-content-start ms-2 align-items-center'>
        <a href="" style={{fontSize:38+"px"}} className="me-4 text-light bold">
              <FaMapMarkerAlt/>
            </a>
          <span className='bold text-light pe-3'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
        </div>
      </Col>


      
      </Row>
    </div>



  )
}


