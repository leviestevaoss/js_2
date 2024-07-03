let alunos = [
    {
        nome: 'Levi',
        nota: 8
    },
    {
        nome: 'Russ',
        nota: 5
    },
    {
        nome: 'Russinho',
        nota: 3
    },
    {
        nome: 'Jul',
        nota: 8
    }
]

let notas = alunos.filter((item) =>{
   if(item.nota >= 7){
    return item.nome
   }
})

let alunosAprovados = notas.map((note) => note.nota)
console.log(alunosAprovados)

