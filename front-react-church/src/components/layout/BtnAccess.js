import { Link } from "react-router-dom";


function BtnAccess({icon , texto ,classe, page}){

    return(
        <Link to={page} className="btn-a">
                    <div className={`btn-accesos ${classe}`}>
                        {icon}
                            
                        <h5>{texto}</h5>
                    </div>
        </Link>
    )
}
export default BtnAccess