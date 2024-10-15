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

//some
const alunosBackendEfront = alunos2.some(function(item){
    return item.curso === 'backend' && item.curso ==="frontend"
    // && * é como se fosse um "if"
    //pode usar tambem return item.curso === 'backend'
    //para verificar se so tem do backend
})
console.log(alunosBackendEfront);
const alunosBackend = alunos2.filter(function(item){
    return item.curso === 'backend'
})
/* outra maneira de fazer e criando uma função ex:

function filtroBackend(aluno){
return aluno.curso === 'backend';}

const alunosBackend = alunos2.filter(filtroBackend)
console.log(alunosBackend)
*/

console.log(alunosBackend)