import React, { useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import data from "./database.json";


function RegistrationForm() {

    const [datos, setDatos]=useState({
        user:"",
        apellido:"",
        password:"",
        c_password:"",
        email:"",

    });
    const [database, setDataBase]=useState(data)

    const handleChange=(event)=>{
        reviewData(event.target.name, event.target.value);
        setDatos({...datos,[event.target.name]:event.target.value })
        console.log(datos);
    }
    const handleSubmit=()=>{
        const resp1=reviewData();
        const resp=reviewPass();
        console.log("la respuesta", resp)
    }

    const register=()=>{
            console.log("El json",data)
    }
    const errorMenssge=(
        <div>Error</div>    
    )
    const reviewData=(name, value)=>{
        //(name!=""|| undefined) && (value!=""|| undefined);
        
    }

    const reviewPass=()=>{
        const found= database.find((item)=>{
            return datos.password===datos.c_password;
        });

       return found;
       
    }

    return (
        <div className="col-md-6 col-lg-5 mx-auto d-flex justify-content-center align-items-centerimage-background cover">
            <div className='d-flex flex-column'>
                <h1 className="text-darker bold">Registrar</h1>
                <div className="form" onSubmit={handleSubmit}>
                    <div className="form-body">
                        <div className="username">
                            <label className='form-label' htmlFor="user"> Primer nombre</label>
                            <input type="text" name="user" className="form-control form-control-rounded" 
                             placeholder="Registra tu nombre" onChange={handleChange} required />
                        </div>
                        <div className="lastname">
                            <label className='form-label' htmlFor="apellido"> Apellido </label>
                            <input type="text" name="apellido" className="form-control form-control-rounded" 
                             placeholder="Registra tu apellido" onChange={handleChange} required />
                        </div>
                        <div className="email">
                            <label className='form-label' htmlFor="email">Correo</label>
                            <input type="text" name="email" className="form-control form-control-rounded" 
                             placeholder="Registra tu correo" onChange={handleChange} required />
                        </div>
                        <div className="password">
                            <label className='form-label' htmlFor="password">Contraseña</label>
                            <input type="text" name="password" className="form-control form-control-rounded" 
                             placeholder="Registra tu contraseña" onChange={handleChange} required />
                        </div>
                        <div className="confirm-password">
                            <label className='form-label' htmlFor="c_password"> Confirmar contraseña</label>
                            <input type="text" name="c_password" className="form-control form-control-rounded" 
                             placeholder="Confirma tu contraseña" onChange={handleChange} required />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-rounded mt-5">Registrar
                        <span> <FaArrowCircleRight /> </span>
                    </button>

                </div>
            </div>
        </div>
    )
}
export default RegistrationForm;