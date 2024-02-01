import React, { Fragment,  useState } from "react"


import Swal from "sweetalert2"
import Axios from "../../config/axios"

import { withRouter } from "react-router-dom";
import Header from "../layout/Header"
import { useAuth } from "../context/AuthContext";
// import  { useState } from "react";
// import Select from "react-select";



// const options = [
//     { value: "cliente1", label: "Cliente 1" },
//     { value: "cliente2", label: "Cliente 2" },
//     { value: "cliente3", label: "Cliente 3" },
//     { value: "Yesid", label: "Cliente 3" },
//     // Agrega más opciones según sea necesario
//   ];


function NewClient({history}){

    const {token} = useAuth()
  
        
    // const [selectedOption, setSelectedOption] = useState(null);
  
    // const handleChange = (selectedOption) => {
    //   setSelectedOption(selectedOption);
    // }

    const [clients, dataClient] = useState({
            "name": '',
            "cellular": '',
            "type_document": '',
            "document": ''
    }) 


    //leer datos del formulario

    const updateState = e =>{

        //almacenando lo que el usuario escribe en el state

        dataClient({
            //se obtiene copia del state actual
            ...clients,
            [e.target.name]: e.target.value
        })
    }
    //añade al rest api nuevo cliente
    const addClient = async e =>
    {
        //prevent default para realizar acciones sobre el formulario
        e.preventDefault();
       
    try {
        const res = await Axios.post('/api/clients/', clients, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });

        if (res.status === 201) {
            await Swal.fire(
                'Cliente agregado correctamente',
                clients.name,
                'success'
            );
            // Redirecciona solo si la alerta se cerró correctamente
            history.push('/list-clients');
        }
} catch (error) {
    console.error('Error en la solicitud:', error);
    Swal.fire({
        icon: 'error',
        title: 'Ya existe un cliente con este documento',
        text: 'Intente nuevamente',
    });

}

    }

    const validateForm = () =>{

        //se hace el destructuring

        const {name, cellular, type_document , document} = clients;

        //se valida que el state tenga contenido
        let valid = !name.length || !cellular.length || !type_document.length || !document.length 

        return valid;
    }

    return(
        <Fragment>
            <Header 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 32 27" fill="none">
            <path d="M1 13.5H31M1 13.5L13.5 1M1 13.5L13.5 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>}
            title="Nuevo Cliente"
            />

    <section class="registros-info"> 
        <form class="form-registros" onSubmit={addClient}>
                    <label for="valor">Nombre <span class="required">*</span></label>
                    <input type="text" id="valor" name="name" class="input-global" placeholder="Nombre del Cliente" onChange={updateState}/>

                    <label for="ceular">Celular <span class="required">*</span></label>
                    <input type="number" id="ceular" name="cellular" class="input-global" placeholder="Numero Célular" onChange={updateState}/>

                    <label for="tipo">Tipo de Documento <span class="required">*</span></label>
                    <div class="input-global client-escoge">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.2 13.2H25.2C19.898 13.2 15.6 17.4981 15.6 22.8V37.2C15.6 42.5019 19.898 46.8 25.2 46.8H37.2C42.5018 46.8 46.8 42.5019 46.8 37.2V22.8C46.8 17.4981 42.5018 13.2 37.2 13.2Z" stroke="black" stroke-opacity="0.5" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38.4 24.6C39.394 24.6 40.2 23.7941 40.2 22.8C40.2 21.8059 39.394 21 38.4 21V24.6ZM24 21C23.0058 21 22.2 21.8059 22.2 22.8C22.2 23.7941 23.0058 24.6 24 24.6V21ZM38.4 31.8C39.394 31.8 40.2 30.9941 40.2 30C40.2 29.0059 39.394 28.2 38.4 28.2V31.8ZM24 28.2C23.0058 28.2 22.2 29.0059 22.2 30C22.2 30.9941 23.0058 31.8 24 31.8V28.2ZM31.2 39C32.194 39 33 38.1941 33 37.2C33 36.2059 32.194 35.4 31.2 35.4V39ZM24 35.4C23.0058 35.4 22.2 36.2059 22.2 37.2C22.2 38.1941 23.0058 39 24 39V35.4ZM38.4 21H24V24.6H38.4V21ZM38.4 28.2H24V31.8H38.4V28.2ZM31.2 35.4H24V39H31.2V35.4Z" fill="black" fill-opacity="0.5"/>
                    </svg>

                        <select id="tipo" name="type_document"  class="input-cliente" onChange={updateState}>
                            <option selected>Seleccione tipo Documento</option>
                            <option value="CC">CC</option>
                            <option value="TI">TI</option>
                        </select>
                    </div>
                    <label for="documento">Documento <span class="required">*</span></label>
                    <div class="input-global client-escoge">
                    <svg width="60" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 29H0V22.6164C0 18.239 1.95 14.4088 4.8 12.4025C3.75 11.1258 3 9.30189 3 7.2956C3 3.28302 5.7 0 9 0C12.3 0 15 3.28302 15 7.2956C15 9.30189 14.4 11.1258 13.2 12.4025C16.05 14.4088 18 18.4214 18 22.6164V29ZM3 25.3522H15V22.6164C15 18.239 12.3 14.4088 9 14.4088C5.85 14.4088 3 18.239 3 22.6164V25.3522ZM9 3.46541C7.35 3.46541 6 5.10692 6 7.11321C6 9.1195 7.35 10.761 9 10.761C10.65 10.761 12 9.1195 12 7.11321C12 5.10692 10.65 3.46541 9 3.46541ZM36 23.5283H21V19.8805H36V23.5283ZM31.5 16.2327H21V12.5849H31.5V16.2327ZM36 8.93711H21V5.28931H36V8.93711Z" fill="black" fill-opacity="0.5"/>
                    </svg>
                    <input type="number" id="documento" name="document" class="input-document" placeholder="Numero Célular" onChange={updateState}/>
                    </div>

                    {/* <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}
      placeholder="Buscar cliente..."
    /> */}
                    
                    <button class="btn btn-success" disabled={validateForm()}>CREAR </button>
                
                </form>
    </section>

        </Fragment>
    )
}
export default withRouter(NewClient);