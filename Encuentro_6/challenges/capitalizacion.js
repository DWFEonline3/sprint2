/**
 * Crea una función que reciba una lista de personas y retorne
 * un nuevo array con los nombres de esas personas en mayúsculas.
 *
 * Revisa la documentación del método toUpperCase en
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */

function nombresMayuscula (lista) {
  return lista.map(function (value) {
    return value.nombre.toUpperCase()
  })
}

export default nombresMayuscula