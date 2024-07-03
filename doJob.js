let colaborador = [
    {
        nome : 'Levi',
        cargo : 'Caixa',
        salario : 2000,
        gratificacao : 50,
        idade : 20,
    },

    {
        nome : 'Russinho',
        cargo : 'Gerente',
        salario : 3500,
        gratificacao : 50,
        idade : 32,
    },

    {
        nome : 'Russ',
        cargo: 'Serviço Gerais',
        salario : 2500,
        gratificacao : 50,
        idade : 25,
    },

    {
        nome : 'Julio',
        cargo : 'Segurança',
        salario : 2500,
        gratificacao : 50,
        idade : 27
    },
        
    {
        nome : 'Natan',
        cargo : 'Motorista',
        salario : 3000,
        gratificacao : 150,
        idade : 30,
    }
]

colaborador.forEach((item) => console.log(`${item.nome} Seu Salario : ${item.gratificacao + item.salario}`))

let valorGrat = colaborador.map((item) =>{
     return item.gratificacao
})

console.log(valorGrat)

let valorDobro = valorGrat.map((item) => item * 2)

let salarioCol = colaborador.filter((item) =>{
    if(item.salario > 2500){
        return item
    }
})


let idadeCol = colaborador.filter((item) =>{
    if(item.idade > 25){
        console.log(`Nome Do Colaborador ${item.nome},idade :${item.idade}`)
    }
})

let totaGrat = colaborador.reduce((total, colaborador) =>{
    total += colaborador.gratificacao
    return total
})