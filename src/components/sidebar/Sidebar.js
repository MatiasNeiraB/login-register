import { Link } from "react-router-dom"

const Sidebar = () => {
    return(
     
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/" >Inicio</Link>
                </li>
                <li>
                    <Link to="/asignaturas">Asignaturas</Link>
                </li>
                <li>
                    <Link to="/alumnos">Alumnos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar