import { Component, OnInit } from '@angular/core';
import Avaliacao from 'src/app/shared/models/Avaliacao';
import Endereco from 'src/app/shared/models/Endereco';
import { AlunoService } from '../aluno.service';
import Aluno from 'src/app/shared/models/Aluno';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  tipoConteudoAtivo: string = 'aluno';
  isLoading: boolean = true;
  alunoId: number = 0;
  aluno: Aluno = {
    id: 0,
    nome: '',
    telefone: '',
    dataNascimento: new Date(),
    endereco: {
      id: 0,
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    },
    avaliacoes: []
  };

  changeActive(tipo: string) {
    this.tipoConteudoAtivo = tipo;
  }

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const idAluno = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoId = idAluno;
    this.alunoService.getAlunoById(idAluno).subscribe({
      next: (aluno: Aluno) => {
        this.aluno = aluno;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar alunos:', error);
        this.isLoading = false;
      },
    });
  }

  backHome() {
    this.router.navigateByUrl('/alunos');
  }
}
