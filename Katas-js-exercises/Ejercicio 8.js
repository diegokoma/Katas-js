/*
Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
} */
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']

function findLongestWord(word) {
  let longestWord = '' // Cambia LongestWord a longestWord, utilizando minúsculas para seguir las convenciones de nombres en JavaScript
  for (let i = 0; i < word.length; i++) {
    const currentWord = word[i]
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord
    }
  }
  return longestWord // Asegúrate de devolver el resultado fuera del bucle
}

console.log(findLongestWord(avengers))
