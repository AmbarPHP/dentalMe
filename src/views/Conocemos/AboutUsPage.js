
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import doc1 from "../../assets/img/Doctores/team1.jpg";
import doc2 from "../../assets/img/Doctores/team2.jpg";
import doc3 from "../../assets/img/Doctores/team3.jpg";
import doc4 from "../../assets/img/Doctores/team4.jpg";

import Nosotros from './Nosotros';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';


export default function AboutUsPage() {

  
    return (
        <div>
            <Banner name="Nosotros"></Banner>
           <Nosotros></Nosotros>
            {/* ==Contiene la informacion de los doctores , revisalo antes de borrarlo== */}
            {/* <Nosotros2/> */}
            <Footer></Footer>
        </div>
    )
}

