import { useState } from "react";
import React from 'react';

const ListaIngresosDeudas = ({ ingresos, deudas }) => {

  

    const [tipoEstado, setTipoEstado] = useState('ingreso');

    const filtrarVentasPorEstado = () => {
      if (tipoEstado === 'ingreso') {
        return ingresos.filter((venta) => venta.status === 'Pagada');
      } else {
        return deudas.filter((venta) => venta.status === 'A Crédito');
      }
    };
      
    function formatNumber(number) {
      
      // Verifica si el número es válido y no es undefined o null
      if (!isNaN(parseInt(number, 10))) {
        // Convierte la cadena a un número y utiliza toLocaleString para formatear
        return parseFloat(number).toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
      } else {
        return 0;
      }
    }
  return (
    <div>
        <div className='btns'>
            <button className='btn-ingresos' onClick={() => setTipoEstado('ingreso')}> <h3>Ingresos</h3></button>
            <button className='btn-deben ' onClick={() => setTipoEstado('deuda')}><h3>Deben</h3></button>
        </div>
        <br/>
        <div className="list-productos" >
        {filtrarVentasPorEstado().map((venta) => (
          <div className="info-producto" key={venta.id}>
            <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.9861 11.1019H2.02689V30.7605H41.9861V11.1019Z" fill="#C3CC6A"/>
            <path d="M28.896 20.9312C28.896 25.2744 26.5728 28.7946 22.0065 28.7946C17.4401 28.7946 15.117 25.2744 15.117 20.9312C15.117 16.5879 17.4401 13.0677 22.0065 13.0677C26.5728 13.0677 28.896 16.5879 28.896 20.9312ZM5.47165 13.0677C4.71105 13.0677 4.09375 13.6549 4.09375 14.3783C4.09375 15.1017 4.71105 15.6889 5.47165 15.6889C6.23225 15.6889 6.84955 15.1017 6.84955 14.3783C6.84955 13.6549 6.23225 13.0677 5.47165 13.0677ZM5.47165 26.1735C4.71105 26.1735 4.09375 26.7606 4.09375 27.484C4.09375 28.2075 4.71105 28.7946 5.47165 28.7946C6.23225 28.7946 6.84955 28.2075 6.84955 27.484C6.84955 26.7606 6.23225 26.1735 5.47165 26.1735ZM38.5413 13.0677C37.7807 13.0677 37.1634 13.6549 37.1634 14.3783C37.1634 15.1017 37.7807 15.6889 38.5413 15.6889C39.3019 15.6889 39.9192 15.1017 39.9192 14.3783C39.9192 13.6549 39.3019 13.0677 38.5413 13.0677ZM38.5413 26.1735C37.7807 26.1735 37.1634 26.7606 37.1634 27.484C37.1634 28.2075 37.7807 28.7946 38.5413 28.7946C39.3019 28.7946 39.9192 28.2075 39.9192 27.484C39.9192 26.7606 39.3019 26.1735 38.5413 26.1735ZM4.40929 30.7605L15.117 40.9725L25.8536 30.7605H4.40929ZM39.623 11.1019L28.896 0.926574L18.198 11.1019H39.623Z" fill="#6F9B45"/>
            <path d="M42.675 15.6889L44.0529 14.3783L42.675 13.0717V10.4466H39.9082L28.896 0L17.9127 10.4466H1.33794V26.2115L0 27.484L1.33794 28.7592V31.4158H4.12268L15.117 41.9003L26.1402 31.4158H42.675V15.6889ZM28.8974 1.85315L37.9571 10.4466H19.8625L28.8974 1.85315ZM15.1183 40.0459L6.06966 31.4158H24.1918L15.1183 40.0459ZM41.2971 30.1052H2.71585V11.7572H41.2971V30.1052Z" fill="#231F20"/>
            </svg>

            <div className="datos-venta"> 
                {/* <h6 className="sin-margen">{venta.client.name}</h6> */}
              
               
                <p className="sin-margen">{venta.product.name}</p>
              
        
            <p className="sin-margen fecha">Cantidad:{venta.amount}</p>
         
                <p className="sin-margen fecha">{venta.date}</p>
            </div>

            <div className="precio-estado">
                <h6>{formatNumber(venta.value)}</h6>
                <h6 style={{ color: venta.status === 'Pagada' ? 'green' : 'red' }}>{venta.status}</h6>
            </div>
          </div>
          
        ))}
        </div>
    </div>
  );
};

export default ListaIngresosDeudas;
