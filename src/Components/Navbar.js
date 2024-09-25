import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className="navbar">
      <div className="ladoIz">
        <img src={logo} alt="logo" />
      </div>
      <div className="ladoDer">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contactos</Link>
        <Link to="/tarea">Tarea</Link>


        <div className="menu-desplegable">
          <button className="menu-boton" onClick={toggleMenu}>Taller</button>
          {mostrarMenu && (
            <ul className="menu-lista">
              <li><Link to="/carros">Carros</Link></li>
              <li><Link to="/mercado">Mercado</Link></li>
              <li><Link to="/hotel">Hotel</Link></li>
              <li><Link to="/materias">Materias</Link></li>
              <li><Link to="/restaurante">Restaurante</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
