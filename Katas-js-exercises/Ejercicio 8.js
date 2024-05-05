/*
Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
} */
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']
function findLongestWord(word) {
  let longestWord = ''
  for (let i = 0; i < word.length; i++) {
    const myCurrentWord = word[i]
    if (myCurrentWord.length > longestWord.length) {
      longestWord = myCurrentWord
    }
  }
  return longestWord
}
console.log(findLongestWord(avengers))
