/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react'
import { contexto, axiosInstance } from '../../context'
import Layout from '../../components/layout'
import TablaCompras from '../../components/table'
import { procesarOrdenes } from '../../utils/process-orders'

function OrdenesHechas() {
  const { personajesComprados, setPersonajesComprados } = useContext(contexto)

  useEffect(() => {
    cargarCompras()
  }, [])
    
  const cargarCompras = () => {
    axiosInstance.get('/lista_compras')
    .then(respuesta => setPersonajesComprados(respuesta.data))
  }

  const editar = (idCompra) => {
    console.log(idCompra)
  }

  const eliminar = async (idCompra, idOrden) => {
    try {
      await axiosInstance.delete(`/compras/${idCompra}`)

      const nuevasCompras = personajesComprados.filter(
        compra => compra.id_compra !== idCompra
      )

      setPersonajesComprados(nuevasCompras)

      const ordenesActualizadas = await procesarOrdenes(nuevasCompras)
      const ordenActualizada = ordenesActualizadas.find(
        orden => orden.id_orden === idOrden
      )

      if (!ordenActualizada) {
        await axiosInstance.delete(`/ordenes/${idOrden}`)
        return
      }

      const usuario = JSON.parse(localStorage.getItem('usuarioAuth'))
      await axiosInstance.patch(`/ordenes/${idOrden}`, {
        total_item: ordenActualizada.total_item,
        total_precio: ordenActualizada.total_precio,
        id_usuario: usuario.id
      })
      cargarCompras()
    } catch (error) {
      console.error('Error en la operación:', error)
      cargarCompras()
    }
  }

  return (
    <Layout>
      <div className='container max-h-auto p-4'>
        <TablaCompras
          data={personajesComprados}
          cuandoEdita={editar}
          cuandoElimina={eliminar}
        />
      </div>
    </Layout>
  )
}

export default OrdenesHechas