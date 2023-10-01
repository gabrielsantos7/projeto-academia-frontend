import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlunoService } from 'src/app/aluno/aluno.service';

@Component({
  selector: 'app-modal-aluno',
  templateUrl: './modal-aluno.component.html',
  styleUrls: ['./modal-aluno.component.scss'],
})
export class ModalAlunoComponent {
  @Input() idAlunoToDelete: number | null = null;
  @Output() alunoDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private alunoService: AlunoService) {}

  deleteAluno() {
    if (this.idAlunoToDelete !== null) {
      this.alunoService.deleteAluno(this.idAlunoToDelete).subscribe({
        next: () => {
          console.log('Aluno excluído com sucesso.');
          this.alunoDeleted.emit(true);
        },
        error: (error) => {
          console.error('Erro ao excluir aluno:', error);
        },
        // complete: () => {
        //   // Lógica a ser executada quando a operação é concluída (opcional)
        // }
      });
    }
  }
}
