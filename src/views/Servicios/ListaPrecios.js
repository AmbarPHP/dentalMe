import { React, useEffect, useState } from 'react';
import data from "./data.json";
import thumb from "../../assets/img/dientes/diente1.png"

export default function ListaPrecios() {

  // const getData=()=>{

  //     fetch('./data.json'
  //     ,{
  //       headers : { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }
  //     }
  //     )
  //       .then(function(response){
  //         console.log("respuesta :",response)
  //         return data=response.json();
  //       })
  //       .then(function(myJson) {
  //         console.log(myJson);
  //       });
  //   }
  //   useEffect(()=>{
  //     getData()
  //   },[])
  console.log("data:", data);

  return (
    <div className="d-flex w-100 " >
      <div className="row align-items-center mx-auto  ">
        <h1 className='text-primary d-flex justify-content-center mt-5 mb-5'>Servicios </h1>

        {
          data && data.length > 0 && data.map((item) =>
            <div className='col-md-4 col-lg-4 mx-auto d-flex justify-content-center align-items-centerimage-background cover'>
              <div className='d-flex flex-column'> 
                <img src={thumb} styles="height:10px"/>
                <h3><span> {item.descripcion} </span></h3>
                <p>Los precios son validos hasta el 1 de septiembre</p>
                <p>Incluye revision y tiene garantia </p>
                <h2>${item.precio}</h2>
              </div>
            </div>

          )
        }
      </div>
    </div>
  );
}
