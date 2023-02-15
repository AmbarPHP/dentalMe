import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCalendarAlt,FaBriefcaseMedical,FaClipboardList} from 'react-icons/fa';

export default function Section2() {


    return (
        //position-relative agregar para sobre poner al hero
        <Container name="section2-home" className="content ">
           
            <Row style={{ height: '310px'}}>

                <Col lg={3} md={12} className='bg-primary'>
                    <Row className='' >
                    <h5 className=' text-light  bold mt-5 text-uppercase mx-5'> 
                    <span className='text-contrast'>
                        <FaCalendarAlt />
                        </span  > Horario apertura 
                        </h5>
                        <hr className='text-light me-5 mb-5'/>                       
                        <ul className='text-light text-big-18  mx-2 '>
                            <li className='text-light'>Lun a Vie 9-2 PM y 4 a 8 PM</li>
                            <li className='text-light'>Sábado 9-2 PM y 4 a 8 PM</li>
                            <li className='text-light'>Domingo Cerrado , solo emergencias</li>
                        </ul>
                    </Row>
                   
                </Col>
                <Col lg={3} md={12} className='gradient-primary-dark '>
                    <Row  className=''>
                    <h5 className=' text-light  bold mt-5 text-uppercase mx-5'> 
                    <span className='text-contrast'>
                        <FaClipboardList />
                        </span> <span className='me-5' >Disponibilidad</span> 
                        </h5>
                        <hr className='text-light me-5 mb-5'/>   
                        <p className='text-light  mx-2 font-1rem'>Si necesita ayuda!!, elige tu dentista, agende con tiempo, los dentistas tiene disponibilidad limitada a los horarios de servicio</p>
                    </Row>
                   
                </Col>
                <Col lg={3} md={12} className='gradient-primary-dark '>
                    <Row className='' >
                    <h5 className=' text-light  bold mt-5 text-uppercase mx-5'>
                         <span className='text-contrast '>
                        <FaClipboardList />
                        </span> Citas 
                        </h5>
                        <hr className='text-light me-5 mb-5'/>   
                        <p className='text-light mx-2 font-1rem'>Agenda tu cita de valoración sin costo y con gusto te atenderemos 📲311 269 7923</p>
                    </Row>
                   
                </Col>
                <Col lg={3} md={12} className='bg-primary '>
                    <Row className=''>
                    <h5 className=' text-light  bold  mt-5 text-uppercase'> 
                    <span className='text-contrast '>
                        <FaBriefcaseMedical />
                        </span> Casos de Emergencias 
                        </h5>
                        <hr className='text-light me-5 mb-5'/>  
                        <p className='text-light mx-2 font-1rem'>01800-1234-567</p>
                        <p  className='text-light'> llamenos y con gusto lo antendemos</p>
                    </Row>
                   
                </Col>
            </Row>

        </Container>
    )
}
