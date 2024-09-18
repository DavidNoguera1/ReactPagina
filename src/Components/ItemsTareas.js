import React, { useState } from 'react';
import '../styles/Tareas.css';

function ItemsTareas({ titulo, descripcion1, consulta, imagen, descripcion2 }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`itemTarea ${isOpen ? 'abierto' : ''}`}
      onClick={toggleItem}
    >
      <h2>{titulo}</h2>
      {isOpen && (
        <div className="itemTarea-contenido">
          <p>{descripcion1}</p>
          <div className="consulta">
            <p>{consulta}</p>
          </div>
          <img src={imagen} alt={titulo} />
          <p>{descripcion2}</p>
        </div>
      )}
    </div>
  );
}

export default ItemsTareas;
