import React from 'react'
import { Container, Row ,Button} from 'react-bootstrap'
import "./Home.scss";
import diente1 from "../../assets/img/dientes/alpha.png"

export default function Section2() {

  
    return (
        <Container  className="content mt-5 mb-5">
            <Row>
                {/* <img src={diente1} className="img-logo" /> */}
                <h1 className="d-flex justify-content-center align-items-center mx-auto text-primary">más salud</h1>
                <h1 className=" d-flex justify-content-center align-items-center mx-auto text-secondary mb-5">más sonrrisas</h1>
                <p className='text-primary'>Somos la clínica dental de Tepic, Nayarit con mayor éxito en el cuidado integral de la salud y belleza para toda la familia. </p>
                <p  className='text-primary'>Somos los mejores en nuestro ramo, contamos con el personal mas capacitado en todas sus áreas, equipo de vanguardia de última generación y un moderno laboratorio dental.</p>
                <Button className='bt-size-md'>Lamanos</Button>
            </Row>
        
        </Container>
    )
}