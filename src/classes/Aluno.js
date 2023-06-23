import { Pessoa } from './Pessoa.js';

class Aluno extends Pessoa {
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
    }

    getMatricula() {
        return this.matricula;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
    }
}

export { Aluno };
const aluno = new Aluno('João', '111.111.111-11', '123456');