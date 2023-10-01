import { Component } from '@angular/core';
import Aluno from 'src/app/shared/models/Aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss'],
})
export class ListAllComponent {
  alunos: Aluno[] = [];
  isLoading: boolean = true;
  alunoDeleted: boolean = false;
  idAlunoToDelete: number | null = null;

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit() {
    this.alunoService.getAlunos().subscribe({
      next: (alunos: Aluno[]) => {
        this.alunos = alunos;
        this.isLoading = false;
        console.log('Dados carregados');
      },
      error: (error) => {
        console.error('Erro ao carregar alunos:', error);
        this.isLoading = false;
      },
    });
  }

  viewDetails(idAluno: number) {
    this.router.navigate(['alunos', idAluno]);
  }

  defineIdAlunoToDelete(idAluno: number) {
    this.idAlunoToDelete = idAluno;
  }

  changeAlunoDeleted(event: boolean) {
    this.alunoDeleted = event;
    this.alunos = this.alunos.filter(aluno => aluno.id !== this.idAlunoToDelete);
  }

}
