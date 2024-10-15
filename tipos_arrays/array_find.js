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