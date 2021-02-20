
let etiquetas = []
let numeros = [4, 5, 2, 6, 9, 10]

function agregarEtiquetas (indice) {
  etiquetas.push('etiquetas: ' + indice)
}

function recorrerArray (indice) {
  console.log(numeros[indice])
}

function iterar (n, ejecucionFuncion) {
  for (let i = 0; i < n; i++) {
    ejecucionFuncion(i)
  }
}

iterar(10, agregarEtiquetas)
iterar(numeros.length, recorrerArray)
console.log(etiquetas)

function sumar (x, y) {
 let suma = x + y
 console.log('La suma de ' + x + ' y ' + y + ' es: ' + suma)
}

function random (n) {
  let numRandom = Math.floor(Math.random() * n)
  return numRandom
}

sumar(40, random(300))
console.log(Math)

const personas = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Newton", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1800, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

// function nombrePersonas (value, index, array) {
//   console.log(value.first)
// }

// personas.forEach(nombrePersonas)

// personas.forEach(function (value) {
//   if (value.first === 'Isaac') {
//     console.log('Encontré a: ' + value.first)
//   }
// })

// 3. Utiliza .filter para crear un nuevo array de objetos
// donde cada objeto represente la persona que haya nacido durante el 1800

let nacidos1800 = personas.filter(function (value) {
  console.log(value)
  if (value.last === 'Newton') {
    return true
  } else {
    return false
  }
})

console.log(nacidos1800)

let personaPorApellido = personas.find(function (value) {
  return value.last === 'Newton'
})

console.log(personaPorApellido)