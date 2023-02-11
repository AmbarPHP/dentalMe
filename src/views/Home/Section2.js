import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCalendarAlt,FaBriefcaseMedical,FaClipboardList} from 'react-icons/fa';

export default function Section2() {


    return (
        <Container name="section2" className="content  position-relative  mb-5" style={{backgroundColor:"#ccc"}}  >
           
            <Row >

                <Col lg={3} md={12} className='gradient-primary-dark'>
                    <Row className='row-space' >
                    <h5 className='text-light mt-3 text-uppercase'> <span className='text-light'>
                        <FaCalendarAlt />
                        </span  > Horario apertura 
                        </h5>
                        <ul >
                            <li className='text-light'>Lunes a viernes 8:00-7:00pm</li>
                            <li className='text-light'>Sabado a viernes 9:00-2:00pm</li>
                            <li className='text-light'>Domingo a viernes Solo Emergencias</li>
                        </ul>
                    </Row>
                   
                </Col>
                <Col lg={3} md={12} className='bg-primary'>
                    <Row style={{ height: '70%', alignItems: 'center' }} >
                    <h5 className='text-light mt-3 text-uppercase'> <span className='text-light'>
                        <FaClipboardList />
                        </span> Disponibilidad 
                        </h5>
                        <p className='text-light'>Si necesita ayuda especifica con un doctor especifico, agende con tiempo, los dentistas tiene disponibilidad limitada a los horarios de servicio</p>
                    </Row>
                   
                </Col>
                <Col lg={3} md={12} className='gradient-primary-dark'>
                    <Row style={{ height: '70%', alignItems: 'center' }} >
                    <h5 className='text-light mt-3 text-uppercase'> <span className='text-light'>
                        <FaClipboardList />
                        </span> Citas 
                        </h5>
                        <p className='text-light'>El primer paso para una vida sana es agendar una cita. Por favor contactenos a nuestras oficinas o por telefono para tomar sus datos y concederle uan cita</p>
                    </Row>
                   
                </Col>
                <Col lg={3} md={12} className='bg-primary'>
                    <Row style={{ height: '70%', alignItems: 'center' }} >
                    <h5 className='text-light mt-3 text-uppercase'> <span className='text-light'>
                        <FaBriefcaseMedical />
                        </span> Casos de Emergencias 
                        </h5>
                        <p className='text-light'>01800-1234-567</p>
                        <p  className='text-light'> llamenos y con gusto lo antendemos</p>
                    </Row>
                   
                </Col>
            </Row>

        </Container>
    )
}
