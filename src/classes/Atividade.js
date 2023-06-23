class Atividade {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getNota() {
    return this.nota;
  }

  setNota(nota) {
    this.nota = nota;
  }
}

export { Atividade };