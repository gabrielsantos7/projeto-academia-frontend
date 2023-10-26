import { Component } from '@angular/core';
import Aluno from 'src/app/shared/models/Aluno.model';
import { AlunoService } from '../services/aluno.service';
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

  alertType: 'success' | 'danger' = 'success';
  canShowAlert: boolean = false;
  alertMessage: string = '';

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit() {
    this.alunoService.getAlunos().subscribe({
      next: (alunos: Aluno[]) => {
        this.alunos = alunos;
        this.isLoading = false;
      },
      error: (error) => {
        this.showAlert('danger', `Erro ao carregar alunos: ${error}`);
        this.isLoading = false;
      },
    });
  }

  viewDetails(idAluno: number) {
    this.router.navigate(['alunos', idAluno]);
  }

  editAluno(idAluno: number) {
    this.router.navigate(['alunos', idAluno, 'edit']);
  }

  createNewAluno() {
    this.router.navigate(['alunos', 'create']);
  }

  defineIdAlunoToDelete(idAluno: number) {
    this.idAlunoToDelete = idAluno;
  }

  changeAlunoDeleted(event: boolean) {
    this.alunoDeleted = event;
    this.showAlert('success', 'Registro removido com sucesso.');
    this.alunos = this.alunos.filter(
      (aluno) => aluno.id !== this.idAlunoToDelete
    );
  }

  showAlert(type: 'success' | 'danger', message: string): void {
    this.canShowAlert = true;
    this.alertType = type;
    this.alertMessage = message;
  }
}
