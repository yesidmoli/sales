
import { Fragment, useState } from "react";
import Header from "../layout/Header";

import Swal from 'sweetalert2';
import { withRouter } from "react-router-dom";

//import axios
import Axios from "../../config/axios";

import { useAuth } from "../context/AuthContext";

function NewProduct(props){

    const {token} = useAuth()
    //create empty state of product
    const [product, dataProduct] = useState({
        "name": '',
        "amount_available": '',
        "unit_price": '',
        "description": ''
    });


     //almacena un nuevo producto a la BD
     const addProduct = async e =>{
        e.preventDefault();

        //se crea el formato
        const formData = new FormData();
        formData.append('name',product.name);
        formData.append('amount_available',product.amount_available);
        formData.append('unit_price', product.unit_price);
        formData.append('description', product.description);

         //almacena el producto a la BD
    try{
        const res = await Axios.post('api/products/', formData, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });

          if(res.status===201){
            await Swal.fire(
                'Creado correctamente la venta',
                product.name,
                'success'
            )
          }
          //se redirecciona
          props.history.push('/');

    }catch(error){
        console.log(error.response)
        console.log(error);
        Swal.fire({
            type:'error',
            title:'Hubo un error',
            text:'Intente de nuevo'
        })
    }

    }

    //leer datos del formulario
    const readProductInformation = e => {
        dataProduct({
            //obtener una copia del state y agregar un nuevo producto
            ...product,
            [e.target.name]: e.target.value
        })
        console.log(product)
    }

    return(
    <Fragment>
        
        <Header
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 32 27" fill="none">
            <path d="M1 13.5H31M1 13.5L13.5 1M1 13.5L13.5 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>} 
            title="Agregar Venta"/>
        
        <section class="registros-info"> 
        <form class="form-registros"  onSubmit={addProduct}>
                    <label for="nombre">Nombre de la venta <span class="required">*</span></label>
                    <input type="text" id="nombre" name="name" class="input-global" placeholder="Nombre de la Venta" onChange={readProductInformation}/>

                    <label for="disponible">Cantidad Disponible <span class="required">*</span></label>
                    <input type="number" id="disponible" name="amount_available" class="input-global" placeholder="Ingrese la Cantidad" onChange={readProductInformation}/>

                    <label for="precio">Precio Unitario <span class="required">*</span></label>
                    <input type="number" id="precio" name="unit_price" class="input-global" placeholder="Valor Venta" onChange={readProductInformation}/>

                    <label for="descripcion">Descripción <span class="required">*</span></label>
                    <textarea name="description" id="descripcion" cols="30" rows="10" className="input-global" placeholder="Descripción " onChange={readProductInformation}></textarea>
                    
                  
                    
                    <button class="btn btn-success">CREAR VENTA </button>
                
                </form>
    </section>


    </Fragment>
        
        )
};
export default withRouter(NewProduct);