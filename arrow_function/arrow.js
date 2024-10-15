// arrow funtcion como e criada
const minhafuncao = () => {
    console.log('assim que se faz uma arrowfuction')
}
minhafuncao ()

//modificacoes
const minhafuncao1 = () =>{
    return " modo mais inchuto";
}
console.log(minhafuncao1())

//versão direta

const retorna1caro =() =>(
    { modelo: 'ka',
        fabricante: 'ford'

    })
    console.log(retorna1caro())