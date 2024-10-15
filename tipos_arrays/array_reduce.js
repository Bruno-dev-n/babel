const nums = [10,20,30,60]
const soma = nums.reduce(function(acumular,itemAtual){
    acumular += itemAtual;
    return acumular;
},0)
console.log(soma);

let somacomFor = 0;
for( let i = 0; i < nums.length; i++){
    somacomFor += nums[i];
}
console.log(somacomFor);

/*const alunos = alunos2.reduce(function(acumular,itemAtual){
    acumular += ´${itemAtual.nome} ´;
    return acumular;
}, '')
console.log()*/