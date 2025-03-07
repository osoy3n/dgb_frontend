/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from 'axios'

import { createContext, useState, useEffect } from 'react'

export const contexto = createContext()

export const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

export function Proveedor ({ children }) {
  const [buscar, setBuscar] = useState('')
  const [buscarFamilia, setBuscarFamilia] = useState('')
  const [checkoutEstaAbierto, setCheckoutEstaAbierto] = useState(false)
  const [comprasDelCarrito, setComprasDelCarrito] = useState([])
  const [hayUsuarioAuth, setHayUsuarioAuth] = useState(false)
  const [modalEstaAbierto, setModalEstaAbierto] = useState(false)
  const [personajes, setPersonajes] = useState([])
  const [personajesComprados, setPersonajesComprados] = useState([])
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState({})
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])
  const [usuarios, setUsuarios] = useState([])

  const abrirModal = () => setModalEstaAbierto(true)
  const cerrarModal = () => setModalEstaAbierto(false)

  const abrirCheckout = () => setCheckoutEstaAbierto(true)
  const cerrarCheckout = () => setCheckoutEstaAbierto(false)

  useEffect(() => {
    axiosInstance.get('/personajes')
      .then(respuesta => setPersonajes(respuesta.data))
    
    axiosInstance.get('/usuarios')
      .then(respuesta => setUsuarios(respuesta.data))
  }, [])

  useEffect(() => {
    const sesionUsuario = localStorage.getItem('usuarioAuth')
    sesionUsuario ? setHayUsuarioAuth(true) : setHayUsuarioAuth(false)
  }, [setHayUsuarioAuth])

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
        checkoutEstaAbierto,
        comprasDelCarrito,
        hayUsuarioAuth,
        modalEstaAbierto,
        personajes,
        personajesComprados,
        personajeSeleccionado,
        personajesFiltrados,
        usuarios,
        abrirCheckout,
        abrirModal,
        cerrarCheckout,
        cerrarModal,
        setBuscar,
        setBuscarFamilia,
        setComprasDelCarrito,
        setHayUsuarioAuth,
        setPersonajes,
        setPersonajesComprados,
        setPersonajeSeleccionado,
        setPersonajesFiltrados
      }}
    >
      {children}
    </contexto.Provider>
  )
}

