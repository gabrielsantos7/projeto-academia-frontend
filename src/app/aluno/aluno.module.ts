import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoService } from './aluno.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  exports: [AlunoService],
})
export class AlunoModule { }
