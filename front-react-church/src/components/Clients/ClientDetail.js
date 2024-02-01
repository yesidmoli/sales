
import { Fragment, useEffect, useState } from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom";
import Axios from "../../config/axios";

import { useAuth } from "../context/AuthContext";

import  '../../css/styles.css';

function ClientDetail(props){

    const {token} = useAuth()

    const {id} = props.match.params;

    console.log("id del cliente", id)

    const [detailClient, dataDebtClient] = useState([]);
    const [detailGeralClient, dataGeneralClient] = useState([]);

  

    const nombreCliente = detailGeralClient.sales && detailGeralClient.sales.length > 0
    ? detailGeralClient.sales[0]?.client?.name
    : "Nombre no disponible";
  

    // Acceder al valor de la única venta a crédito (si existe)
    const creditSaleValue = detailClient.length > 0 ? detailClient[0].value : 0;
    const creditSaleStatus = detailClient.length > 0 ? detailClient[0].status : 0;


    const [error, setError] = useState(null);

  
  
    // console.log("este es el valor", detailGeralClient.sales.value)



    useEffect(() => {
        consultarDetalleCliente();
        
      }, []);

    const consultarDetalleCliente = async () => {
        try {
          // Realiza la consulta a la API para obtener datos de los clientes
          const response = await Axios.get(`/api/client-detail/${id}/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          if (response.data && response.data.sales) {
            // Verifica si hay ventas a crédito
            const tieneVentasCredito = response.data.sales.some(sale => sale.status === 'A Crédito');
      
            if (tieneVentasCredito) {
              // Si hay ventas a crédito, muestra los detalles de la venta a crédito
              dataGeneralClient(response.data);
              dataDebtClient(response.data.sales.filter(sale => sale.status === 'A Crédito'));
            } else {
              // Si no hay ventas a crédito, muestra solo el nombre del cliente
              dataGeneralClient(response.data);
              dataDebtClient(response.data.sales);
            }
          } else {
            // Si no hay datos válidos, muestra un mensaje de error
            setError("Error al cargar los datos del cliente");
          }
          
        } catch (error) {
          console.error('Error al consultar datos del cliente:', error);
          console.error("este es el error", error.response.data )

          // Verificar si el error es "Cliente no encontrado"
          if (error.response && error.response.data && error.response.data.error === "Cliente no encontrado") {
            setError("Cliente no encontrado");
        } else {
            setError("Error al cargar los datos del cliente");
        }
        }
      };

    //formatear numeros 
    function formatNumber(number) {
      
        // Verifica si el número es válido y no es undefined o null
        if (!isNaN(parseInt(number))) {
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

    // Verificar si la venta está pagada o si hay un error de cliente no encontrado
    const isVentaPagada = detailGeralClient?.sales?.every(sale => sale.status === 'Pagada' || sale.status === 'Cerrada');
    console.log("estos es si el estado es pagada", isVentaPagada);
    const isClienteNoEncontrado = error === "Cliente no encontrado";



    return(
        
        <Fragment>
             <Header  icon={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 32 27" fill="none">
            <path d="M1 13.5H31M1 13.5L13.5 1M1 13.5L13.5 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>}
                  title={'Detalle del Cliente'}
                  link={'/list-debts'}/>

    <main className="container detalle-cliente">

        {isClienteNoEncontrado || isVentaPagada ? (

            <section className="container-sm cont-detalle-deuda">
            <h3 className="h3">{nombreCliente}</h3>


            <div className="no-deudas">
                <p>No tienes deudas por cobrar a este cliente.</p>
            </div>
            </section>

        ):(
            <>
            <section className="container-sm cont-detalle-deuda">
            <h3 className="h3">{nombreCliente}</h3>

                
                <div >
                    <p>Total por cobrar</p>
                    <h3 className="h3"> {formatNumber(creditSaleValue)}
                                </h3>
                </div>

                <section>
                <div className="detalle-deuda"><p>Numero de abonos</p>
                <p >{detailGeralClient.cantidad_abonos}</p>
                </div>

                <div className="detalle-deuda" ><p>Total abonados</p>
                <p className="p-total">{formatNumber(detailGeralClient.total_abonos_cliente)}</p>
                </div>
                </section>

                <Link className="btn-registrar-abono" to={detailClient.length > 0 ? `/abono/${detailClient[0].id}` : '/'}>Registrar abono</Link>
                <Link className="btn-registrar-abono btn-recordatorio" to={'/'}>Recordatorio de pago</Link>
            </section>


            <section className="container-sm ventas-cobrar">
                <h4 className="h3">Ventas por cobrar</h4>

          <div className="info-producto">
            <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.9861 11.1019H2.02689V30.7605H41.9861V11.1019Z" fill="#C3CC6A"/>
            <path d="M28.896 20.9312C28.896 25.2744 26.5728 28.7946 22.0065 28.7946C17.4401 28.7946 15.117 25.2744 15.117 20.9312C15.117 16.5879 17.4401 13.0677 22.0065 13.0677C26.5728 13.0677 28.896 16.5879 28.896 20.9312ZM5.47165 13.0677C4.71105 13.0677 4.09375 13.6549 4.09375 14.3783C4.09375 15.1017 4.71105 15.6889 5.47165 15.6889C6.23225 15.6889 6.84955 15.1017 6.84955 14.3783C6.84955 13.6549 6.23225 13.0677 5.47165 13.0677ZM5.47165 26.1735C4.71105 26.1735 4.09375 26.7606 4.09375 27.484C4.09375 28.2075 4.71105 28.7946 5.47165 28.7946C6.23225 28.7946 6.84955 28.2075 6.84955 27.484C6.84955 26.7606 6.23225 26.1735 5.47165 26.1735ZM38.5413 13.0677C37.7807 13.0677 37.1634 13.6549 37.1634 14.3783C37.1634 15.1017 37.7807 15.6889 38.5413 15.6889C39.3019 15.6889 39.9192 15.1017 39.9192 14.3783C39.9192 13.6549 39.3019 13.0677 38.5413 13.0677ZM38.5413 26.1735C37.7807 26.1735 37.1634 26.7606 37.1634 27.484C37.1634 28.2075 37.7807 28.7946 38.5413 28.7946C39.3019 28.7946 39.9192 28.2075 39.9192 27.484C39.9192 26.7606 39.3019 26.1735 38.5413 26.1735ZM4.40929 30.7605L15.117 40.9725L25.8536 30.7605H4.40929ZM39.623 11.1019L28.896 0.926574L18.198 11.1019H39.623Z" fill="#6F9B45"/>
            <path d="M42.675 15.6889L44.0529 14.3783L42.675 13.0717V10.4466H39.9082L28.896 0L17.9127 10.4466H1.33794V26.2115L0 27.484L1.33794 28.7592V31.4158H4.12268L15.117 41.9003L26.1402 31.4158H42.675V15.6889ZM28.8974 1.85315L37.9571 10.4466H19.8625L28.8974 1.85315ZM15.1183 40.0459L6.06966 31.4158H24.1918L15.1183 40.0459ZM41.2971 30.1052H2.71585V11.7572H41.2971V30.1052Z" fill="#231F20"/>
            </svg>

            <div className="datos-venta"> 
                <h6 className="sin-margen">{nombreCliente}</h6>
              
               
                {/* <h6 className="sin-margen">{detailGeralClient.sales && detailGeralClient.sales.product.name}</h6> */}
              
        
            <p className="sin-margen fecha">Cantidad: {detailClient.length > 0 ? detailClient[0].amount : 0}</p>
         
                <p className="sin-margen fecha">{detailClient.length > 0 ? detailClient[0].date : 0}</p>
            </div>

            <div className="precio-estado">
                <h5>{formatNumber(creditSaleValue)}</h5>
                <h6> {creditSaleStatus}</h6>
            </div>
          </div>
        </section>
        </>
 )}



        <section className="btns-section">
            <Link className="btn-detalle-cliente"> <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="32" cy="31.5" rx="32" ry="31.5" fill="#012E40"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.7231 14.2124C44.8505 12.2824 41.8145 12.2824 39.9419 14.2124L17.3135 37.5359C16.6441 38.2258 16.1878 39.1045 16.0022 40.0612L15.0639 44.897C14.6165 47.2024 16.5886 49.2351 18.8253 48.774L23.517 47.8068C24.4452 47.6155 25.2978 47.1452 25.9672 46.4553L48.5956 23.1319C50.4682 21.2018 50.4682 18.0726 48.5956 16.1425L46.7231 14.2124ZM42.2022 16.5422C42.8265 15.8989 43.8385 15.8989 44.4628 16.5422L46.3352 18.4723C46.9595 19.1156 46.9595 20.1587 46.3352 20.8021L42.0651 25.2033L37.9323 20.9434L42.2022 16.5422ZM35.6718 23.2732L19.5739 39.8656C19.3507 40.0956 19.1986 40.3885 19.1368 40.7075L18.1984 45.5431L22.8901 44.5759C23.1995 44.5121 23.4837 44.3555 23.7068 44.1255L39.8048 27.5331L35.6718 23.2732Z" fill="white"/>
</svg>


            Editar</Link>
            <Link className="btn-detalle-cliente"> <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="32" cy="31.5" rx="32" ry="31.5" fill="#AF1111"/>
<path d="M16.5 21.125H46.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.25 26.75L23.4401 44.2959C23.7643 46.079 25.3173 47.375 27.1297 47.375H35.8703C37.6826 47.375 39.2357 46.0788 39.5599 44.2959L42.75 26.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.875 17.375C25.875 15.3039 27.5539 13.625 29.625 13.625H33.375C35.4461 13.625 37.125 15.3039 37.125 17.375V21.125H25.875V17.375Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Eliminar</Link>
        </section>
        </main> 
        </Fragment>)
}
export default withRouter( ClientDetail);