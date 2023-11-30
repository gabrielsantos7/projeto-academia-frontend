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
import { Estado } from 'src/app/shared/models/Estado.model';
import { Cidade } from 'src/app/shared/models/Cidade.model';
import { IbgeService } from '../services/ibge.service';

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

  estados: Estado[] = [];
  cidades: Cidade[] = [];

  selectedEstado: string;
  selectedCidade: string;

  constructor(
    private alunoService: AlunoService,
    private ibgeService: IbgeService,
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

    this.selectedEstado = '';
    this.selectedCidade = '';
  }

  ngOnInit(): void {
    this.ibgeService.getEstados().subscribe((data: Estado[]) => {
      this.estados = data;
      this.estados.sort((a, b) => a.nome.localeCompare(b.nome));
    });

    this.route.paramMap.subscribe((params) => {
      this.idAluno = Number(params.get('id'));
      this.aluno.id = this.idAluno;

      this.alunoService.getAlunoById(this.idAluno).subscribe({
        next: (data: Aluno) => {
          this.aluno = data;
          this.isLoading = false;


          this.alunoForm.patchValue({
            nome: this.aluno.nome,
            telefone: this.aluno.telefone,
            dataNascimento: this.aluno.dataNascimento,
            endereco: {
              rua: this.aluno.endereco.rua,
              numero: this.aluno.endereco.numero,
              bairro: this.aluno.endereco.bairro,
              cep: this.aluno.endereco.cep,
              estado: this.aluno.endereco.estado,
              cidade: this.aluno.endereco.cidade
            }
          });

          this.onChangeEstado(this.aluno.endereco.estado);
        },
        error: (error) => {
          console.error('Erro ao carregar aluno:', error);
          this.isLoading = false;
        },
      });
    });
  }

  onChangeEstado(event: Event | string) {
    let uf: string;

    if (typeof event === 'string') {
      uf = event; // Se for uma string, atribui diretamente à variável uf
    } else {
      uf = (event.target as HTMLSelectElement)?.value; // Se for um evento, obtém o valor do target
    }

    // Realiza a lógica com base no valor de uf
    this.ibgeService.getCidadesByEstado(uf).subscribe((data: Cidade[]) => {
      this.cidades = data;

    });
  }


  getCidadeIdByName(cityName: string): number | null {
    const cidade = this.cidades.find(cidade => cidade.nome === cityName);
    return cidade ? cidade.id : null;
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
    const updatedAluno = {
      id: this.aluno.id,
      nome: this.alunoForm.value.nome,
      telefone: this.alunoForm.value.telefone,
      dataNascimento: this.alunoForm.value.dataNascimento,
      endereco: {
        rua: this.alunoForm.value.endereco.rua,
        numero: this.alunoForm.value.endereco.numero,
        bairro: this.alunoForm.value.endereco.bairro,
        cidade: this.alunoForm.value.endereco.cidade,
        estado: this.alunoForm.value.endereco.estado,
        cep: this.alunoForm.value.endereco.cep,
      }
      // Não inclua avaliações aqui, pois não estão sendo atualizadas
    };

    this.alunoService.updateAluno(updatedAluno).subscribe((res) => {
      this.showAlunoDetails();
    });
  }

}
