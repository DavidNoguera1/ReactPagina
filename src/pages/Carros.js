import React from 'react';
import { ListaCarros } from '../Utilidades/ListaCarros';
import ItemsTareas from '../Components/ItemsTareas';
import base from '../assets/assets3/base.jpg'
import '../styles/Generico.css'


function Carros() {
  return (
    <div className="tarea">
      <div className="contenedorTarea">
      <h1 className='tituloTarea'>Caso de estudio: Concesionario</h1>
        <p className='parrafoTarea'> Un concesionario de vehiculos usados esta listo para iniciar otro dia de negocios, como tal no se maneja una marca
            especifica sino varias y de igul forma sucede con los años de fabricacion de los vehiculos, modelos y otras caracteristicas, por lo que el inventario
            y en consecuencia la base de datos es bastante variada. Los atributos que componen un vehiculo son los siguientes:
          <p/>
          <ul>
          <li><strong>id:</strong> El identificador único básico de registro dentro de la base de datos. Un dato numérico sencillo.</li>
          <li><strong>marca:</strong> Fabricante del vehiculo.</li>
          <li><strong>anioF:</strong> Año en que se produjo el automóvil.</li>
          <li><strong>precio:</strong> Precio del vehiculo en pesos colombianos.</li>
          <li><strong>consumoCOM:</strong> Consumo de combustible cada 100 km urbanos/rurales</li>
          <li><strong>capacidadP:</strong> Capacidad de tranporte para personas.</li>
          <li><strong>color:</strong> Color del vehiculo.</li>
          <li><strong>tipoTransmision:</strong> Tipo de transmision de los vehiculos (Manual, Automatica, CVT).</li>
          <li><strong>potenciaMTR:</strong> Numero de caballos de fuerza del motor</li>
          <li><strong>sistemaSEG:</strong> Descripcion de los sistemas de seguridad con los que cuenta el vehiculo </li>
          </ul>
          <p/>
          <p>Haz clic en el siguiente enlace para descargar el archivo de la base de datos:</p>
          <a href="/baseCarros.js" download>
          Descargar baseCarros.js
        </a>

          <p/>
          <p>Imagen de la base:</p>
          <img src={base}/>
        </p>
      </div>
      <div className="listaTareas">
        {ListaCarros.map((itemTarea, key) => {
          return (
            <ItemsTareas
              key={key}
              titulo={itemTarea.titulo}
              descripcion1={itemTarea.descripcion1}
              consulta={itemTarea.consulta}
              imagen={itemTarea.imagen}
              descripcion2={itemTarea.descripcion2}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Carros
