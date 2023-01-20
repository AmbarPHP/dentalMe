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
        <div >
            <Navbar className="st-nav-menu" expand="lg" id="main-nav">
   
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} className="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className='text-contrast'>INICIO</Nav.Link>
                                <Nav.Link href="#link" className='text-contrast'>SERVICIOS</Nav.Link>
                                <Nav.Link href="#link" className='text-contrast'>NOSOTROS</Nav.Link>
                                <Nav.Link href="#link" className='text-contrast'>Contacto</Nav.Link>
                                <NavDropdown title="Dropdown" className='text-contrast' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className='text-secondary'>Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className='text-secondary'>
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className='text-secondary'>Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className='text-secondary'>
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
    
            </Navbar>



            <Container className='my-0'>
                <Row >
                    <Col className="col-md-6">
                        <h1 className="bold display-md-4 text-contrast mb-4">About DashCore</h1>
                        <p className="lead text-contrast">DashCore is an all purpose HTML template, it's packed with a multiple demos and tech stacks to help you get started with your project.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
