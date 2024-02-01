import Axios from "../../config/axios";
import Header from "../layout/Header";

import { withRouter } from "react-router-dom";
import { Fragment, useState } from "react";

import Swal from "sweetalert2";

import { useAuth } from "../context/AuthContext";
function Abonos({match, history}){

    const {token} = useAuth()
    const {id} = match.params;
    console.log("id del cliente", id)


    const [abonos, dataAbono] = useState({
        "sale_id": id,
        "value": '',
        "concept": ''
}) 

console.log("estos abonos", abonos)


//leer datos del formulario

const updateState = e =>{

    //almacenando lo que el usuario escribe en el state

    dataAbono({
        //se obtiene copia del state actual
        ...abonos,
        [e.target.name]: e.target.value
    })
}
//añade al rest api nuevo cliente
const addAbono = async e =>
{
    //prevent default para realizar acciones sobre el formulario
    e.preventDefault();
   
try {
    const res = await Axios.post('/api/abono/', abonos, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

    if (res.status === 200) {
        await Swal.fire(
            'Abono Existoso',
            res.data,
            'success'
        );
        // Redirecciona solo si la alerta se cerró correctamente
        history.push('/list-debts');
    }
} catch (error) {
console.error('Error en la solicitud:', error);
Swal.fire({
    icon: 'error',
    title: 'Upps sucedio algo inesperado',
    text: 'Intente nuevamente',
});

}

}


    return(
        <Fragment>
             <Header  icon={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 32 27" fill="none">
            <path d="M1 13.5H31M1 13.5L13.5 1M1 13.5L13.5 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>}
                  title={'Realizar Abono'}/>

            <section className="container">

                <form className="form-registros" onSubmit={addAbono}>
            <label for="precio">Valor<span class="required">*</span></label>
                    <input type="number" id="precio" name="value" class="input-global" placeholder="Valor(obligatorio)" onChange={updateState}/>

                    <label for="descripcion">Concepto <span class="required"></span></label>
                    <textarea name="concept" id="descripcion" cols="30" rows="10" className="input-global" placeholder="Concepto " onChange={updateState}></textarea>

                    <button class="btn btn-success">Guardar Cambios </button>
                    </form>
            </section>
            
        </Fragment>
    )
}
export default  withRouter(Abonos);