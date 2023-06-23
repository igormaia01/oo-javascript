class Pessoa {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }

  setNome(nome){
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

  setCpf() {
    this.cpf = cpf;
  }

  getCpf() {
    return this.cpf;
  }
}

export { Pessoa };