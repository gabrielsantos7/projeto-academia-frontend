import { Component } from '@angular/core';
import { AlunoService } from 'src/app/aluno/aluno.service';
import Aluno from 'src/app/shared/models/Aluno';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {
  }

  ngOnInit() {
    this.alunoService.getAlunos().subscribe((data: Aluno[]) => {
      this.alunos = data;
      this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    });
  }
}

