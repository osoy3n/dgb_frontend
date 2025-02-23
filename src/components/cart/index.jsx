import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { contexto } from '../../context'

function CarritoCompra () {
  const {comprasDelCarrito} = useContext(contexto)

//   const openCheckout = () => {
//     openCheckoutSideMenu()
//     closeProductDetail()
//   }

  return (
    <div className='relative flex gap-0.5 items-center'>
      <ShoppingCartIcon className='h-8 w-8 text-[#e68f01] cursor-pointer' />
      <span className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
        {comprasDelCarrito.length}
      </span>
    </div>
  )
}

export default CarritoCompra
