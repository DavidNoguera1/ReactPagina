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
        <p className='parrafoTarea'> Una pagina de origen estado unidense a decidido expandir sus planes de viaje hasta la hoteleria Colombiana, para ello se vio en la necesidad
          de crear una base de datos que recopile informacion exclusivamente sobre hoteles colombianos pero presentando cosas como el precio en moneda USD dado que el enfoque de la pagina esta en
          clientes extranjeros o inversionistas. La base de datos se diseño con variables especificas para saber la informacion que necesitban. Dichas
          variables son:
          <p/>
          <ul>
          <li><strong>nombre:</strong> Nombre del hotel.</li>
          <li><strong>ubiacion:</strong> Localizacion del hotel en calles y carreras.</li>
          <li><strong>tipo:</strong> Categoría en la que entra el producto "helado, paleta, casero, etc".</li>
          <li><strong>clasificacion_estrellas:</strong> Clasificacion de hoteles por "estrellas" del 1 al 5.</li>
          <li><strong>descripcion:</strong> Descripcion de las caracteristicas atractivas del hotel</li>
          <li><strong>capacidad_habitacion_personas:</strong> Nombre muy descriptivo, capacidad de personas por cuarto</li>
          <li><strong>area_total_m2:</strong> Area total que ocupa el hotel en metros cuadrados.</li>
          <li><strong>tarifa_promedio_usd:</strong> Precio de estadia promedio en USD.</li>
          <li><strong>numero_pisos:</strong> Cantidad de pisos que el hotel posee.</li>
          <li><strong>tamaño_habitaciones_m2:</strong> Tamaño de habitaciones en metros cubicos.</li>
          <li><strong>ingresos_mensuales_usd:</strong> Ingresos mensuales del hotel en USD.</li>
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

