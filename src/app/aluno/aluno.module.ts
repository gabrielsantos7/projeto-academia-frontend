import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoService } from './aluno.service';
import { ListAllComponent } from './list-all/list-all.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

@NgModule({
  declarations: [
    ListAllComponent,
    ShowDetailsComponent  // Inclua o componente aqui
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  providers: [AlunoService],
  exports: [
    ListAllComponent,
    ShowDetailsComponent
  ]
})
export class AlunoModule {}
