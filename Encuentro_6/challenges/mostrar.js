/**
 * Crea una función que reciba una lista de personas y muestre
 * por consolas sus nombres.
 */

 function listaPersonas (lista) {
  lista.forEach(function (value) {
    console.log(value.nombre)
  });
 }

 export default listaPersonas