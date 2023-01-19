import React from 'react';
import logo from "../assets/img/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row, Col} from 'react-bootstrap';
import "./Header.scss";


export default function Header2() {
    return (
        <div >


            <Navbar  className="st-nav-menu  fixed-top " id="main-nav">
                <Container >
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home">
                            <img src={logo} className="logo" alt="" />
                        </Navbar.Brand>

                        <Nav.Link className="text-contrast" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="#features">Blocks</Nav.Link>
                        <Nav.Link className="text-white" href="#pricing">Peges</Nav.Link>
                        <Nav.Link className="text-white" href="#home">UI Components</Nav.Link>
                        <Nav.Link className="text-white" href="#features">Blog</Nav.Link>
                        <Nav.Link className="text-white" href="#pricing">Shop</Nav.Link>

                    </Nav>

                    {/* <li className="st-nav-section st-nav-secondary nav-item">
            <a className="btn btn-rounded btn-outline me-3 px-3" href="login.html" target="_blank">
            <i className="fas fa-sign-in-alt d-none d-md-inline me-md-0 me-lg-2">
            </i> <span className="d-md-none d-lg-inline">Login</span> </a>
            <a className="btn btn-rounded btn-solid px-3" href="signup.html" target="_blank">
            <i className="fas fa-user-plus d-none d-md-inline me-md-0 me-lg-2">
            </i> <span className="d-md-none d-lg-inline">Signup</span>
            </a>
            </li> */}

                    {/* <!-- Mobile Navigation --> */}
                    {/* <li className="st-nav-section st-nav-mobile nav-item">
            <button className="st-root-link navbar-toggler" type="button">
            <span className="icon-bar">
            </span> <span className="icon-bar">
            </span> <span className="icon-bar">
            </span>
            </button>
            <div className="st-popup">
            <div className="st-popup-container">
                <a className="st-popup-close-button">Close</a>

                
            </div>
            </div>
            </li> */}


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
