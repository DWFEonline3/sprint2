/**
 * Crea una función que reciba una lista de personas y un id (número)
 * como argumento, y que retorne el objeto de la persona que corresponda
 * con el id especificado
 */

 function buscarRol (lista) {
  return lista.find(function (value) {
    return value.rol === 'viewer'
  })
 }

 function buscarPorId (lista, id) {
  return lista.find(function (value) {
    return value.id === id
  })
 }

 export {
  buscarRol,
  buscarPorId
 }