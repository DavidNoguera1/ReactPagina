import React from "react";
import fondoInfo from "../assets/fondoInfo.jpeg";
import vision from '../assets/vision.png';
import mision from '../assets/mision.jpg';
import "../styles/Nosotros.css";

function Nosotros() {
  return (
    <div className="info">
      <div
        className="infoHead"
        style={{ backgroundImage: `url(${fondoInfo})` }}
      >
        <h1 className="infoHeadTitulo">Sobre Nosotros</h1>
      </div>

      <div className="infoBottom">
        <div className="bottom1">
          <div className="bottom1Izq">
            <h1>Nuestra Misión</h1>
            <p>
              MercaHelado es una compañía Colombiana enfocada en promover el
              comercio de productos congelados comestibles a base de agua o
              leche y centralizarlos al actuar como una plataforma puente donde,
              tanto marcas de pequeños emprendimientos hasta gigantes de la
              industria Colombiana pueden enlistar sus portafolios de productos
              y permitir que potenciales clientes los observen y adquieran,
              colaborando en beneficio mutuo a expandir su mercado y alcance comercial.
            </p>
          </div>
          <div className="bottom1Der">
          <img src={mision} />
          </div>
        </div>

        <div className="bottom2">
          <div className="bottom2Izq">
          <img src={vision} />
          </div>
          <div className="bottom2Der">
            <h1>Nuestra Visión</h1>
            <p>
              Para el año 2026 se espera que MercaHelado consiga apoyar a más de
              30 emprendimientos locales para que puedan convertirse en empresas
              de nivel regional, promoviendo dentro de estas la adopción de una
              economía circular que los beneficie a nivel económico, innovativo
              y comercial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
