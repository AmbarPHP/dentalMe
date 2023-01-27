import React from 'react'

import {Container, Row, Col} from 'react-bootstrap';

import horario from "../../assets/img/horario.png"


export default function AboutUs() {
  return (
    <Container className="section">
    <Row>
				  <Col className="col-md-6  p-4">
					
					  <hr className="short"/>
					  <h6 style={{padding:"1%"}}>CLINICA DENTAL </h6>
			
					  <p style={{padding:"1%"}} className='text-primary text-justify' >En Medica-Dental, somos una clínica dental integral.  Nos especializamos en cualquier tratamiento, desde una extracción simple, hasta un tratamiento complicado y estético.Ahora estamos en el mejor lugar de Tepic para brindar la mejor atención a lo mejores precios.</p>
            <hr className="short"/>
					  {/* <a className="btn btn-secondary" href="https://www.vozdental.mx/nosotros/" role="button">CONÓCENOS</a> */}
					
				  </Col>
				  <Col className="col-md-6 p-4">
					
					  	<div className="shedule-front">
							

                {/* <div className="clock">
                <img src={horario} alt="Llámanos y programa tu cita en los horarios disponibles."/>
                </div>  */}
              			
					  <hr className="short"/>
								<h6  className='bold text-uppercase '>Horarios de atención</h6>
								<p>Llámanos y programa tu cita en los horarios disponibles.</p>
                <p>Av. Cultura No. 255A</p>
                <p>Col. Universidad Tepic, Nay.</p>
                <p>CP 63138</p>
							
							<div className="span-schedule">
								<ul className="list-group">
									<li className="list-group-item">
									<span className="text-primary ">10:00 AM - 8:00 PM </span>
									<span className="text-primary text-uppercase ">    Lunes a Viernes</span>
									</li>
								
									<li className="list-group-item">
									<span className="text-primary  ">10:00 AM - 3:00 PM </span>
									<span className="text-primary text-uppercase ">    Sábado</span>
									</li>
								
									<li className="list-group-item">
									<span className="badge text-primary">CERRADO</span>
									<span className="text-primary text-uppercase ">    Domingo</span>
									</li>
								</ul>
							</div>
              <hr className="short"/>
						</div>
					  
				  </Col>
		</Row>
  </Container>

  )
}
