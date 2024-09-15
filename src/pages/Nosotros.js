import React from 'react'
import fondoInfo from '../assets/fondoInfo.jpeg'
import '../styles/Nosotros.css'

function Nosotros() {
  return (
    <div className='info'>
      <div className='infoHead'style={{ backgroundImage: `url(${fondoInfo})`}}></div>
      <div className='infoBottom'>

        <div className='bottom1Izq'>
        <h1>Nuestra mision</h1>
        <p> MercaHelado es una compañia Colombiana enfocada en promover el comercio de productos
            congelados comestibles a base de agua o leche y centralizarlos al actuar como una plataforma puente donde,
            tanto marcas de pequeños emprendimientos hasta gigantes de la industria Colombiana pueden enlistar
            sus portafolios de productos y permitir que potenciales clieante los observen y adquiran, permitiendo
            expandir su mercado y alcance.</p>
        </div>
        <div className='bottom1Der'></div>

        <div className='bottom2Izq'>
            <h1>Nuestra Vision</h1>
            <p> Para el año 2026 se espera que MercaHelado consiga apoyar a mas de 30 emprendimientos locales
                para que puedan convertirse en empresas de nivel regional, promoviendo dentro de estas la adopcion de una economia
                circular que los beneficie a nivel economico, innovativo y comercial</p>
        </div>
        <div className='bottom2Der'></div>
      </div>
    </div>
  )
}

export default Nosotros
