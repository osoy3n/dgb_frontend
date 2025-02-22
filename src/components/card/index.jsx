/* eslint-disable react/prop-types */

import { useContext } from "react"
import { contexto } from "../../context"

function Card ({ data }) {
  const { abrirModal, setPersonajeSeleccionado } = useContext(contexto)

  const handleClick = () => {
    abrirModal()
    setPersonajeSeleccionado({data})
  }

  return (
    <div
      onClick={handleClick}
      className='bg-white cursor-pointer w-60 h-80 rounded-lg border border-gray-200 shadow-md p-2'
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-gray-100/60 rounded-md text-black text-xs px-1 py-0.5'>
          {data.afiliacion}
        </span>
        <span className='absolute bottom-0 right-0 bg-gray-100/60 rounded-md text-xs font-medium px-1 py-0.5'>
          ${data.precio}
        </span>
        <img
          className='w-full h-full object-contain rounded-lg'
          src={data.imagen}
          alt={data.nombre}
        />
      </figure>

      <p className='flex justify-between items-center'>
        <span className='text-sm font-medium'>{data.nombre}</span>
        <span className='text-sm font-light'>maxKi: {data.maxKi}</span>
      </p>
    </div>
  )
}

export default Card
