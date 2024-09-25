import React from 'react';
import { ListaPlatos } from '../Utilidades/ListaPlatos';
import ItemsTareas from '../Components/ItemsTareas';
import base from '../assets/assets7/base.jpg'
import '../styles/Generico.css'

function Restaurante() {
    return (
        <div className="tarea">
          <div className="contenedorTarea">
          <h1 className='tituloTarea'>Caso de estudio: Restaurante</h1>
            <p className='parrafoTarea'> Un restaurante a decidido implementar un sistema de base de datos el cual les permita facilitar el registro y venta de sus platos, el manejo de inventario
                o saber que es lo que mas le gusta a la gente de todo el menu que ofrecen. La base emplea los siguientes atributos para cada platillo:
              <p/>
              <ul>
              <li><strong>nombre:</strong> Nombre del plato de comida o producto.</li>
              <li><strong>precio:</strong> Precio en pesos colombianos del plato</li>
              <li><strong>categoria:</strong> Categoria a la que pertenece el plato (entrada, plato principal, postre, ect.)</li>
              <li><strong>descripcion:</strong> Descripcion de las caracteristicas principales del plato.</li>
              <li><strong>tiempoPM:</strong> Tiempo de preparacion en minutos</li>
              <li><strong>calorias:</strong> Nombre muy descriptivo, numero de calorias que tiene el plato</li>
              <li><strong>ingredientesP:</strong> Ingredientes principales que componen al plato</li>
              <li><strong>nivelPicante:</strong> Ninguno, bajo, medio o alto.</li>
              <li><strong>disponibilidad:</strong> Cuantos platillos del mismo tipo pueden prepararse.</li>
              <li><strong>popularidad:</strong> De 0 a 100 que tan popular es un platillo por compras.</li>
              </ul>
              <p/>
              <p>Haz clic en el siguiente enlace para descargar el archivo de la base de datos:</p>
              <a href="/basePlatos.js" download>
              Descargar basePlatos.js
            </a>
    
              <p/>
              <p>Imagen de la base:</p>
              <img src={base}/>
            </p>
          </div>
          <div className="listaTareas">
            {ListaPlatos.map((itemTarea, key) => {
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

export default Restaurante
