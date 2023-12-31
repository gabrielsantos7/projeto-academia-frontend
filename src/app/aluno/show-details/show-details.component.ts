import { Component, OnInit } from '@angular/core';
import Endereco from 'src/app/shared/models/Endereco.model';
import { AlunoService } from '../services/aluno.service';
import Aluno from 'src/app/shared/models/Aluno.model';
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
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    },
    avaliacoes: [],
  };

  enderecoFormatado: string[] = [];

  changeActive(tipo: string) {
    this.tipoConteudoAtivo = tipo;
  }

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const idAluno = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoId = idAluno;
    this.alunoService.getAlunoById(idAluno).subscribe({
      next: (aluno: Aluno) => {
        this.aluno = aluno;
        this.isLoading = false;
        this.formatarEndereco();
      },
      error: (error) => {
        console.error('Erro ao carregar alunos:', error);
        this.isLoading = false;
      },
    });
  }

  formatarEndereco() {
    const endereco = this.aluno.endereco;
    this.enderecoFormatado.push(`${endereco.rua}, ${endereco.numero}.`);
    this.enderecoFormatado.push(
      `${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}.`
    );
    this.enderecoFormatado.push(`CEP: ${endereco.cep}`);
  }

  backHome() {
    this.router.navigateByUrl('/alunos');
  }

  editInfo() {
    this.router.navigateByUrl(`alunos/${this.aluno.id}/edit`);
  }
}
