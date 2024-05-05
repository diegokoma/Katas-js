// Ejercicio 23
// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
// const movies = [
//   { name: "Titan A.E.", durationInMinutes: 130 },
//   { name: "Nightmare before Christmas", durationInMinutes: 225 },
//   { name: "Inception", durationInMinutes: 165 },
//   { name: "The Lord of the Rings", durationInMinutes: 967 },
//   { name: "Star Wars: A New Hope", durationInMinutes: 214 },
//   { name: "Terminator", durationInMinutes: 140 },
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const peliculasCortas = []
const peliculasMedianas = []
const peliculasLargas = []
for (let i = 0; i < movies.length; i++) {
  const filter = movies[i]
  if (filter.durationInMinutes < 100) {
    peliculasCortas.push(filter.name)
  } else if (filter.durationInMinutes >= 100 && filter.durationInMinutes < 200) {
    peliculasMedianas.push(filter.name)
  } else {
    peliculasLargas.push(filter.name)
  }
}
console.log(`Peliculas cortas: ${peliculasCortas.join(', ')}`)
console.log(`Pelicula mediana: ${peliculasMedianas.join(', ')}`)
console.log(`Pelicula larga: ${peliculasLargas.join(', ')}`)
