import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoService } from './aluno.service';
import { AvaliacaoService } from './avaliacao.service';
import { ListAllComponent } from './list-all/list-all.component';

@NgModule({
  declarations: [
    ListAllComponent
  ],
  imports: [CommonModule, AlunoRoutingModule],
  exports: [
    ListAllComponent
  ],
  providers: [AlunoService, AvaliacaoService],
})
export class AlunoModule {}
