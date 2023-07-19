import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { BiMap, BiPhoneCall } from "react-icons/bi";
import { Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./BarraSup.scss";


export default function BarraSup() {


  return (
    <div name="div_container_barra_sup" className="sup-area">
      <Row className='desktop w-100 ' style={{ display: 'inline-style' }}>
        <Col lg={{ span: 1, offset: 1 }} >
          <img src={logo} alt={"logo"} className="logo" /> <span className='text-primary'> Health&Smile</span>
        </Col>
        <Col lg={{ span: 2, offset: 1 }} className="pb-3 pt-3" >
          <div className='columna-doble d-flex justify-content-center align-items-center'>
            <a href="http://locahost:3000/" style={{ backgroundColor: 'red', fontSize: "28px" }}
              className="me-4 text-primary bold ">
              <FaWhatsapp />

            </a> <span className='text-primary'> 311 269 7923</span>
          </div>
        </Col>
        <Col lg={{ span: 3, offset: 0 }} className="pb-3 pt-3" >
          <div className='columna-doble d-flex justify-content-center align-items-center'>
            <a href="http://localhost/" style={{ fontSize: 38 + "px" }} className="me-4 text-primary bold">
              <FaMapMarkerAlt />
            </a>
            <span className='bold text-primary pe-2'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
          </div>
        </Col>


        <Col lg={{ span: 3, offset: 1 }} md={12} sm={12}
          style={{ paddingTop: 0 + 'rem' }} >
          <div className="d-flex flex-row  justify-content-center mb-0 font-2rem  text-primary">

            <a href="https://www.facebook.com/HealthSmileCenter/"
              className="me-4 bold">
              <FaFacebook />
            </a> <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4  bold">
              <FaTwitter />

            </a> <a href="https://www.facebook.com/HealthSmileCenter/" className="me-4  bold ">
              <FaWhatsapp />

            </a> <a href="https://www.facebook.com/HealthSmileCenter/" className=" bold ">
              <FaInstagram />

            </a>

          </div>




        </Col>
      </Row>
      <Row className='mobile'>

        <Col md={12} className="pb-3 pt-3" >
          <div className='columna-doble d-flex justify-content-start ms-2 align-items-center'>
            <a href="#" style={{ fontSize: 38 + "px" }}
              className="me-4 text-light bold ">
              <FaWhatsapp />

            </a> <span className=' text-light'> 311 269 7923</span>
          </div>
        </Col>
        <Col md={12} sm={12} className="pb-3 pt-3" >
          <div className='columna-doble d-flex justify-content-start ms-2 align-items-center'>
            <a href="" style={{ fontSize: 38 + "px" }} className="me-4 text-light bold">
              <FaMapMarkerAlt />
            </a>
            <span className='bold text-light pe-3'> Av. de la Cultura #94 Int.2 en Plaza Manglar </span>
          </div>
        </Col>



      </Row>
    </div>



  )
}


