/**
 * 
 * @description Función que recibe 2 números como parametros y los suma
 * @param {*} num1 Valor 1
 * @param {*} num2 Valor 2
 */
function suma (num1, num2) {
  return num1 + num2
}

/**
 * 
 * @description Función que retorna la adición del 20% a los números sumados
 * @param {*} sumatoria Resultado de la suma de los dos números
 */
function agregarPorcentaje (sumatoria) {
  return sumatoria + (sumatoria * 0.2)
}

/**
 * 
 * @description Función que retorna el número dividido entre 3
 * @param {*} sumatoria Resultado de la suma de los dos números con el 20% adicionado
 */
function division (sumatoria) {
  return sumatoria / 3
}

let num1 = 50
let num2 = 30
let sumarNumeros = suma(num1, num2)
let porcentajeSumatoria = agregarPorcentaje(sumarNumeros)
let resultado = division(porcentajeSumatoria)

console.log('Los números a sumar son: ' + num1 + ' y ' + num2)
console.log('La suma de los números es: ' + sumarNumeros)
console.log('El 20% de adición del número: ' + sumarNumeros + ' es: ' + porcentajeSumatoria)
console.log('El número dividido 3 es: ' + resultado)