/*function somar(a,b){
    return a + b;
}*/
function somar(){
    let soma = 0;
    for (let i = 0; i < arguments.length; i++){
        soma += arguments [i];}
        return soma;
}
console.log(somar (10, 20))
//no arguments podese ser usado so length e ser iterado com o for


function somarCom_Rest(...numeros){
    const soma = numeros.reduce((total, numeroatual) =>{
        total+=numeroatual;
        return total;
    }, 0)
    return soma;
}
console.log(somarCom_Rest (10,20,30));
// rest aceita todos os argumentos
// restriçoes não pode usar a funçao 2 vezes
// ele tem que ser o ultimo argumento.
// usado para argumentar


// SPREAD
// usado para comcatenar
const numeros = [1,2,3,4,5]
console.log(...numeros)

const timesSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo' ];
const timeRio = ['vasco', 'botaFOGO', 'flamengo', 'flume'];

const times = timesSp.concat(timeRio);
console.log(times)

/* SPREAD*/
const timesDSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo' ];
const timeDRio = ['vasco', 'botaFOGO', 'flamengo', 'flume'];
const Alltime = [...timesDSp,...timeDRio];
console.log(Alltime)

// SPEAD OPERATION
const carroJulia={
    modelo:'gol',
    marca:'vw',
    motor: 1.6
}
const carAnna ={
    ...carroJulia, // esse é o operador.
    motor: 1.8
}
console.log(carAnna);

//Desestruturação
/*const motorCarAnna = carAnna.motor;*/
    modelo:''
const{motor: motorCarAnna} = carAnna;
// tem que da um apelido ao item que quer usar
console.log(motorCarAnna);
// Desestruturação de arrey
const [item1,item2,item3, ...outros] = timeDRio;
console.log(outros);
