import React from 'react'
import { Container, Row ,Button} from 'react-bootstrap'
import "./Home.scss";
import hero from "../../assets/img/dientes/hero.png"

export default function Section1() {

  
    return (
        <Container name="section1" className="content d-flex  container-fluid   gb-primary-img ">
            <div className='row overlay d-flex flex-row'>
                <h1 className="bold d-block text-light justify-content-center mx-auto">Tu clínica odontológica integral</h1>
                {/* <button className='btn btn-primary'>Conocenos</button> */}
                <h2 className="display-4 display-md-3 display-lg-2 text-contrast mt-5 mt-md-0">Bienvenido a 
                <span className="bold d-block">Dental healt</span></h2>
                
            </div>
        
        </Container>
    )
}