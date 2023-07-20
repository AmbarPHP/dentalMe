import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function PackageCard({ title, price, items, color }) {
    return (
        <div className={`package-card bg-${color} mx-3 mb-5`}>
            <div style={{ height: '70%', alignItems: 'center' }}>
                <h1 className={`text-${color === 'light' ? 'primary' : 'light'} mt-3`}>
                    {title} <span className="text-secondary bold ms-2">1</span>
                </h1>
                <ul className={`lead mx-3 ${color === 'light' ? 'text-primary' : 'text-light'}`}>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div style={{ height: '30%', alignItems: 'center' }}>
                <p className={`text-center text-${color === 'light' ? 'primary' : 'light'} font-2rem bold`}>
                    ${price}
                </p>
            </div>
        </div>
    );
}

export default function Section1() {
    return (
        <div name="section1-servicios" className="gradient-primary-dark mt-0 pt-5 pb-5">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center mx-0" lg={12}>
                        <h3 className="text-light bold mb-5 font-3rem">Con nuestros paquetes ahorras</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center mx-0" style={{ backgroundColor: "red" }} sm={12} md={12} lg={12}>
                        <h3 className="text-light bold my-5">Haz una cita hoy mismo, con nosotros ahorras tiempo y dinero</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="bg-light px-5 mb-5">
                        <PackageCard
                            title="Paquete"
                            price={950}
                            items={['Consulta', 'Radiografía', 'Limpieza']}
                            color="light"
                        />
                    </Col>
                    <Col className="bg-primary mx-3 mb-5">
                        <PackageCard
                            title="Paquete"
                            price={3600}
                            items={['Blanqueamiento', 'Limpieza', 'Pulido de dientes']}
                            color="primary"
                        />
                    </Col>
                    <Col className="bg-light mx-3 mb-5">
                        <PackageCard
                            title="Paquete"
                            price={600}
                            items={['Limpieza', 'Pulido de dientes', 'Aplicacion de fluor']}
                            color="light"
                        />
                    </Col>
                    <Col className="bg-primary  mx-3 mb-5 mx-5">
                        <PackageCard
                            title="Paquete"
                            price={600}
                            items={['Consulta', 'Valoracion', 'Camara intraoral', 'Radiografía']}
                            color="primary"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
