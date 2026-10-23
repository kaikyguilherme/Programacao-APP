const usuarios = [
    {nome: 'kaiky', idade: 27},
    {nome: 'pedro', idade: 20},
    {nome: 'felipe', idade: 31},
    {nome: 'deivid', idade: 23}
]

console.log('\nExibindo todos os usuarios do vetor: ')
usuarios.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\n Filtrando usuarios com idade acima de 20 anos: ')
const maiorDeVINTE = usuarios.filter(u => u.idade >= 20);
maiorDeVINTE.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))


console.log('\n Exibindo apenas os nomes: ')
const nomes = usuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`${nome};`))

console.log('\n Encontrando um usuario: ')
const usuarioEncontrado = usuarios.find(u => u.nome === 'kaiky')
console.log(usuarioEncontrado)
console.log(`${usuarioEncontrado.nome} tem ${usuarioEncontrado.idade} anos.`)

console.log('\n Mostra a soma de todos as idades: ')
const somaIdades = usuarios.reduce((total, u) => total + u.idade, 0)
console.log(`total das idades: ${somaIdades}`)

