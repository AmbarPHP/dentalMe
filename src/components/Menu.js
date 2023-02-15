import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import "./Menu.scss";




export default function Menu() {


    return (
        
            <Navbar  expand="lg" className="menu-container" >
               
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav" className='margin-20'  >
                        <Nav className='font-20' >
                            <Nav.Link href="/home"  className='text-contrast text-uppercase'>Inicio</Nav.Link>
                            <Nav.Link href="/servicios" className='text-contrast text-uppercase'>Servicios</Nav.Link>
                            <Nav.Link href="/about" className='text-contrast text-uppercase'>Nuestro equipo</Nav.Link>
                            <Nav.Link href="/especialidades" className='text-contrast text-uppercase'>Especialidades</Nav.Link>
                            <Nav.Link href="/testimoniales" className='text-contrast text-uppercase'>testimoniales</Nav.Link>
                            <Nav.Link href="/citas" className='text-contrast text-uppercase'>Citas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                
    
            </Navbar>


       
    )
}
