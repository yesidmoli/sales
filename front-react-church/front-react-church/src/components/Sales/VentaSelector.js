import React, { useState , useEffect} from 'react';

import Select from "react-select";
import Axios from '../../config/axios';
import { useAuth } from '../context/AuthContext';

const VentaSelector = ({  onVentaSeleccionada, name}) => {

  const {token} = useAuth()
  const [products, dataProducts] = useState([]);

  useEffect(() => {


    const fetchProducts = async () => {
      try {
        const response = await Axios.get('/api/products/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
       

        const fetchedProducts = response.data;
        dataProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 


  //Devolvemos el id de la opcion seleccionado
  const handleVentaChange = (selectedOption) => {
    onVentaSeleccionada(selectedOption.value);
  
  };

  //Estilos personalizados select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      outline: 'none', 
   
      '&:hover': {
        border: 'none', 
      },
      
    }),

  }
  return (
    <div className='select-venta classN'>
      <label for="venta"> <h3>{name}</h3></label>

      <Select 
                  className="select"
                  styles={customStyles}
                  placeholder="Seleccione la venta..."
                  options={products.map(product => ({
                    value: product.id,
                    label: product.name,
                  }))}
  
                  onChange={handleVentaChange}
                  noOptionsMessage={() => "No hay ventas disponibles. ¡Crea una!"}
                  />

    </div>
  );
};

export default VentaSelector;
