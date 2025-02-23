/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/solid'

function CardCheckout ({ id, nombre, imagen, precio, borrarCard }) {
  let renderXMarkIcon

  if (borrarCard) {
    renderXMarkIcon = <XMarkIcon onClick={() => borrarCard(id)} className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#e68f01]' />
  }

  return (
    <div className='flex justify-between items-center pb-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 overflow-hidden rounded-lg'>
          <img className='w-full h-auto object-cover object-top' src={imagen} alt={nombre} />
        </figure>
        <p className='text-sm font-light'>{nombre}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${precio}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default CardCheckout
