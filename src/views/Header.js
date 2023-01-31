import React from 'react';
import logo from "../assets/img/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import "./Header.scss";




export default function Header() {


    return (
        
            <Navbar  expand="lg" id="main-nav">
                <Container className="navigation-area">
                    <Navbar.Brand href="#home">
                        <img src={logo} className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="text-primary bold">
                            <Nav.Link href="/home" className='text-contrast'>INICIO</Nav.Link>
                            <Nav.Link href="/servicios" className='text-contrast'>SERVICIOS  DENTALES</Nav.Link>
                            <Nav.Link href="/especiles" className='text-contrast'>ESPECIALES</Nav.Link>
                            <Nav.Link href="/nosotros" className='text-contrast'>NOSOTROS</Nav.Link>
                            <Nav.Link href="/login" className='text-contrast'>LOGIN</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
    
            </Navbar>


       
    )
}
