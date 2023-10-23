import { Component } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  alunoForm: FormGroup;
  tipoConteudoAtivo: 'aluno' | 'endereco' = 'aluno';
  tiposConteudo: [string, string] = ['aluno', 'endereco'];

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
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        cep: ['', Validators.required],
      }),
    });
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
      alert('Aluno salvo com sucesso!');
      this.backHome();
    });
  }
}
