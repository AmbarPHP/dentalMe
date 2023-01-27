import React from 'react'
import { Container, Row ,Button} from 'react-bootstrap'
import "./Home.scss";
import hero from "../../assets/img/dientes/hero.png"

export default function Section1() {

  
    return (
        <Container  className="content">
            <div className='row bg-hero'>
                 <img src={hero} className="img-logo" /> 
                <h1 className="text-big mx-auto">Tu clínica odontologica integral</h1>
                <button className='btn btn-primary btn-lg'>Conocenos</button>
            </div>
        
        </Container>
    )
}