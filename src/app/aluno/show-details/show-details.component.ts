import { Component, OnInit } from '@angular/core';
import Avaliacao from 'src/app/shared/models/Avaliacao';
import Endereco from 'src/app/shared/models/Endereco';
import { AlunoService } from '../aluno.service';
import Aluno from 'src/app/shared/models/Aluno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  active: boolean = true;
  isLoading: boolean = true;
  avaliacoes: Avaliacao[] = [];
  endereco: Endereco = {
    id: 0,
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  };

  changeActive() {
    this.active = !this.active;
  }

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idAluno = Number(this.route.snapshot.paramMap.get('id'));

    this.alunoService.getAlunoById(idAluno).subscribe({
      next: (aluno: Aluno) => {
        this.endereco = aluno.endereco;
        this.avaliacoes = aluno.avaliacoes;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar alunos:', error);
        this.isLoading = false;
      },
    });
  }
}
