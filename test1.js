// let fruta = ['maça', 'uva', 'banana']
// let retorno = fruta.forEach((FRUTA) => console.log(FRUTA.toUpperCase()))

let numeros = [1,2,3,4]
let par = numeros.filter((x) =>{
    if(x % 2 == 0)
        console.log(x)
})

let somaNumeros = numeros.reduce((soma,numeros) => soma += numeros)

console.log(somaNumeros)