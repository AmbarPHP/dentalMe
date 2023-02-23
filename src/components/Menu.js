import React, { useState, useRef, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import "./Menu.scss";




export default function Menu() {
      const stickyRef = useRef(null);
     const [sticky, setSticky]=useState(false);
     const [offset, setOffset]=useState(0);
     const [variant, setVariant]=useState('');

      useEffect(() => {
        const handleScroll = () => {
            
            const altura_hero=480;
            if(window.scrollY > altura_hero){
                        setSticky(true);
                        console.log("true",window.scrollY)
                        setOffset(window.scrollY);
                        setVariant(`position:'fixed ',top:${offset}`);
                        console.log("variant", variant);
                    }
                    else {
                        setSticky(false);
                        console.log("false",window.scrollY)
                    }

        };
        window.addEventListener('scroll', handleScroll);
  
      }, [setSticky,offset]);

      

    return (
        // 
        //className={`${sticky && 'fixed'}`} //"" menu-container
        //style={{position:'fixed ',top:80}}
        //style={{position:'fixed ',top:80}} 
        //5:44 style={{variant}} 
            <Navbar  expand="lg"   className={`${sticky ?' fixed1 ':'fixed-before'}`} style={{position:'fixed '}}  >
               
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav" className='margin-20'  >
                        <Nav   className='font-20' >
                            <Nav.Link href="/home"  className='text-light text-uppercase'>Inicio</Nav.Link>
                            <Nav.Link href="/servicios" className='text-light text-uppercase'>Servicios</Nav.Link>
                            <Nav.Link href="/about" className='text-light text-uppercase'>Nuestro equipo</Nav.Link>
                            <Nav.Link href="/ubicacion" className='text-light text-uppercase'>Ubicanos</Nav.Link>
                            <Nav.Link href="/testimoniales" className='text-light text-uppercase'>testimoniales</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                
    
            </Navbar>


       
    )
}
