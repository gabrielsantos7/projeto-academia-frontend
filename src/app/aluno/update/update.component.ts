import Aluno from 'src/app/shared/models/Aluno.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  aluno: Aluno = {} as Aluno;

  tipoConteudoAtivo: 'aluno' | 'endereco' | 'avaliacoes' = 'aluno';
  tiposConteudo: [string, string, string] = ['aluno', 'endereco', 'avaliacoes'];
  isLoading: boolean = true;

  idAluno!: number;
  alunoForm: FormGroup;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        cep: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idAluno = Number(params.get('id'));
      this.aluno.id = this.idAluno;

      this.alunoService.getAlunoById(this.idAluno).subscribe({
        next: (data: Aluno) => {
          this.aluno = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erro ao carregar aluno:', error);
          this.isLoading = false;
        },
      });
    });
  }

  get f() {
    return this.alunoForm.controls;
  }

  changeTipoConteudo(tipo: 'aluno' | 'endereco' | 'avaliacoes') {
    this.tipoConteudoAtivo = tipo;
  }

  backHome() {
    this.router.navigateByUrl('/alunos');
  }

  showAlunoDetails() {
    this.router.navigateByUrl(`alunos/${this.aluno.id}`);
  }

  updateAluno() {
    this.aluno.nome = this.alunoForm.value.nome;
    this.aluno.dataNascimento = this.alunoForm.value.dataNascimento;
    this.aluno.endereco.rua = this.alunoForm.value.endereco.rua;
    this.aluno.endereco.numero = this.alunoForm.value.endereco.numero;
    this.aluno.endereco.bairro = this.alunoForm.value.endereco.bairro;
    this.aluno.endereco.cidade = this.alunoForm.value.endereco.cidade;
    this.aluno.endereco.estado = this.alunoForm.value.endereco.estado;
    this.aluno.endereco.cep = this.alunoForm.value.endereco.cep;
    this.alunoService.updateAluno(this.aluno).subscribe((res) => {
      console.log('Aluno atualizado com sucesso!');
      this.showAlunoDetails();
    });
  }
}
