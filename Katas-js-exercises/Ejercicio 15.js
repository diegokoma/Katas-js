// Ejercicio 15
// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
// const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function showWordsWithTshirt(words) {
  let gotTshirt = []
  for (let i = 0; i < words.length; i++) {
    const myCurrentWord = words[i]
    if (myCurrentWord.includes('Camiseta')) {
      gotTshirt.push(myCurrentWord)
    }
  }
  return gotTshirt
}
console.log(showWordsWithTshirt(products))
