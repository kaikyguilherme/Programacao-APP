const listaAlunos = [
    { nome: 'Ana', nota: 5.0},
    { nome: 'Bruno', nota: 10.0},
    { nome: 'Maria', nota: 2.0},
    { nome: 'Marta', nota: 7.0},
    { nome: 'Cecilia', nota: 6.0}
]

console.log('\nMostre todos os alunos, seus nomes e suas notas: ')
listaAlunos.forEach(u => console.log(`${u.nome} media ${u.nota}`))

console.log('\nMostre a media geral da turma: ')
const Media = listaAlunos.reduce((total, u) => total + u.nota /5, 0)
console.log(Media)

console.log('\nMostre o nome e nota dos alunos com nota abaixo de 7.0: ')
const abaixode7 = listaAlunos.filter(u => u.nota < 7.0);
abaixode7.forEach(u => console.log(`${u.nome} esta com media ${u.nota} abaixo de 7 é recuperacao`))

console.log('\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0: ')
const maiorque7 = listaAlunos.filter(u => u.nota >= 7.0);
maiorque7.forEach(u => console.log(`${u.nome} esta com media ${u.nota} acima de 7 é APROVADO!!`))

console.log('\nMostre o nome e a nota do aluno Bruno: ')
const alunoEncontrado = listaAlunos.find(u => u.nome === 'Bruno')
console.log(`${alunoEncontrado.nome} media ${alunoEncontrado.nota} `)

console.log('\nsome todas as notas: ')
const soma = listaAlunos.reduce((total, u) => total + u.nota, 0)

console.log('\nListe todos os nomes doas alunos sem mostrar suas notas: ')
listaAlunos.forEach(u => console.log(`${u.nome}`))