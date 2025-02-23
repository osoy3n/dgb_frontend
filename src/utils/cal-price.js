/**
 * Esta función calcula el precio total de un nuevo pedido
 * @param {Array} personajes Matriz de objetos
 * @returns {Number} Total precio
 */

export const totalPrecio = (personajes) => {
  let suma = 0

  personajes.forEach((personaje) => (suma += personaje.precio))

  return suma
}
