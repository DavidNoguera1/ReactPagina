import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder'; 
import '../styles/Navbar.css'


function Navbar() {

    const [linksAbiertos, setLinksAbiertos ] = useState(false);

    const ocultarNavbar = () => {
        setLinksAbiertos(!linksAbiertos);
    }

  return (
    <div className='navbar'>
      <div className='ladoIz' id= {linksAbiertos ? "mostar" : "ocultar"}>
        <img src={logo} />
        <div className="linksOcultos">
        <Link to='/'>Inicio</Link>
        <Link to='/productos'>Productos</Link>
        <Link to='/nosotros'>Nosotros</Link>
        <Link to='/contacto'>Contactos</Link>
        <Link to='/tarea'>Tarea</Link>
        </div>
      </div>
      
      <div className='ladoDer'>
        <Link to='/'>Inicio</Link>
        <Link to='/productos'>Productos</Link>
        <Link to='/nosotros'>Nosotros</Link>
        <Link to='/contacto'>Contactos</Link>
        <Link to='/tarea'>Tarea</Link>
        <button onClick={ocultarNavbar}>
        <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
