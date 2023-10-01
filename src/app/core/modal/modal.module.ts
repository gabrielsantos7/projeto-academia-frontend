import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlunoComponent } from './modal-aluno/modal-aluno.component';

@NgModule({
  declarations: [
    ModalAlunoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalAlunoComponent
  ]
})
export class ModalModule { }
