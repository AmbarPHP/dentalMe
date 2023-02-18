import React from 'react'
import { Col } from 'react-bootstrap';
import mapa from "../../assets/img/mapa.png";
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import AboutUs from './AboutUs';
import Ubicanos from './Ubicanos';


export default function UbicanosPage() {
  return (
    <div >
      <Banner name="Ubicanos"></Banner>
      <Ubicanos/>
      
      <Footer></Footer>
    </div>
  )
}

