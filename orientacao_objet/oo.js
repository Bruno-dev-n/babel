// modo anterior  de criar objetos
function pokemon(nome,tipo){
    this.nome=nome;
    this.tipo=tipo;
}
const pikachu = new pokemon('pikachu', 'eletric')
console.log(pikachu)

// nova forma
class Pokemo{
    nome='';
    tipo='';
    constructor(nome,tipo){
        this.nome=nome;
        this.tipo=tipo;
    }

    atk(ataque) {
        console.log(`${this.nome} atacou você com ${ataque}`)
    }
}
const bombasauri = new Pokemo('bombasauro','grama');
bombasauri.atk('ataque basico');
console.log(bombasauri)