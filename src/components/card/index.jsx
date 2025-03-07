/* eslint-disable react/prop-types */
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { useContext } from "react"
import { contexto } from "../../context"

function Card ({ data }) {
  const { abrirModal, abrirCheckout, cerrarModal, cerrarCheckout , comprasDelCarrito, setComprasDelCarrito, setPersonajeSeleccionado } = useContext(contexto)

  const handleClick = () => {
    abrirModal()
    cerrarCheckout()
    setPersonajeSeleccionado({data})
  }

  const agregarAlCarrito = (event) => {
    event.stopPropagation()
    setComprasDelCarrito([...comprasDelCarrito, data])
    abrirCheckout()
    cerrarModal()
  }

  const mostrarIcono = (id) => {
    const estaEnCarrito = comprasDelCarrito.filter(personaje => personaje.id === id).length > 0

    if (estaEnCarrito) {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center text-white bg-green-400 w-6 h-6 rounded-full m-2 p-1'
        >
          <CheckIcon />
        </button>
      )
    } else {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-lime-50 w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => agregarAlCarrito(event)}
        >
          <PlusIcon />
        </button>
      )
    }
  }

  return (
    <div
      onClick={handleClick}
      className='bg-white cursor-pointer w-60 h-80 rounded-lg p-2'
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-gray-100/60 rounded-md text-black text-xs px-1 py-0.5'>
          {data.afiliacion}
        </span>
        <span className='absolute bottom-0 right-0 bg-gray-100/60 rounded-md text-xs font-medium px-1 py-0.5'>
          ${data.precio.toLocaleString()}
        </span>
        <img
          className='w-full h-full object-contain rounded-lg'
          src={data.imagen}
          alt={data.nombre}
        />
        {mostrarIcono(data.id)}
      </figure>

      <p className='flex justify-between items-center'>
        <span className='text-sm font-medium'>{data.nombre}</span>
        <span className='text-sm font-light'>Ki: {data.ki}</span>
      </p>
    </div>
  )
}

export default Card
