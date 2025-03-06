import axios from 'axios'

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../context'
import { totalPrecio } from '../../utils/cal-price'
import Card from '../../components/card'
import Layout from '../../components/layout'

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: false
})

function OrdenDeCompra() {
  const {
    comprasDelCarrito,
    cerrarCheckout,
    setBuscar,
    setBuscarFamilia,
    setComprasDelCarrito,
    setPersonajesFiltrados
  } = useContext(contexto)

  const hacerCheckout = async () => {
    const usuario = JSON.parse(localStorage.getItem('usuarioAuth'))

    const ordenGuardada = await axiosInstance.post('/ordenes', {
      total_item: comprasDelCarrito.length,
      total_precio: totalPrecio(comprasDelCarrito),
      id_usuario: usuario.id
    })

    comprasDelCarrito.map(async (compra) => {
      await axiosInstance.post('/compras', {
        id_orden: ordenGuardada.data.id,
        id_personaje: compra.id
      })
    })

    cerrarCheckout()
    setBuscar('')
    setBuscarFamilia('')
    setComprasDelCarrito([])
    setPersonajesFiltrados([])
  }

  const mostrarCard = () => {
    if (comprasDelCarrito.length > 0) {
      return comprasDelCarrito.map(personaje => (
        <Card key={personaje.id} data={personaje} />
      ))
    } else {
      return (
        <p className='flex items-center justify-center text-amber-50'>
          No hay personajes para comprar
        </p>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 my-2'>
        <h3 className='font-medium text-xl text-amber-50 mb-4'>Lista de personajes en el carrito</h3>
      </div>

      <div className='grid grid-cols-4 gap-3 w-full max-w-screen-lg'>
        {mostrarCard()}
      </div>

      <Link to={'/compras'}>
        <button
          onClick={hacerCheckout}
          className='bg-[#e68f01] text-white py-3 mt-6 w-96 rounded-lg cursor-pointer'
        >
          Comprar
        </button>
      </Link>
    </Layout>
  )
}

export default OrdenDeCompra
