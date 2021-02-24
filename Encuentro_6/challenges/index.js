import { personas } from './personas.js'
import listaPersonas from './mostrar.js'
import nombresMayuscula from './capitalizacion.js'
import { buscarRol, buscarPorId } from './buscar.js'
import filtrarPorSeccion from './filtrado.js'

/**
 * En este archivo deberás:
 *
 * 1. Mostrar los nombres de las personas en el archivo "personas.js"
 * a través de la función que creaste en "mostrar.js"
 *
 * 2. Crear un nuevo array con los nombres de las personas en "personas.js"
 * en mayúsculas.
 *
 * 3. Búscar la primera persona con el rol de "viewer" en la lista de "personas.js"
 *
 * 4. Crear un nuevo array con las personas pertenecientes al vip.
 */

  console.log('----------- Punto 1 ----------------')
  listaPersonas(personas)

  console.log('----------- Punto 2 ----------------')
  let nombreMayuscula = nombresMayuscula(personas)
  console.log(nombreMayuscula)


  console.log('----------- Punto 3 ----------------')
  console.log(buscarRol(personas))
  console.log(buscarPorId(personas, 4))

  console.log('----------- Punto 4 ----------------')
  console.log(filtrarPorSeccion(personas))