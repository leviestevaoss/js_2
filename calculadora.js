let nome = document.querySelector('#nome')
let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let resposta = document.querySelector('resultado')


function calculoIMC() {

    let nomeUs = nome.value
    let pesoUs = Number(peso.value)
    let alturaUs = Number(altura.value)

    let imc = (pesoUs / alturaUs ** 2)

    resposta.innerHTML = `<p>${nomeUs}, seu IMC e de :${imc.toFixed(2)}<\p>`
}