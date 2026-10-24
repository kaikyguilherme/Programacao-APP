//funcao que ira executar quando clicar no botao 
function gerarTabuada () {
    //pega o valor do campo input no html
    const numeroInput = document.getElementById('numero-input')
    //converte o texto q veio do html para numero inteiro
    let numero = parseInt(numeroInput.value)
    
    //pega o elemento onde a tabuada sera exibida no html
    const resultadoDiv = document.getElementById('resultado-aqui')
    
    //limpa o conteudo anterior no campo onde o resultado sera exibido
    resultadoDiv.innerHTML = ''
    
    //Adiciona o titulo a tabuada com tag h2
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`
    
    //Laço de repeticao para gerar tabuada de 1 ate 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

//pega o elemento onde a tabuada sera exibida no html e associa a uma constante
const btnGerar = document.getElementById('btn-gerar')
//faz a funcao gerarTabuada() ser executada quando clicar
btnGerar.addEventListener('click', gerarTabuada)

const numeroInput = document.getElementById('numero-input')
const body = document.body

numeroInput.addEventListener('input', () => {
    body.classList.remove('onca-passando')
    requestAnimationFrame(() => body.classList.add('onca-passando'))
})

body.addEventListener('animationend', (event) => {
    if (event.animationName === 'onca-cruzando') {
        body.classList.remove('onca-passando')
    }
})