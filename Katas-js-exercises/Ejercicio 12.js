// Ejercicio 12
// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
// pista (cuando eliminamos algo de un array, su longitud se verá afectada)
// const duplicates = [
//   'sushi',
//   'pizza',
//   'burger',
//   'potatoe',
//   'pasta',
//   'ice-cream',
//   'pizza',
//   'chicken',
//   'onion rings',
//   'pasta',
//   'soda'
// ];
// function removeDuplicates(param) {
//   // insert code
// }
const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda']

function removeDuplicates(word) {
  let uniqueWords = []
  for (let i = 0; i < word.length; i++) {
    let currentWord = word[i]
    if (!uniqueWords.includes(currentWord)) {
      uniqueWords.push(currentWord)
    }
  }
  return uniqueWords.join(', ')
}

console.log(removeDuplicates(duplicates))
