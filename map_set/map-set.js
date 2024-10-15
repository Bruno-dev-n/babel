//Map
//Trata-se de um conjunto de dados chave-valor:
let meuMap = new Map();
meuMap.set("nome", "gian");
const nome = meuMap.get("nome");
//.get é para recupera o valor de item
meuMap.set("tecnologias", "html, css, Javascript");
console.log(meuMap)
//recupera a quantidade de itens dentro do Map.
console.log (meuMap.size)

// verificação existencial de uma chave dentro do map
console.log(meuMap.has("nome"))
meuMap.clear()
console.log(meuMap.size)

//set ele não repete itens duplicado

//ex: essa função vai ser muito usada
const nomes = ['gian','jose','bruno', 'gian', 'bruno', 'abreu']
const nomesComoSet = new Set([...nomes])
const nomesSemDuplicado = [...nomesComoSet]
console.log(nomesComoSet)
console.log(nomesSemDuplicado)
