import React from 'react';

function ItemsProductos({ nombre, imagen, precioU, productor, tipo }) {
  return (
    <div className='itemProducto'>
      <div style={{ backgroundImage: `url(${imagen})` }}></div>
      <h1>{nombre}</h1>
      <p>Precio Unitario: ${precioU}</p>
      <p>Disstribuidor: {productor}</p>
      <p>Categoria: {tipo}</p>
    </div>
  );
}

export default ItemsProductos;
