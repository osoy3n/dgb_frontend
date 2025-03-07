/* eslint-disable react/prop-types */

const TablaCompras = ({ data, cuandoEdita, cuandoElimina }) => {
  const editar = (idCompra) => {
    cuandoEdita(idCompra)
  }

  const eliminar = (idCompra, idOrden) => {
    if (window.confirm('¿Estás seguro de eliminar esta compra?')) {
      cuandoElimina(idCompra, idOrden)
    }
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Imagen</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Personaje</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Ki</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Orden</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((compra) => (
            <tr key={compra.id_compra} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <img 
                  src={compra.personaje.imagen} 
                  alt={compra.personaje.nombre} 
                  className="h-14 w-14 border border-gray-300 rounded-full object-cover object-top"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">{compra.personaje.nombre}</div>
                <div className="text-gray-600 text-sm">{compra.personaje.afiliacion}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-600">{compra.personaje.ki}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  ${compra.personaje.precio.toLocaleString()}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">No.: {compra.id_orden}</div>
                <div className="text-sm text-gray-600">Items: {compra.orden.total_item}</div>
                <div className="text-sm text-gray-600">Total: ${compra.orden.total_precio.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => editar(compra.id_compra)}
                  className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminar(compra.id_compra, compra.id_orden)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaCompras