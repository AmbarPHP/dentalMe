import React from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.png";
import "./BarraSup.scss";

export default function BarraSup() {
  const styles = {
    section: {
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '15px',
      paddingBottom: '15px',
      margin: 'auto',
      backgroundColor: '#ccc'
    }

  }

  return (


    <Container className="sup-area">
      <div className="rd-navbar-brand">
        <a href="/inicio">
          <img className="brand-logo-dark" src="#" /></a>
      </div>
      <div className="contacts-wrap">
        <address className="contact-info reveal-sm-inline-block text-start offset-none">
          <div className="p unit unit-spacing-xs unit-horizontal">
            <div className="unit-left"><span className="icon icon-xs icon-circle icon-white-17 mdi mdi-phone"></span></div>
            <div className="unit-body">
              <a className="text-white" href="tel:#">1-800-1234-567</a><br/><a className="text-white" href="tel:#">1-800-3214-654</a></div>
          </div>
        </address>
        <address className="contact-info reveal-sm-inline-block text-start">
          <div className="p unit unit-horizontal unit-spacing-xs">
            <div className="unit-left"><span className="icon icon-xs icon-circle icon-white-17 mdi mdi-map-marker"></span></div>
            <div className="unit-body">
              <a className="text-white" href="#">2130 Fulton Street San Diego<br/>CA 94117-1080 USA</a></div>
          </div>
        </address>
      </div>
    </Container>



  )
}


