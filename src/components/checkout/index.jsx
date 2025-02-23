import { XMarkIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from '../../context'
import { totalPrecio } from '../../utils/cal-price'
import CardCheckout from '../../components/card-checkout'


function DetallesDelCheckout () {
  const {
    cerrarCheckout,
    checkoutEstaAbierto,
    comprasDelCarrito,
    orden,
    setBuscar,
    setBuscarFamilia,
    setComprasDelCarrito,
    setOrden,
    setPersonajesFiltrados
  } = useContext(contexto)

  const borrarCard = (id) => {
    const filtrar = comprasDelCarrito.filter(personaje => personaje.id !== id)
    setComprasDelCarrito(filtrar)
  }

  const hacerCheckout = () => {
    const date = new Date()

    const ordenAgregar = {
      date: date.toLocaleDateString(),
      products: comprasDelCarrito,
      totalProducts: comprasDelCarrito.length,
      totalPrecio: totalPrecio(comprasDelCarrito)
    }
    
    setOrden([...orden, ordenAgregar])
    setComprasDelCarrito([])
    cerrarCheckout()
    setPersonajesFiltrados([])
    setBuscar('')
    setBuscarFamilia('')
  }
  
  return (
    <aside
      className={`${checkoutEstaAbierto ? 'flex' : 'hidden'} flex-col fixed right-0 rounded-lg bg-gray-100/95 top-[55px] w-[360px] h-[calc(100vh-60px)] overflow-y-aut`}
    >
      <div className='flex justify-between items-center pl-2 pr-6 mt-2'>
        <h2 className='font-medium text-xl'>Mi Orden</h2>
        <span onClick={cerrarCheckout}>
          <XMarkIcon className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#e68f01]' />
        </span>
      </div>

      <div className='py-2 px-2 overflow-y-scroll flex-1'>
        {
          comprasDelCarrito.map(personaje => (
            <CardCheckout
              key={personaje.id}
              id={personaje.id}
              nombre={personaje.nombre}
              imagen={personaje.imagen}
              precio={personaje.precio}
              borrarCard={borrarCard}
            />
          ))
        }
      </div>

      <div className='pl-2 pr-6 mb-2'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium'>${totalPrecio(comprasDelCarrito)}</span>
        </p>
        <Link to='/orders/last'>
          <button className='bg-[#e68f01] text-white py-3 w-full rounded-lg' onClick={hacerCheckout}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default DetallesDelCheckout
