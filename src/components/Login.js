import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import "./Login.scss";
import {FaArrowCircleRight } from 'react-icons/fa';
import database from "./database.json";

export default function Login() {

    const [ErrorMessage, SetErrorMenssage] = useState({});
    const [isLoging, SetIsLoging] = useState(false);
    const [datos, setDatos] = useState({
        user:"", password:"",
    });

    const errors = {
        name: "user",
        message: "Invalid username",
        password: "Invalid password"
    }

    

    function renderErrorMenssage(name) {

        name === ErrorMessage.name && (
            <div> {ErrorMessage.message}</div>
        )
    }

    function reviewPass(datos){

        const found = database.find((item)=>{
            console.log("los passwords ",datos.password, item.password," los usuarios: " ,datos.user, item.username);
            return item.user===datos.username && item.password===datos.password
        });
        //console.log("valor de found ",found);  
        return found 
            
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('enviando datos...' + datos.user + ' ' + datos.password);
        const resp=reviewPass(datos);
        resp? SetIsLoging(true):SetIsLoging(false);
    }

    function handleChange(event){    
        //  console.log("name",event.target.name)
        //  console.log("value", event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

    }

    const renderForm = (
        <div className="col-md-6 col-lg-5 mx-auto d-flex justify-content-center align-items-centerimage-background cover">
            <div className='d-flex flex-column'>
            <h1 className="text-darker bold">Login</h1>
            <p className="text-secondary mt-0 mb-4 mb-md-6">No tienes una cuenta aún? 
            <a href="registration" className="text-primary bold">  Creala aquí</a>
            </p>
           
            <form onSubmit={handleSubmit} >
                <div>
                    <label className='form-label' htmlFor=""> Username</label>
                    <input type="text" name="user" className="form-control form-control-rounded" 
                    placeholder="Registra tu nombre de usuario" onChange={handleChange} required />

                </div>
                <div>
                    <label  className='form-label' htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control form-control-rounded"  
                     placeholder="Registra tu contraseña" onChange={handleChange} required />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between mt-5">
                    <a href="forgot.html" className="text-dark small">Forgot your password?</a>
                   
                    <div className="text-success success"></div>
                    <div className="text-danger failed"></div>
                    {/* <button type="submit" className="btn btn-primary">Enviar</button> */}
            
                    <button type="submit" className="btn btn-primary btn-rounded">Login 
                        <span> </span><FaArrowCircleRight />
                    </button>
                    </div>
                         

            </form> 
            </div>
            
            
           
        </div>
    )

    const succesfullyLogged=(
       
        <div className="col-md-6 col-lg-5 mx-auto d-flex justify-content-center align-items-centerimage-background cover">
            <div className='d-flex flex-column'>
                <h1 className="text-darker bold">Login</h1>
                <h2>User is succesfully logged in</h2>
            </div>
        </div>
    )
   
    const left_side=(
       
            <div className="col-md-6 col-lg-7 d-flex h-100 justify-content-center align-items-center  image-background cover col_left flex-column w-90" >
                <div className='overlay'>
                <h2 className="display-4 display-md-3 display-lg-2 text-contrast mt-5 mt-md-0">Bienvenido a 
                <span className="bold d-block">Dental healt</span>
                </h2>
                <p className="lead text-contrast">Login to your account</p>
                
                </div>
               
            </div>
         
    )

    return (
        <div className="d-flex w-100 " >
            <div className="row align-items-center mx-auto ">
                {left_side}
                {isLoging ? succesfullyLogged : renderForm}
            </div>
        </div>
    )
}
