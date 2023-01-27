import React from 'react';
import doc1 from "../../assets/img/Doctores/doc1.png";
import doc2 from "../../assets/img/Doctores/doc2.png";
import doc3 from "../../assets/img/Doctores/doc3.png";
import doc4 from "../../assets/img/Doctores/doc4.png";

export default function Nosotros2() {
    return (
        <div className='row'>
            <h1 className='text-primary d-flex justify-content-center'>Nuestro Equipo</h1>
            <div className='col col-lg-4'>
                <img src={doc1} alt="" />
                <p className='text-secondary'>

                   
                    Isidro Carrillo
                    Fundador de Mi DCA.

                </p>
                <p>

                    Odontólogo con más de 20 años de experiencia.

                </p>
                <p>

                    Certificado por 20 años consecutivos por la Asociación Dental Mexicana.
                </p>
                <p>


                    Médico amable, dedicado, cuidadoso de los detalles y apasionado por su trabajo y el bienestar de sus pacientes.
                </p>
            </div>
            <div className='col col-lg-4'>
                <img src={doc1} alt="" />
                <p className='text-secondary'>

                    
                    Hiram Navarrete
                    Fundador de Mi DCA.

                </p><p>

                    Odontólogo con más de 20 años de experiencia.

                </p><p>

                    Certificado por 20 años consecutivos por la Asociación Dental Mexicana.
                </p><p>

                Siempre trabaja por la promoción de la salud bucal y la prevención de cualquier afección relacionada.
                </p>
            </div>
            <div className='col col-lg-4'>
                <img src={doc1} alt="" />
                <p className='text-secondary'>

                    
                Ana Sánchez 
                   Especialista

                </p><p>

                Odontóloga especialista en Estomatología Pediátrica por la Universidad Autónoma de San Luis Potosí. Desde entonces, ejerce como Odontopediatra.

                </p><p>

                Es tranquila, empática y comprometida. Siempre buscando que la primera experiencia con el dentista de sus pequeños pacientes sea agradable y pacífica.
                </p>
            </div>
        </div>
    )
}
