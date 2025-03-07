export const procesarOrdenes = async (compras) => {
  const ordenesAgrupadas = compras.reduce((acumulador, compraActual) => {
    const idOrden = compraActual.id_orden
    const precioPersonaje = compraActual.personaje.precio

    if (acumulador[idOrden]) {
      acumulador[idOrden].total_item += 1
      acumulador[idOrden].total_precio += precioPersonaje
    } else {
      acumulador[idOrden] = {
        id_orden: idOrden,
        total_item: 1,
        total_precio: precioPersonaje
      }
    }

    return acumulador
  }, {})

  return Object.values(ordenesAgrupadas)
}