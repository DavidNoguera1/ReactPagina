import React from 'react';
import { ListaMercado } from '../Utilidades/ListaMercado';
import ItemsTareas from '../Components/ItemsTareas';
import base from '../assets/assets4/base.jpg'
import '../styles/Generico.css'

function Mercado() {
  return (
    <div className="tarea">
      <div className="contenedorTarea">
      <h1 className='tituloTarea'>Caso de estudio: Mercado</h1>
        <p className='parrafoTarea'> Un nuevo local acaba de abrir dentro de la ciudad de San Juan de Pasto, esta local opera como un mercado de tipo "MiniMart" por
            lo que este se dota algunos elementos necesarios para la venta como lo serian alimentos, productos de higiene o aseo, su base de datos emplea ciertas numerciones
            que buscan organizarla. Esta semana se acaba de añadir nuevos elementos que corresponden productos que se registraran con numeros entre 10001 a 10041. 
            Las variables que la base emplea son:
          <p/>
          <ul>
          <li><strong>numeroMod:</strong> Numero modelo que permite identificar a los productos regisrados</li>
          <li><strong>nombreP:</strong> Nombre del producto.</li>
          <li><strong>anioF:</strong> Año en que se produjo el automóvil.</li>
          <li><strong>precio:</strong> Precio del producto en pesos colombianos.</li>
          <li><strong>categoria:</strong> Categoria en la que pertenece el producto.</li>
          <li><strong>dispInv:</strong> Cantidad de producto disponible en el inventario.</li>
          <li><strong>marca:</strong> Marca distribuidora del producto.</li>
          <li><strong>pesoK:</strong> Peso en kilos del producto</li>
          <li><strong>unidadesV:</strong> Unidades en vendidas del producto durante el ultimo mes</li>
          <li><strong>descripcion:</strong> Descripcion del producto dada por la marca </li>
          </ul>
          <p/>
          <p>Haz clic en el siguiente enlace para descargar el archivo de la base de datos:</p>
          <a href="/baseMercado.js" download>
          Descargar baseMercado.js
        </a>

          <p/>
          <p>Imagen de la base:</p>
          <img src={base}/>
        </p>
      </div>
      <div className="listaTareas">
        {ListaMercado.map((itemTarea, key) => {
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

export default Mercado
