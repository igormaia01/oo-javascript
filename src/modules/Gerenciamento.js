import { Aluno } from "../classes/Aluno.js";
import { Professor } from "../classes/Professor.js";
import { Disciplina } from "../classes/Disciplina.js";
import { Turma } from "../classes/Turma.js";
import { alunosObject } from "../static/aluno.js";

// Criando professores
const professor1 = new Professor("Breno", "111.111.111-11", "123456");

// Criando alunos
const alunos = alunosObject.map((aluno) => {
  return new Aluno(aluno.nome, aluno.cpf, aluno.matricula);
});

// Criando uma disciplina
const disciplina1 = new Disciplina("Programação Orientada a Objetos", 64);

// Criando uma turma
const turma1 = new Turma("Turma 1", "2020.1", professor1, disciplina1);

// Adicionando alunos na turma
alunos.forEach((aluno) => {
  turma1.addAluno(aluno);
});

// Imprimindo a turma
console.log('imprimindo a turma');
console.log(turma1);
console.log('---------------------');

// Removendo um aluno da turma
turma1.removeAluno(alunos[0]);

// Imprimindo alunos
console.log('imprimindo alunos');
console.log(turma1.getAlunos());
console.log('---------------------');

// adicionando atividades
turma1.addAtividade('Atividade 1', 10);
turma1.addAtividade('Atividade 2', 10);

// imprimindo atividades
console.log('imprimindo atividades');
console.log(turma1.getAtividades());
console.log('---------------------');

// removendo atividades
turma1.removeAtividade(turma1.getAtividades()[0]);

// imprimindo turma
console.log('imprimindo a turma');
console.log(turma1);