import React from 'react';
import { ListaHoteles } from '../Utilidades/ListaHoteles';
import ItemsTareas from '../Components/ItemsTareas';
import base from '../assets/assets5/base.png'
import '../styles/Generico.css'

function Hotel() {


  return (
    <div className="tarea">
      <div className="contenedorTarea">
      <h1 className='tituloTarea'>Caso de estudio: Hoteleria</h1>
        <p className='parrafoTarea'> Varios asociados de la hoteleria colombiana se han decidido asociar y crear una pagina orientada a atraer clientes extranjeros o inversionistas, 
          para ello se vieron en la necesidad de crear una base de datos que recopile informacion exclusivamente sobre hoteles colombianos asociados pero presentando cosas como el precio en moneda USD 
          ademas de servir como un "catalogo" de informacion o de consulta para los propios administrativos de los hoteles. La base de datos se diseño con variables especificas para saber la informacion que pudiera ser necesitada Dichas variables son:
          <p/>
          <ul>
          <li><strong>nombre:</strong> Nombre del hotel.</li>
          <li><strong>ubiacion:</strong> Localizacion del hotel en calles y carreras.</li>
          <li><strong>tipo:</strong> Categoría en la que entra el producto "helado, paleta, casero, etc".</li>
          <li><strong>clasificacion:</strong> Clasificacion de hoteles por "estrellas" del 1 al 5.</li>
          <li><strong>descripcion:</strong> Descripcion de las caracteristicas atractivas del hotel</li>
          <li><strong>capacidadhcion:</strong> Capacidad de hospedaje de personas por cuarto</li>
          <li><strong>areat:</strong> Area total que ocupa el hotel en metros cuadrados.</li>
          <li><strong>tarifaprom:</strong> Precio de estadia promedio en USD.</li>
          <li><strong>numero_pisos:</strong> Cantidad de pisos que el hotel posee.</li>
          <li><strong>tamhabitaciones:</strong> Tamaño de habitaciones en metros cuadrados.</li>
          <li><strong>ingresosmen:</strong> Ingresos mensuales del hotel en USD.</li>
          </ul>
          <p/>
          <p>Haz clic en el siguiente enlace para descargar el archivo de la base de datos:</p>
          <a href="/baseHoteles.js" download>
          Descargar baseHoteles.js
        </a>

          <p/>
          <p>Imagen de la base:</p>
          <img src={base}/>
        </p>
      </div>
      <div className="listaTareas">
        {ListaHoteles.map((itemTarea, key) => {
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
  );
}

export default Hotel;

