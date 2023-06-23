class Disciplina {
  constructor(nome, cargaHoraria) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getCargaHoraria() {
    return this.cargaHoraria;
  }

  setCargaHoraria(cargaHoraria) {
    this.cargaHoraria = cargaHoraria;
  }
}

export { Disciplina };