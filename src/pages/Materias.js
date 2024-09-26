import React from 'react';
import { ListaMaterias } from '../Utilidades/ListaMaterias';
import ItemsTareas from '../Components/ItemsTareas';
import base from '../assets/assets6/base.png'
import '../styles/Generico.css'

function Materias() {
  return (
    <div className="tarea">
      <div className="contenedorTarea">
      <h1 className='tituloTarea'>Caso de estudio: Materias Ing Sistemas</h1>
        <p className='parrafoTarea'> La universidad Mariana a decidido realizar una "revision" en sus bases de datos referentes a materias de los multiples programas
            que se brindan dentro de esta. En esta ocasion se da una revision a todas las materias correspondietes al programa de Ingenieria de Sistemas. Cada materia dentro de
            la base cuenta con los siguiintes atributos:
          <p/>
          <ul>
          <li><strong>nombre:</strong> Nombre del la materia.</li>
          <li><strong>codigo:</strong> Codigo unico correespondiente a cada materia.</li>
          <li><strong>Descripcion:</strong> Descripcion profesional sobre la materia.</li>
          <li><strong>Creditos:</strong> Creditos asignados que cada materia </li>
          <li><strong>horast:</strong> Numero de horas de enseñanza teorica en clases</li>
          <li><strong>horap:</strong> Numero de horas de enseñanza practica.</li>
          <li><strong>Profesor:</strong> Docente encragado de dictar la materia.</li>
          <li><strong>Aula:</strong> Espacio de encuentro donde se dictaria la clase.</li>
          <li><strong>Prerrequisitos:</strong> Condiciones necesarias previamente cumplidas para cursar la materia.</li>
          <li><strong>Promedio:</strong> Promedio de calificaciones que generalmente se obtiene en estas materias.</li>
          </ul>
          <p/>
          <p>Haz clic en el siguiente enlace para descargar el archivo de la base de datos:</p>
          <a href="/baseMaterias.js" download>
          Descargar baseMaterias.js
        </a>

          <p/>
          <p>Imagen de la base:</p>
          <img src={base}/>
        </p>
      </div>
      <div className="listaTareas">
        {ListaMaterias.map((itemTarea, key) => {
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

export default Materias
