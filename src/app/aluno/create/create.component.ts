import { Component } from '@angular/core';
import Aluno from 'src/app/shared/models/Aluno';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  form!: FormGroup;

  tipoConteudoAtivo: 'aluno' | 'endereco' = 'aluno';
  tiposConteudo: [string, string] = ['aluno', 'endereco'];
  isLoading: boolean = true;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    telefone: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    logradouro: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    });

  }

  get f(){
    return this.form.controls;
  }

  changeTipoConteudo(tipo: 'aluno' | 'endereco') {
    this.tipoConteudoAtivo = tipo;
  }

  backHome() {
    this.router.navigateByUrl('/alunos');
  }

  submit(){
    console.log(this.form.value);
    this.alunoService.create(this.form.value).subscribe(res => {
         alert('Aluno salvo com sucesso!');
         this.backHome();
    })

  }
}
