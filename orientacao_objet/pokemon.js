class Pokemon {
    #nome;  // Propriedade privada
    #tipo;  // Propriedade privada

    constructor(nome, tipo) {
        this.#nome = nome;
        this.#tipo = tipo;
    }

    // Métodos públicos para acessar as propriedades privadas
    getNome() {
        return this.#nome;
    }

    getTipo() {
        return this.#tipo;
    }

    atacar(ataque) {
        console.log(`${this.#nome} atacou com ${ataque}`);
    }
}
//base ⬆
class PokemonEletrico extends Pokemon {
    #voltagem;

    constructor(nome, voltagem) {
        super(nome, 'elétrico');  // Chamando o construtor da classe base
        this.#voltagem = voltagem;  // Propriedade específica da classe derivada
    }

    // Método adicional específico para Pokémon elétrico
    soltarRaio() {
        console.log(`${this.getNome()} soltou um raio de ${this.#voltagem} volts!`);
    }
}
//classe derivada pokemon eletrico ⬆
// Criando um Pokémon genérico
const pikachu = new PokemonEletrico('Pikachu', 1000);
pikachu.atacar('Choque do Trovão');
pikachu.soltarRaio();

console.log(`Pokémon: ${pikachu.getNome()}, Tipo: ${pikachu.getTipo()}`);
//usando a classe ⬆