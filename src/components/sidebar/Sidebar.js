import { Link } from "react-router-dom"

const Sidebar = () => {
    return(
     
        <div className="sidebar">
            <ul>
                <li   className="mar">
                    <Link to="/" >Inicio</Link>
                </li>
                <li>
                    <Link to="/materias">Materias</Link>
                </li>
                <li>
                    <Link to="/alumnos">Alumnos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar