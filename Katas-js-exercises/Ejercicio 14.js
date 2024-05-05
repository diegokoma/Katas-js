// Ejercicio 14
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
// const counterWords = [
//   'code',
//   'repeat',
//   'eat',
//   'sleep',
//   'code',
//   'enjoy',
//   'sleep',
//   'code',
//   'enjoy',
//   'upgrade',
//   'code'
// ];
// function repeatCounter(param) {
//   // insert code
// }
const counterWords = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code']
function repeatCounter(words) {
  let wordList = {}
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i]
    if (wordList[currentWord]) {
      wordList[currentWord] += 1
    } else {
      wordList[currentWord] = 1
    }
  }
  return wordList
}
console.log(repeatCounter(counterWords))
