import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { contexto } from '../../context'
import Card from '../../components/card'
import Layout from '../../components/layout'
import ModalDetalle from '../../components/modal-detail'
import './styles.css'

function Home() {
  const { personajes, personajesFiltrados, buscar, buscarFamilia, setBuscar } = useContext(contexto)

  const mostrarCard = () => {
    const personajesParaMostrar = buscar || buscarFamilia
      ? personajesFiltrados
      : personajes

    if (personajesParaMostrar.length > 0) {
      return personajesParaMostrar.map(personaje => (
        <Card key={personaje.id} data={personaje} />
      ))
    } else {
      return (
        <p className='flex items-center justify-center text-amber-50'>
          No se encontraron resultados
        </p>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 my-2'>
        <h1 className='font-medium text-xl text-amber-50'>COLECCIÓN DE AKIRA TORIYAMA</h1>
      </div>

      <input
        id='buscar'
        name='buscar'
        value={buscar}
        onChange={(event) => setBuscar(event.target.value)}
        className='text-amber-50 rounded-lg border border-amber-50 w-80 p-2 mb-4'
        type='text'
        placeholder='Goku, Vegeta...'
      />

      <div className='grid grid-cols-4 gap-3 w-full max-w-screen-lg'>
        {mostrarCard()}
      </div>

      <ModalDetalle />

      <a id='back-top' href='#top'>
        <ChevronDoubleUpIcon className='h-6 w-6' />
      </a>
    </Layout>
  )
}

export default Home
