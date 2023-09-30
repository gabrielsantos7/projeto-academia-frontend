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
  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit() {
    this.alunoService.getAlunos().subscribe({
      next: (alunos: Aluno[]) => {
        this.alunos = alunos;
        this.isLoading = false;
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
}
