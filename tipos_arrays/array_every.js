const alunos = [ 'willson', 'regina','maria','gustavo','julia', 'paula','wagner'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }

})
console.log(alunos2)
const paula = alunos2.find(function(item){
    return item.nome == 'paula'; //retonara true or false
})
console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome =='paulo' // true or false
})
console.log(indiceDaPaula)

// every
//primeiro adicionar aluno ma array
alunos2.push({
    nome:'lucio',
    curso:'backend'
})
// aluno adicionado
const todosFrontend = alunos2.every(function(item){
    return item.idade === 'frontend'
})
console.log(todosFrontend);


//every é usado para fazer validaçoes de idade
//validaçoes de transferencia bancaria

//agora o oposto de every
const alunosBackend = alunos2.some(function(item){
    return item.curso === 'backend'
})
console.log(alunosBackend);