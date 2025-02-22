import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { contexto } from '../../context'

function ModalDetalle () {
  const { modalEstaAbierto, cerrarModal, personajeSeleccionado } = useContext(contexto)
  
  return (
    <aside
      className={`${modalEstaAbierto ? 'flex' : 'hidden'} flex-col fixed right-0 rounded-lg bg-gray-100/95 top-[68px] w-[360px] h-[calc(100vh-68px)] overflow-y-auto`}
    >
      <div className='flex justify-between items-center px-2 mt-4'>
        <h2 className='font-medium text-xl'>Detalles de: 
          {personajeSeleccionado.data && personajeSeleccionado.data.nombre}
        </h2>
        <span onClick={cerrarModal}>
          <XMarkIcon className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#e68f01]' />
        </span>
      </div>
      <figure className='flex justify-center items-center w-full mt-4'>
        {personajeSeleccionado.data &&
          <img
            className='w-36 h-56 rounded-lg'
            src={personajeSeleccionado.data.imagen}
            alt={personajeSeleccionado.data.nombre}
          />
        }
      </figure>
      <p className='flex flex-col p-6'>
        {personajeSeleccionado.data &&
          <>
            <span className='font-medium text-2xl mb-2'>Precio: ${personajeSeleccionado.data.precio}</span>
            <span className='font-light text-sm'>
              <span className='font-medium'>Descripción: </span>
              {personajeSeleccionado.data.descripcion}
            </span>
            <span className='font-light text-sm'>
            <span className='font-medium'>Genero: </span>
              {personajeSeleccionado.data.genero}
            </span>
            <span className='font-light text-sm'>
            <span className='font-medium'>Familia: </span>
              {personajeSeleccionado.data.afiliacion}
            </span>
            <span className='font-light text-sm'>
            <span className='font-medium'>Ki: </span>
              {personajeSeleccionado.data.ki}
            </span>
            <span className='font-light text-sm'>
            <span className='font-medium'>MaxKi: </span>
              {personajeSeleccionado.data.maxKi}
            </span>
          </>
        }
      </p>
    </aside>
  )
}

export default ModalDetalle
