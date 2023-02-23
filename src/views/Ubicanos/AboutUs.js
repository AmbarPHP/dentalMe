import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

//TODO: borrar, siempre no me gusto

export default function AboutUs() {
	return (
		<Container >
			<Row>
				<Col className="col-lg-12  mx-5">


					<h1 className='text-secondary my-5 mx-5'>CLINICA DENTAL HEALT SMILE </h1>

					<p className='bold text-primary font-20 my-5 mx-5' >
						En Medica-Dental, somos una clínica dental integral.  Nos especializamos en cualquier tratamiento, desde una extracción simple, hasta un tratamiento complicado y estético.    Ahora estamos en el mejor lugar de Tepic para brindar la mejor atención a lo mejores precios.</p>


				</Col>
				<Col lg={{ span:3, offset:1}}>

				<h3 className='text-secondary text-uppercase my-5'> Dirección:</h3>
				
					
						<p className='font-20'>Llámanos y programa tu cita en los horarios disponibles.</p>
						<p>Av. Cultura No. 255A</p>
						<p>Col. Universidad Tepic, Nay.</p>
						<p>CP 63138</p>
					
				</Col>
			</Row>
		</Container>

	)
}
