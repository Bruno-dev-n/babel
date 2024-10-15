class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    filtrarAprovados() {
        return this.alunos.filter(aluno => aluno.nota >= 6);
    }
}


const minhaTurma = new Turma();


minhaTurma.adicionarAluno(new Aluno('Ana', 8));
minhaTurma.adicionarAluno(new Aluno('Bruno', 5));
minhaTurma.adicionarAluno(new Aluno('Carlos', 6));
minhaTurma.adicionarAluno(new Aluno('Diana', 7));
minhaTurma.adicionarAluno(new Aluno('Eduardo', 4));

const alunosAprovados = minhaTurma.filtrarAprovados();
console.log(alunosAprovados);
