import React from "react";
import fondoContacto from "../assets/fondoContacto.jpg";
import '../styles/Contacto.css'


function Contacto() {
  return (
    <div className="contacto">
      <div
        className="ladoIzq"
        style={{ backgroundImage: `url(${fondoContacto})` }}
      ></div>
      <div className="ladoDer">
        <h1>¿Necesitas contactarnos? <br/>Llena el siguiente formulario:</h1>
        <form>

          <label htmlFor="name">Nombre completo</label>
          <input name="name" placeholder="Digite su nombre" type="text" />

          <label htmlFor="email">Correo electrónico</label>
          <input name="email" placeholder="Digite su correo electrónico" type="email"/>

          <label htmlFor="razon">Razón</label>
          <select name="razon">
            <option value="otro">Otro</option>
            <option value="queja">Quejas</option>
            <option value="reclamo">Reclamo</option>
            <option value="solicitud">Solicitudes</option>
            <option value="peticion">Peticiones</option>
            <option value="sugerencia">Sugerencias</option>
            <option value="felicitacion">Felicitaciones</option>
          </select>

          <label htmlFor="descripcion">Descripción</label>
          <textarea name="descripcion" placeholder="Cuentanos :)" rows="5"/>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
