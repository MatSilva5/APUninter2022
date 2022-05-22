import { Component, OnInit } from '@angular/core';
import { model } from './models/model';
import { AlunosService } from './services/alunos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TrabalhoUNINTER';
  alunos: model[] = [];

  // Injeção de dependência do serviço para obtenção da lista de Alunos
  constructor(private service: AlunosService) {}

  // Atribui à variável alunos os valores retornados da função getAlunos do serviço injetado no construtor
  ngOnInit(): void {
    this.alunos = this.service.getAlunos();
    console.log(this.alunos);
  }

}
