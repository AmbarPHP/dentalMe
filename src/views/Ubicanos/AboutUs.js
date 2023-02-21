import React from 'react'

import {Container, Row, Col} from 'react-bootstrap';

//TODO: borrar, siempre no me gusto

export default function AboutUs() {
  return (
    <div className="section">
    <Row>
				  <Col className="col-md-6  px-4">
					
					  <hr className="short"/>
					  <h3 className='text-secondary mb-5'>CLINICA DENTAL </h3>
			
					  <p  className='bold text-primary font-20 ' >
						En Medica-Dental, somos una clínica dental integral.  Nos especializamos en cualquier tratamiento, desde una extracción simple, hasta un tratamiento complicado y estético.Ahora estamos en el mejor lugar de Tepic para brindar la mejor atención a lo mejores precios.</p>
            <hr className="short"/>
					  {/* <a className="btn btn-secondary" href="https://www.vozdental.mx/nosotros/" role="button">CONÓCENOS</a> */}
					
				  </Col>
				  <Col className="col-md-6 px-4">
					
					  	<div className="shedule-front">
              			
					  <hr className="short"/>
					  <h3 className='text-secondary text-uppercase mb-5'> Horarios de atención</h3>
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
  </div>

  )
}
