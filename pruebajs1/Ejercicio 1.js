let frutas = ['pomelo', 'pera', 'manzana', 'naranja', 'mandarina']

let frutasLength = []

for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i]
  for (let j = 0; j <= fruta.length; j++) {
    frutasLength[i] = j
  }
}

const alumns = [
  {
    name: 'Paula',
    approved: true
  },
  {
    name: 'Alejandro',
    approved: false
  },
  {
    name: 'David',
    approved: true
  },
  {
    name: 'Rocío',
    approved: true
  }
]
let allApproved = true

for (let i = 0; i < alumns.length; i++) {
  if (alumns[i].approved !== true) {
    allApproved = false
  }
}

console.log(allApproved)
