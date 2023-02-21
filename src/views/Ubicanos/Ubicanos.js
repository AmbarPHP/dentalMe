import React from 'react'
import { Col } from 'react-bootstrap';
import mapa from "../../assets/img/mapa.png";
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import AboutUs from './AboutUs';


export default function Ubicanos() {
  return (
    <div >
      
      
       <Col className='d-flex justify-content-center align-items-center mt-5' lg={12} >
                    <h3 className="text-primary  bold mb-5"
                        style={{ fontSize: 3 + "rem" }} >Nos ubicamos aqui</h3>
                </Col>
      <img src={mapa}/>
      
    
    </div>
  )
}
