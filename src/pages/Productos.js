import React from 'react';
import { ListaProductos } from '../Utilidades/ListaProductos';
import ItemsProductos from '../Components/ItemsProductos';
import '../styles/Productos.css'

function Productos() {
  return (
    <div className='productos'> 
      <div className='contenedorTitulo'>
        <h1 className='tituloProductos'>Productos de nuestros asociados</h1>
      </div>
      <div className='listaProductos'>
        {ListaProductos.map((itemProducto, key) => {
          return (
            <ItemsProductos
              key={key} 
              nombre={itemProducto.nombre}
              imagen={itemProducto.imagen}
              precioU={itemProducto.precioU}
              productor={itemProducto.productor}
              tipo={itemProducto.tipo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Productos;

