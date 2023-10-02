import { Component } from '@angular/core';
import Aluno from 'src/app/shared/models/Aluno';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
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
    avaliacoes: [],
  };

  tipoConteudoAtivo: 'aluno' | 'endereco' = 'aluno';
  tiposConteudo: [string, string] = ['aluno', 'endereco'];
  isLoading: boolean = true;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  changeTipoConteudo(tipo: 'aluno' | 'endereco') {
    this.tipoConteudoAtivo = tipo;
  }

  backHome() {
    this.router.navigateByUrl('/alunos');
  }
}
