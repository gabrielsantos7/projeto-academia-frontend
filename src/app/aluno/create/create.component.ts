import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/shared/models/Estado.model';
import { Cidade } from 'src/app/shared/models/Cidade.model';
import { IbgeService } from '../services/ibge.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  alunoForm: FormGroup;
  tipoConteudoAtivo: 'aluno' | 'endereco' = 'aluno';
  tiposConteudo: [string, string] = ['aluno', 'endereco'];

  estados: Estado[] = [];
  cidades: Cidade[] = [];

  selectedEstado: string;
  selectedCidade: string;

  alertType: 'success' | 'danger' = 'success';
  canShowAlert: boolean = false;
  alertMessage: string = '';

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
    this.canShowAlert = false;
  }

  ngOnInit() {
    this.ibgeService.getEstados().subscribe((data: Estado[]) => {
      this.estados = data;
      this.estados.sort((a, b) => a.nome.localeCompare(b.nome));
    });
  }

  onChangeEstado(event: Event) {
    const uf = (event.target as HTMLSelectElement)?.value;
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

  changeTipoConteudo(tipo: 'aluno' | 'endereco') {
    this.tipoConteudoAtivo = tipo;
  }

  backHome() {
    this.router.navigateByUrl('/alunos');
  }

  submit() {
    console.log(this.alunoForm.value);
    this.alunoService.create(this.alunoForm.value).subscribe((res) => {
      this.showAlert('success', 'Aluno salvo com sucesso!');
      this.backHome();
    });
  }

  showAlert(type: 'success' | 'danger', message: string): void {
    this.canShowAlert = true;
    this.alertType = type;
    this.alertMessage = message;
  }
}
