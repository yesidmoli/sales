import React from 'react';

const ResumenVentas = ({ totalPaidSales, totalCreditSales }) => {

    function formatNumber(number) {
      
        // Verifica si el número es válido y no es undefined o null
        if (number != null && typeof number === 'number' && !isNaN(number)) {
          // Convierte el número a cadena y utiliza toLocaleString para formatear
          return Number(number).toLocaleString('es-CO', {
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
    <div className='resumen-venta'>

        <div className='total-venta'> 
            <h4>Total:</h4>
            <h4 className='cantida'> {formatNumber(totalPaidSales)}</h4>
        </div>
        <hr></hr>
        <section  className='ingre-deben'>
            <div className='contenido' >
                <div className='total-venta-titulo'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="13" viewBox="0 0 23 13" fill="none">
                    <path d="M0 13V9.46942L5.11113 5.35294L7.6667 7.64706L10.2222 0L15.3333 5.35294L18.7408 2.29412L16.1852 0H23V6.11763L20.4445 3.82356L15.3333 8.41175L11.0741 3.82356L8.51854 11.4706L5.11113 8.41175L0 13Z" fill="#31A31F"/>
                    </svg>
                    <h6>Ingresos </h6>
                </div>
                
                <h4> {formatNumber(totalPaidSales)}</h4>
            </div>
            <svg width="1" height="46" viewBox="0 0 1 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" x2="0.5" y2="46" stroke="black" stroke-opacity="0.5"/>
            </svg>

            <div className='contenido'>
                <div className='total-venta-titulo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
                    <path d="M0 0V4.34533L5.11113 9.41177L7.6667 6.58823L10.2222 16L15.3333 9.41177L18.7408 13.1765L16.1852 16H23V8.47061L20.4445 11.2941L15.3333 5.64707L11.0741 11.2941L8.51854 1.88238L5.11113 5.64707L0 0Z" fill="#EC2525"/>
                    </svg>

                    <h6>Deben</h6>
                </div>
                
                <h4>  {formatNumber(totalCreditSales)}</h4>
            </div>
        </section>
    </div>
  );
};

export default ResumenVentas;
