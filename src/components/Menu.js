import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./Menu.scss";




export default function Menu() {

    const [sticky, setSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {

            const altura_hero = 380;
            if (window.scrollY > altura_hero) {
                setSticky(true);

            }
            else {
                setSticky(false);

            }

        };
        window.addEventListener('scroll', handleScroll);

    }, [setSticky]);



    return (

        <Navbar expand="lg" className={`${sticky ? ' fixed1 ' : 'fixed-before'}`}
            style={{ position: 'fixed ' }}  >


            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className='margin-20'  >
                <Nav className='font-20 p-1' >
                    <Nav.Link href="/home" className='text-light text-uppercase'>Inicio</Nav.Link>
                    <Nav.Link href="/servicios" className='text-light text-uppercase'>Servicios</Nav.Link>
                    <Nav.Link href="/about" className='text-light text-uppercase'>Nuestros Profesionales</Nav.Link>
                    <Nav.Link href="/ubicacion" className='text-light text-uppercase'>Ubicanos</Nav.Link>
                    <Nav.Link href="/testimoniales" className='text-light text-uppercase'>testimoniales</Nav.Link>

                </Nav>
            </Navbar.Collapse>


        </Navbar>



    )
}
