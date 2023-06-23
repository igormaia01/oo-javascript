import { Atividade } from './Atividade.js';
 
// Define uma classe chamada Turma
class Turma {
  // Função construtora que recebe quatro parâmetros: nome, periodo, professor e disciplina
  constructor(nome, periodo, professor, disciplina) {
    // Define as propriedades da classe com os valores dos parâmetros
    this.nome = nome;
    this.periodo = periodo;
    this.professor = professor;
    this.disciplina = disciplina;
    // Cria um array vazio para armazenar os alunos da turma
    this.alunos = [];
    this.atividades = [];
  }

  // Função getter para a propriedade nome
  getNome() {
    return this.nome;
  }

  // Função setter para a propriedade nome
  setNome(nome) {
    this.nome = nome;
  }

  // Função getter para a propriedade periodo
  getPeriodo() {
    return this.periodo;
  }

  // Função setter para a propriedade periodo
  setPeriodo(periodo) {
    this.periodo = periodo;
  }

  // Função getter para a propriedade professor
  getProfessor() {
    return this.professor;
  }

  // Função setter para a propriedade professor
  setProfessor(professor) {
    this.professor = professor;
  }

  // Função getter para a propriedade disciplina
  getDisciplina() {
    return this.disciplina;
  }

  // Função setter para a propriedade disciplina
  setDisciplina(disciplina) {
    this.disciplina = disciplina;
  }

  // Função getter para a propriedade alunos
  getAlunos() {
    return this.alunos;
  }

  // Função para adicionar um aluno à turma
  addAluno(aluno) {
    this.alunos.push(aluno);
  }

  // Função para remover um aluno da turma
  removeAluno(aluno) {
    // Encontra o índice do aluno no array
    const index = this.alunos.indexOf(aluno);
    // Se o aluno for encontrado, remove-o do array
    if (index > -1) {
      this.alunos.splice(index, 1);
    }
  }

  addAtividade(nome, nota) {
    this.atividades.push(new Atividade(nome, nota));
  }

  removeAtividade(atividade) {
    const index = this.atividades.indexOf(atividade);
    if (index > -1) {
      this.atividades.splice(index, 1);
    }
  }

  getAtividades() {
    return this.atividades;
  }
}

// Exporta a classe Turma para que possa ser usada em outros arquivos
export { Turma };