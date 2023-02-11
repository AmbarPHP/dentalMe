import React from 'react';
import logo from "../assets/img/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import "./Menu.scss";




export default function Menu() {


    return (
        
            <Navbar  expand="lg" className="menu-container ">
               
                    <Navbar.Brand href="#home" style={{marginLeft: 2 + '%'}}>
                        <img src={logo} className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: 20 + '%'}} >
                        <Nav >
                            <Nav.Link href="/home" className='text-contrast text-uppercase'>Inicio</Nav.Link>
                            <Nav.Link href="/servicios" className='text-contrast text-uppercase'>Servicios</Nav.Link>
                            <Nav.Link href="/especiles" className='text-contrast text-uppercase'>Encuentra un doctor</Nav.Link>
                            <Nav.Link href="/nosotros" className='text-contrast text-uppercase'>Especialidades</Nav.Link>
                            <Nav.Link href="/login" className='text-contrast text-uppercase'>testimoniales</Nav.Link>
                            <Nav.Link href="/login" className='text-contrast text-uppercase'>Citas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                
    
            </Navbar>


       
    )
}
