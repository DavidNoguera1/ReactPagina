import React from 'react';
import { ListaTarea } from '../Utilidades/ListaTarea';
import ItemsTareas from '../Components/ItemsTareas';
import base from '../assets/base.jpg'
import '../styles/Tareas.css'

function Tarea() {

  //const rutaArchvio = '../Utilidades/baseMH.js';
  

  return (
    <div className="tarea1">
      <div className="contenedorTarea1">
      <h1 className='tituloTarea1'>Caso de estudio: MercaHelado</h1>
        <p className='parrafoTarea1'>El fin de mes comienza a acercarse y como tal la empresa de Mercahelado y la base de datos que poseen deben estar preparadas
          para poder brindar informacion respecto a los productos registrados de sus asociados. Como tal cada producto cuenta con los siguientes
          campos de informacion:
          <p/>
          <ul>
          <li><strong>producto_id:</strong> El identificador único básico de registro dentro de la base de datos. Un dato numérico sencillo.</li>
          <li><strong>nombre:</strong> Nombre bajo el cual su marca lo identifica y lleva al mercado.</li>
          <li><strong>marca:</strong> La distribuidora del producto asociada con MercaHelado.</li>
          <li><strong>tipo:</strong> Categoría en la que entra el producto "helado, paleta, casero, etc".</li>
          <li><strong>disponibilidad_Locales:</strong> Número de sitios en los cuales se encuentra disponible dicho producto.</li>
          <li><strong>prodMensual:</strong> Producción mensual del producto que se distribuye a los locales en los que se comercia.</li>
          <li><strong>precioUMP:</strong> Es el precio de venta unitario del producto en el mes pasado.</li>
          <li><strong>precioUMA:</strong> Es el precio de venta unitario del producto en el mes actual.</li>
          <li><strong>porVenMP:</strong> Porcentaje de ventas del mes pasado respecto a la producción mensual.</li>
          <li><strong>porVenMA:</strong> Porcentaje de ventas del mes actual respecto a la producción mensual.</li>
          </ul>
          <p/>
          <p>Haz clic en el siguiente enlace para descargar el archivo de la base de datos:</p>
          <a href="/baseMH.js" download>
          Descargar baseMH.js
        </a>

          <p/>
          <p>Imagen de la base:</p>
          <img src={base}/>
        </p>
      </div>
      <div className="listaTareas1">
        {ListaTarea.map((itemTarea, key) => {
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

export default Tarea;

