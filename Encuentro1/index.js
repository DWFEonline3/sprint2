let decibelios = 1000

// Si es menor a 30 y mayor a 0, susurro
// Si es mayor o igual a 30, pero menor que 60, sonido normal
// Si es mayor o igual a 60, grito

if (decibelios < 30 && decibelios > 0) {
  console.log('Es un susurro')
} else if (decibelios >= 30 && decibelios < 60) {
  console.log('Sonido normal');
} else {
  console.log('Grito');
}

//Imprimir por consola el hermano mayor

let edadAlberto = 30;
let edadMarcos = 25;
let edadJoel = 27;

if (edadAlberto > edadMarcos && edadAlberto > edadJoel) {
  console.log('Alberto es el mayor');
} else if (edadJoel > edadAlberto && edadJoel > edadMarcos) {
  console.log('Joel es el mayor');
} else {
  console.log('Marcos es el mayor');
}