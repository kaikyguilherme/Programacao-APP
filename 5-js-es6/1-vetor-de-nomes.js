//criando os nomes 

const listaNomes = ['kaiky' , 'pedro' , 'deivide' , 'felipe']

console.log('\n Exibindo todos os elementos do vetor: ')
console.log(listaNomes)

console.log('\n Exibindo o primeiro elemento do vetor: ')
console.log(listaNomes[0])

console.log('\n Adicionando um elemento no vetor: ')
listaNomes.push('Marilia')
console.log(listaNomes)

// -=-=--=-=-=--=--=-=-=-=-=-=

console.log('\n Adicionando MEU NOME no vetor: ')
listaNomes.push('Guilherme')
console.log(listaNomes)


console.log('\n Removendo o primeiro elemento no vetor: ')
listaNomes.shift()
console.log(listaNomes)

console.log('\n Removendo um elemento especifico no vetor: ')
//a partir do indice 2, remover apenas um elemento
listaNomes.splice(2,1)
console.log(listaNomes)

console.log('\n Removendo o ultimo elemento no vetor: ')
listaNomes.pop()
console.log(listaNomes)