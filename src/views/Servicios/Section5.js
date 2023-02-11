import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import diente1 from "../../assets/img/dientes/diente1.png"
import bg_diente1 from "../../assets/img/dientes/background_diente1.png";
import bg_diente2 from "../../assets/img/dientes/background_diente2.png";
import bg_diente3 from "../../assets/img/dientes/background_diente3.png";
import bg_diente4 from "../../assets/img/dientes/background_diente4.png";

export default function Section5() {
  return (
    <Container name="section2" className="content" style={{paddingBottom:4+"rem", paddingTop:4+"rem"}}>
        <Row className='gb-light' >
            <Col>
             <img className='img-responsponsive' src={bg_diente1}/>
            </Col>
            <Col>
            <img src={diente1}/>
            <h3 className='text-primary bold'> Servicios Esteticos </h3> 
                    <ul className='lead'>
                        <li>Blanqueamientos</li>
                        <li>Carilla de porcelana</li>
                        <li>Carillas directas de resina</li>
                        <li>Incrustaciones al color</li>
                        <li>Coronas en cerámica libres de metal</li>
                        <li>Cirugía periodontal (cirugía de Encias)</li>
                    </ul>
                    
            </Col>
            <Col>
            <img src={diente1}/>
            <h3 className='text-primary bold'> Restauracion </h3> 
                    <ul className='lead'>
                        <li>Blanqueamientos</li>
                        <li>Carilla de porcelana</li>
                        <li>Carillas directas de resina</li>
                        <li>Incrustaciones al color</li>
                        <li>Coronas en cerámica libres de metal</li>
                        <li>Cirugía periodontal (cirugía de Encias)</li>
                    </ul>
                    
            </Col>
            <Col>
             <img className='img-responsponsive' src={bg_diente2}/>
            </Col>
          
        
        </Row>
        <Row className='gb-light'>
            
            <Col>
             <img className='img-responsponsive' src={bg_diente3}/>
            </Col>
            <Col>
            <img src={diente1}/>
            <h3 className='text-primary bold'> Prótesis fijas y removibles </h3> 
                    <ul className='lead'>
                    <li>Coronas de porcelana en zirconia</li>
                        <li>Coronas de porcelana en alúmina</li>
                        <li>Coronas de porcelana prensada </li>
                        <li>Coronas en metal y oro porcelana</li>
                        <li>Prótesis total o parcial </li>
                        <li>Guardas oclusales con activación </li>
                        <li>Implantes dentales de última generación</li>
                    </ul>
                    
            </Col>
            <Col>
            <img src={diente1}/>
            <h3 className='text-primary bold'> Otros servicios generales </h3> 
                    <ul className='lead'>
                        <li> <span> <img src={diente1} className="tamaño-diente" /></span> Otros servicios generales</li>
                        <li> <span> <img src={diente1} className="tamaño-diente" /></span> Rayos X</li>
                        <li> <span> <img src={diente1} className="tamaño-diente" /></span> Diagnóstico clínico con cámara intraoral </li>
                        <li><span> <img src={diente1} className="tamaño-diente" /></span> Rayo Láser Terapéutico </li>
                      
                    </ul>
                    
            </Col>
            <Col>
             <img className='img-responsponsive' src={bg_diente4}/>
            </Col>
          
        
        </Row>
    </Container>
  )
}
