// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)
// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
// function averageWord(param) {
//   // insert code
// }
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(word) {
  let wordsSum = 0
  let numsSum = 0
  for (let i = 0; i < word.length; i++) {
    let CurrentWord = word[i]
    if (typeof CurrentWord === 'string') {
      wordsSum += CurrentWord.length
    } else if (typeof CurrentWord !== 'string') {
      numsSum += CurrentWord
    }
  }
  return wordsSum + numsSum
}
console.log(averageWord(mixedElements))
