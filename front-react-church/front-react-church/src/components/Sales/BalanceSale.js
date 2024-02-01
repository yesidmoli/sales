import { Fragment } from "react"
import Header from "../layout/Header"

import React, { useState, useEffect } from 'react';


import Axios from "../../config/axios";

import VentaSelector from "./VentaSelector"
import ResumenVentas from "./ResumenVenta"
import ListaIngresosDeudas from "./ListaIngresoDeudas"
import Menu from "../layout/Menu";

import { useAuth } from "../context/AuthContext";
function BalanceSales({ventas ,history}){

  const {token} = useAuth()
  const [sales, dataSales] = useState([]);
  console.log("saleee", sales)


  const [ventaSeleccionada, setVentaSeleccionada] = useState(null);
  const [ingresos, setIngresos] = useState([]); 

 

  const [deudas, setDeudas] = useState([]); 
  
  useEffect(() => {

   
    // // Cuando el componente se monta, establece la última venta(product) como seleccionada
    // const ultimaVenta = obtenerUltimaVenta();
    // if (ultimaVenta) {
    //   setVentaSeleccionada(ultimaVenta);
    //   consultarDatosVenta(ultimaVenta);
    // }
  }, []); 

  // const obtenerUltimaVenta = () => {
    
  //   return products.length > 0 ? products[products.length - 1].nombre : null;
  // };

  const handleVentaSeleccionada = (ventaId) => {
    setVentaSeleccionada(ventaId);
    consultarDatosVenta(ventaId);
  };

  

  const consultarDatosVenta = async (ventaId) => {
    try {
      // Realiza la consulta a la API para obtener datos de ingresos y deudas según la venta seleccionada
      const response = await Axios.get(`/api/sales-list/`, {
        params: { id: ventaId },
        headers: {
            Authorization: `Token ${token}`,
        },
    });
      dataSales(response.data);
      
      //Se hace el filtro
      if (response.data.sales && Array.isArray(response.data.sales)) {
        // Filtra los datos de ingresos y deudas
        const ingresosData = response.data.sales.filter((venta) => venta.status === 'Pagada');
        const deudasData = response.data.sales.filter((venta) => venta.status === 'A Crédito');
        // Actualiza los estados con los datos obtenidos

        setIngresos(ingresosData);
        setDeudas(deudasData);

        // Obtén el último producto de la última venta
      if (response.data.sales.length > 0) {
        const ultimaVenta = response.data.sales[response.data.sales.length - 1];
        const ultimoProducto = ultimaVenta.product;
        console.log('Último Producto:', ultimoProducto);

        setVentaSeleccionada(ultimoProducto)
      }
      } else {
        console.error('El formato de datos no es el esperado.');
      }
    } catch (error) {
      console.error('Error al consultar datos de venta:', error);
    }
  };

  const {logout} = useAuth()
    const handleLogout = () => {
        logout()
        history.push("/login");
      };
  
    return(

        <Fragment>
            <Header  icon={<svg width="30" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 10H43.75C51.3942 10 51.25 20 51.25 30C51.25 40 51.3942 50 43.75 50H35M7.5 30H37.5M7.5 30L17.5 20M7.5 30L17.5 40" stroke="black" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
                title={"Historial de Venta"}
                onLogout={handleLogout}  />

      {/* componente para seleccionar la venta se manda como prop funcion, para obtener id */}
       <VentaSelector  
       onVentaSeleccionada={handleVentaSeleccionada} 
       />
   
   
<div className="container cont">

      {/* {ventaSeleccionada && ( */}
       
         
         {/* componente resumen venta, se envia total de los que deben de esa venta y el total pagados */}
            <ResumenVentas totalPaidSales={sales.total_paid_sales} 
            totalCreditSales={sales.total_credit_sales}/>
          
          
          <ListaIngresosDeudas ingresos={ingresos}  deudas={deudas}/>
         
      
      {/* )} */}
</div>

        <Menu  clase={'balance'}/>
        </Fragment>
        
    )
}
export default BalanceSales