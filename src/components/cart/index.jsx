import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { contexto } from '../../context'

function CarritoCompra () {
  const {abrirCheckout, cerrarModal, comprasDelCarrito} = useContext(contexto)

  const abreCheckout = () => {
    abrirCheckout()
    cerrarModal()
  }

  return (
    <div className='relative flex gap-0.5 items-center' onClick={abreCheckout}>
      <ShoppingCartIcon className='h-8 w-8 text-[#e68f01] cursor-pointer' />
      <span className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
        {comprasDelCarrito.length}
      </span>
    </div>
  )
}

export default CarritoCompra
