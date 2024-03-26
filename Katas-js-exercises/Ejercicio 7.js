/*Completa la función que tomando dos números como argumento devuelva el más alto. 
function sum(numberOne , numberTwo) {
  // insert code
}*/
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberOne < numberTwo) {
    return numberTwo
  } else {
    return 'Los números son iguales'
  }
}
console.log(sum(8, 8))
