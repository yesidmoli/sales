import React from "react";
import { Link } from "react-router-dom";


const Header = ({icon , title , onLogout, link}) =>{
    const linkTo = link || '/';
    return(
        <header >
            <Link to={linkTo}><div class="circulo-devolver" onClick={onLogout}>
                {icon}
            </div></Link>
            <h3 class="title-center">{title}</h3>
        </header>
    )
    
}
export default Header;