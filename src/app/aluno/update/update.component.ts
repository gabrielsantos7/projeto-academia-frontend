import Aluno from 'src/app/shared/models/Aluno.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  aluno: Aluno = {
    id: 0,
    nome: '',
    telefone: '',
    dataNascimento: new Date(),
    endereco: {
      id: 0,
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    },
    avaliacoes: [],
  };

  tipoConteudoAtivo: 'aluno' | 'endereco' | 'avaliacoes' = 'aluno';
  tiposConteudo: [string, string, string] = ['aluno', 'endereco', 'avaliacoes'];
  isLoading: boolean = true;

  alunoId: number = 17;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idAluno = Number(params.get('id'));
      this.alunoId = idAluno;

      this.alunoService.getAlunoById(idAluno).subscribe({
        next: (aluno: Aluno) => {
          this.aluno = aluno;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erro ao carregar aluno:', error);
          this.isLoading = false;
        },
      });
    });
  }

  changeTipoConteudo(tipo: 'aluno' | 'endereco' | 'avaliacoes') {
    this.tipoConteudoAtivo = tipo;
  }

  backHome() {
    this.router.navigateByUrl('/alunos');
  }

  saveAluno() {
    this.alunoService.updateAluno(this.aluno);
    this.backHome();
  }
}
