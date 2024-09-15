import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="contenedorRedes">
        <a href="https://www.facebook.com/davidstiven.nogueraibarra/" target="_blank">
          <FacebookIcon />
        </a>
      </div>
      <p>Pagina de prueba para "Practica de base de datos" ;)</p>
      <p>© 2024 Todos los derechos reservados</p>
    </div>
  );
}

export default Footer;
