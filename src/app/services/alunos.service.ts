import { Injectable } from '@angular/core';
import { model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: model[] = [
    {
      nome: "Matheus Azevedo Silva",
      ru: 1503112,
      nomeCurso: "Análise e Desenvolvimento de Sistemas",
      dataAniversario: "15/04/1996"
    },
    {
      nome: "Arthur Morghan",
      ru: 3497503,
      nomeCurso: "Engenharia Civil",
      dataAniversario: "04/01/1990"
    },
    {
      nome: "John Micah",
      ru: 7485960,
      nomeCurso: "Medicina",
      dataAniversario: "14/02/1989"
    },
    {
      nome: "Mary Beth",
      ru: 1462878,
      nomeCurso: "Engenharia de Alimentos",
      dataAniversario: "31/12/1992"
    },
    {
      nome: "Elizabeth Houston",
      ru: 9384760,
      nomeCurso: "Ciência da Computação",
      dataAniversario: "19/09/2000"
    },
    {
      nome: "Marcus Vinicius",
      ru: 4598762,
      nomeCurso: "Análise e Desenvolvimento de Sistemas",
      dataAniversario: "17/07/1995"
    }
  ]

  // Retorna a lista de alunos quando chamado
  getAlunos() {
    return this.alunos;
  }
}
