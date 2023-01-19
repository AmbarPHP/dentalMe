import React from 'react';
import { FaWhatsapp , FaFacebook, FaTwitter,FaInstagram,FaYoutube } from 'react-icons/fa';
import { BiMap, BiPhoneCall} from "react-icons/bi";
import {Container, Row, Col} from 'react-bootstrap';



export default function BarraSup() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '15px',
      paddingBottom: '15px',
   
      margin:'auto',
      backgroundColor:'#ddd'
    },
    row:{
      //backgroundColor:'red',
      width:'200%',
    },
    col:{
      backgroundColor:'#dd6',
      width:'80%',
    },
    col2:{
      backgroundColor:'#ab4',
      width:'20%',
      float:"right"
    }
  }

  return (

      <Container style={styles.container} >
        <Row style={styles.row} className=" gap-y align-items-center "  >

          <Col lg={10} >
            <span style={{paddingLeft :"20px"}}> <BiMap/> Plaza Manglar local #100 </span>
            <span style={{paddingLeft :"20px"}}>  <FaWhatsapp  />Tel: 311 346 789 </span >
            <span style={{paddingLeft :"20px"}} > contacto@medica-dental</span>     
          </Col>
          <Col lg={2}  >
            <span style={{paddingLeft :"20px"}}> <FaFacebook /> </span>
            <span style={{paddingLeft :"20px"}}>  <FaTwitter />  </span >
            <span style={{paddingLeft :"20px"}} >  <FaInstagram/></span> 
            <span style={{paddingLeft :"20px"}} >  <FaYoutube /></span>   
          </Col>
      </Row>
     
      </Container>

  
  )
  }


