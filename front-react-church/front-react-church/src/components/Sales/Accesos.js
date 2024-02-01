import { Fragment } from "react"

//componets
import BtnAccess from "../layout/BtnAccess"
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

function Accesos({history}){

    const {logout} = useAuth()
    const handleLogout = () => {
        logout()
        history.push("/login");
      };
    return(
        <Fragment>
            <Header  icon={<svg width="30" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 10H43.75C51.3942 10 51.25 20 51.25 30C51.25 40 51.3942 50 43.75 50H35M7.5 30H37.5M7.5 30L17.5 20M7.5 30L17.5 40" stroke="black" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
onLogout={handleLogout}      />
             <section className="container">
             <h3>Accesos Rápidos</h3>

        <section className="contenedor-accesos"> 
            <BtnAccess  icon={<svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 24.6316V17.9992L10.1852 10.2662L15.2778 14.5759L20.3704 0.210526L30.5556 10.2662L37.3457 4.52013L32.2531 0.210526H45.8333V11.7028L40.7408 7.39324L30.5556 16.0124L22.068 7.39324L16.9754 21.7585L10.1852 16.0124L0 24.6316Z" fill="#1F77A3"/>
                            <path d="M45.8333 48.2105H40.7407V12L45.8333 20.3562V48.2105ZM35.6481 48.2105H30.5556V28.7125L35.6481 20.3564V48.2105ZM25.463 48.2105H20.3704V31.498L22.9167 14.7855L25.463 20.3562V48.2105ZM15.2778 48.2105H10.1852V28.7125L15.2778 37.0687V48.2105ZM5.09259 48.2105H0V45.4252L5.09259 37.0689V48.2105Z" fill="white"/>
                            </svg>}
                            
                        texto="Registrar Venta"
            
                        page="/new-sale"/>

            <BtnAccess  icon={<svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 29.7083H29.5M29.5 29.7083H42M29.5 29.7083V17M29.5 29.7083V42.4167" stroke="#012E40" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M30 53.375C42.4264 53.375 52.5 43.1335 52.5 30.5C52.5 17.8665 42.4264 7.625 30 7.625C17.5736 7.625 7.5 17.8665 7.5 30.5C7.5 43.1335 17.5736 53.375 30 53.375Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                                        
                                    texto="Crear Venta"
                                    classe="btn-2"
                                    page="/new-product"
                                    
                                    />
            <BtnAccess  icon={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
<path d="M50 45H42.5M42.5 45H35M42.5 45V37.5M42.5 45V52.5M27.5 52.5H10C10 42.835 17.835 35 27.5 35C29.2375 35 30.9157 35.2532 32.5 35.7247M37.5 17.5C37.5 23.0229 33.0228 27.5 27.5 27.5C21.9771 27.5 17.5 23.0229 17.5 17.5C17.5 11.9771 21.9771 7.5 27.5 7.5C33.0228 7.5 37.5 11.9771 37.5 17.5Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
                                        
                                    texto="Crear Cliente"
                                    classe="btn-2"
                                    page="/new-client"
                                    
                                    />
        </section>
             </section>
             <Menu  clase={'inicio'}/>
        </Fragment>
    )
}
export default Accesos;