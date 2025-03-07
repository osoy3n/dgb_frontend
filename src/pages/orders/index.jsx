import { useEffect, useContext } from 'react'
import { contexto, axiosInstance } from '../../context'
import Layout from '../../components/layout'
import TablaCompras from '../../components/table'

function OrdenesHechas() {
  const { personajesComprados, setPersonajesComprados } = useContext(contexto)

  useEffect(() => {
    axiosInstance.get('/lista_compras')
      .then(respuesta => setPersonajesComprados(respuesta.data))
  }, [setPersonajesComprados])

  const editar = (idCompra) => {
    console.log(idCompra)
  }

  const eliminar = (idCompra) => {
    console.log(idCompra)
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