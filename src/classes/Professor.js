import { Pessoa } from './Pessoa.js';

class Professor extends Pessoa {
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

export { Professor };
