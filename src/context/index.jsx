/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'

export const contexto = createContext()

const URL = 'http://127.0.0.1:8000/personajes'

export function Proveedor ({ children }) {
  const [buscar, setBuscar] = useState('')
  const [buscarFamilia, setBuscarFamilia] = useState('')
  const [modalEstaAbierto, setModalEstaAbierto] = useState(false)
  const [personajes, setPersonajes] = useState([])
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState({})
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])

  const abrirModal = () => setModalEstaAbierto(true)
  const cerrarModal = () => setModalEstaAbierto(false)

  useEffect(() => {
    fetch(URL)
      .then(respuesta => respuesta.json())
      .then(data => setPersonajes(data))
  }, [])

  const filtrar = (tipoBusqueda, personajes, buscar, buscarFamilia) => {
    if (!tipoBusqueda) {
      return personajes
    }

    if (tipoBusqueda === 'NOMBRE') {
      return personajes.filter(personaje => personaje.nombre.toLowerCase().includes(buscar.toLowerCase()))
    }

    if (tipoBusqueda === 'FAMILIA') {
      return personajes.filter(personaje => personaje.afiliacion.toLowerCase().includes(buscarFamilia.toLowerCase()))
    }
    
    if (tipoBusqueda === 'NOMBRE_Y_FAMILIA') {
      return personajes.filter(personaje => personaje.afiliacion.toLowerCase().includes(buscarFamilia.toLowerCase())).filter(personaje => personaje.nombre.toLowerCase().includes(buscar.toLowerCase()))
    }
  }

  useEffect(() => {
    if (!buscar && !buscarFamilia) setPersonajesFiltrados(filtrar(null, personajes, buscar, buscarFamilia))
    if (buscar && !buscarFamilia) setPersonajesFiltrados(filtrar('NOMBRE', personajes, buscar, buscarFamilia))
    if (!buscar && buscarFamilia) setPersonajesFiltrados(filtrar('FAMILIA', personajes, buscar, buscarFamilia))
    if (buscar && buscarFamilia) setPersonajesFiltrados(filtrar('NOMBRE_Y_FAMILIA', personajes, buscar, buscarFamilia))
  }, [personajes, buscar, buscarFamilia])

  return (
    <contexto.Provider value={{
        buscar,
        buscarFamilia,
        modalEstaAbierto,
        personajes,
        personajeSeleccionado,
        personajesFiltrados,
        abrirModal,
        cerrarModal,
        setBuscar,
        setBuscarFamilia,
        setPersonajes,
        setPersonajeSeleccionado,
        setPersonajesFiltrados
      }}
    >
      {children}
    </contexto.Provider>
  )
}

