import React, { Fragment, useEffect, useState  } from "react"
import Header from "../layout/Header";


import { format, isToday } from "date-fns";
import Select from "react-select";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";


import Axios from "../../config/axios";

import { useAuth } from "../context/AuthContext";

function NewSale({history}){

  const {token} = useAuth() 

  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedCliente, setSelectedCliente] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  // console.log(selectedCliente)


  const [sales , dataSales] = useState( {
      "amount": '',
      "value": '',
      "status": 'Pagada',
      "client": '',
      "product":''
})


  //Estado para botones
  const [opcionSeleccionada, setOpcionSeleccionada] = useState([]);

  const manejarSeleccion = (opcion) => {
          setOpcionSeleccionada(opcion);
          // Actualizar el estado status en el objeto sales
          dataSales(prevSales => ({
            ...prevSales,
            status: opcion ? opcion : '', 
          }));

          console.log(opcion)
  };


//Crea la venta en la bd 
 const addSale = async e =>{
  e.preventDefault();

  
  try {
    const res = await Axios.post('/api/sales/', sales, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
  
    if (res.status === 201) {
      await Swal.fire(
        'Se registró la venta',
        '',
        'success'
      );
      // Se redirecciona
      history.push('/');
    }
  } catch (error) {
    console.log(error.response);
    Swal.fire({
      icon: 'error',
      title: 'Hubo un error',
      text: error.response.data.error,
    });
    console.log(error);
  
    if (error.response && error.response.status === 400) {
      const data = error.response.data;
  
      // Definir mensajes personalizados en el frontend
      const customMessages = {
        amount: 'Introduzca un número entero válido.',
        client: 'Por favor, seleccione un cliente.',
        product: 'Por favor, seleccione una venta.',
        status: 'Seleccione el estado de la venta: "Pagada" o "A Crédito".',
        value: 'Introduzca un número válido con hasta dos decimales.',
      };
  
      // Procesar los mensajes de error usando los personalizados
      Object.keys(data).forEach((field) => {
        const errorMessages = data[field];
        if (Array.isArray(errorMessages) && errorMessages.length > 0) {
          const errorMessage = customMessages[field] || errorMessages[0];
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: `${errorMessage}`,
          });
        }
      });
    } else {
      // Manejo de otros errores...
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error al procesar la solicitud. Verifica los campos y vuelve a intentarlo.',
      });
    }
  }
 }  

 //leer datos del formulario
 const readSaleInformation = e => {
  dataSales({
      //obtener una copia del state y agregar un nuevo producto
      ...sales,
      [e.target.name]: e.target.value
  })
  console.log(sales)
}

// Función para manejar el cambio en el cliente
const handleClientChange = selectedOption => {
  setSelectedCliente(selectedOption);
  dataSales(prevSales => ({
    ...prevSales,
    client: selectedOption ? selectedOption.value : '', 
  }));
};

// Función para manejar el cambio en el producto
const handleProductChange = selectedOption => {
  setSelectedProduct(selectedOption);
  dataSales(prevSales => ({
    ...prevSales,
    product: selectedOption ? selectedOption.value : '', 
  }));
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientsResponse, productsResponse] = await Promise.all([
          Axios.get('/api/clients-list/', {
            headers: {
              Authorization: `Token ${token}`,
            },
          }),
          Axios.get('/api/products/', {
            headers: {
              Authorization: `Token ${token}`,
            },
          }),
        ]);

        setClients(clientsResponse.data);
  
        setProducts(productsResponse.data);
      

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  



    //formatear y obtener la fecha
    const today = new Date();
    const formattedDate = isToday(today)
        ? `   ${format(today, "d 'de' MMMM")}`
        : format(today, "d 'de' MMMM");


  
    //Estilos personalizados select
    const customStyles = {
      control: (provided) => ({
        ...provided,
        border: 'none',
        outline: 'none', // Quitar el borde
        // Quitar la sombra
        '&:hover': {
          border: 'none', // Quitar el borde al pasar el ratón
        },
        
      }),

    }

    return(
        
        <Fragment>
            <Header
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 32 27" fill="none">
            <path d="M1 13.5H31M1 13.5L13.5 1M1 13.5L13.5 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>} 
            title="Nueva Venta"/>

            <section class="registros-info">
            <div class="nav">
                <input class="input-fecha" type="datetime" name="" id="" value={formattedDate} readonly />
                <div class="input-fecha">
                <button
        className={`btn-pagada ${opcionSeleccionada === 'Pagada' ? 'btn-seleccionado-pagado' : ''}`}
        onClick={() => manejarSeleccion('Pagada')}
      >
        Pagada
      </button>
      <button
        className={`btn-credito ${opcionSeleccionada === 'A Crédito' ? 'btn-seleccionado-credito' : ''}`}
        onClick={() => manejarSeleccion('A Crédito')}
      >
        Crédito
      </button>
                </div>
            </div>

            <form class="form-registros"  onSubmit={addSale}>
                

                <label for="concepto">Concepto <span class="required">*</span></label>

                
                <div className="input-global select-react">
                <Select 
                  className="select"
                  styles={customStyles}
                  placeholder="Seleccione la venta..."
                  options={products.map(product => ({
                    value: product.id,
                    label: product.name,
                  }))}
                  value={selectedProduct}
                 
                  onChange={handleProductChange}
                  noOptionsMessage={() => "No hay ventas disponibles. ¡Crea una!"}
                  />
                </div>
                  
             
                <label for="amount">Cantidad <span class="required">*</span></label>
                <input type="number" id="amount" name="amount" class="input-global" placeholder="Ingrese la cantidad" onChange={readSaleInformation}/>

                <label for="valor">Valor <span class="required">*</span></label>
                <input type="number" id="valor" name="value" class="input-global" placeholder="Ingrese el Valor" onChange={readSaleInformation}/>


                <label for="cliente">Cliente <span class="required">*</span></label>
                <div class="input-global select-react">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                        <g opacity="0.4">
                        <path d="M40.0834 39.8125H31.4167" stroke="#292D32" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M35.75 43.8958V35.7292" stroke="#292D32" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <path opacity="0.4" d="M26.348 22.1929C26.1313 22.1725 25.8713 22.1725 25.633 22.1929C20.4762 22.0296 16.3812 18.0483 16.3812 13.1483C16.3596 8.14625 20.6712 4.08333 25.9796 4.08333C31.288 4.08333 35.5996 8.14625 35.5996 13.1483C35.5996 18.0483 31.483 22.0296 26.348 22.1929Z" stroke="#292D32" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.9764 44.5292C22.033 44.5292 18.1113 43.59 15.1213 41.7117C9.87795 38.4042 9.87795 33.0142 15.1213 29.7271C21.0796 25.9704 30.8514 25.9704 36.8097 29.7271" stroke="#292D32" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                        <Select 
                          className="select"
                          styles={customStyles}
                          placeholder="Escoge tu cliente..."
                          options={clients.map(cliente => ({
                            value: cliente.id,
                            label: cliente.name,
                          }))}
                          value={selectedCliente}
                          onChange={handleClientChange}
                          noOptionsMessage={() => "No hay clientes disponibles. ¡Crea uno!"}
                          />
                </div>

                <button type="submit" class="btn btn-success">CREAR VENTA</button>
               
            </form>
        </section>
        </Fragment>
    )
}
export default withRouter(NewSale);