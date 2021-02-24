/**
 * Crea una función que reciba una lista de personas,
 * una propiedad y un valor, para retornar un nuevo array
 * de personas filtradas por esa propiedad y el valor
 */

 function filtrarPorSeccion (lista) {
  return lista.filter(function (value) {
    if (value.seccion === 'vip') {
      return true
    } else { 
      return false 
    }
  })
 }

 export default filtrarPorSeccion
