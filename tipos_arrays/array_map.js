const alunos = [ 'willson', 'regina','maria','gustavo','julia', 'paula','wagner'];
//para armasenar e usar a função⬇
const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }

})
console.log(alunos2)

const numeros = [1,2,3,4,5,6,7,8,9];
const vezes2 = numeros.map(function(numeroAtual){
    return numeroAtual * 2;
})
console.log(vezes2)