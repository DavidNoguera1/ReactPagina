import React from 'react'
import { Link } from 'react-router-dom'
import ImagenFondo from '../assets/portadaHelados.jpeg'
import '../styles/Hogar.css'

function Hogar() {
  return (
    <div className='inicio'>
      <div className='ladoIzquierdo'>
        <blockquote>
          <h1> Descubra productos helados para incluir en su local</h1>
          <p> Marcas 100% Colombianas </p>
          <Link to='/productos'>
            <button>PRODUCTOS AQUI</button>
          </Link>
        </blockquote>
      </div>
      <div className='ladoDerecho' style={{ backgroundImage: `url(${ImagenFondo})`}}></div>
    </div>
  )
}

export default Hogar

