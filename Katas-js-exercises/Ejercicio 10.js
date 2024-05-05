// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
// const numbers = [12, 21, 38, 5, 45, 37, 6];
// function average(param) {
//   // insert code
// }
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(promedio) {
  let media = 0
  for (let i = 0; i < numbers.length; i++) {
    media += numbers[i]
  }
  return media / numbers.length
}
console.log(average(numbers))
