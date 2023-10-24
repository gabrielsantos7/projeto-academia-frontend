import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliacoesRoutingModule } from './avaliacoes-routing.module';
import { CreateAvaliacaoComponent } from './create-avaliacao/create-avaliacao.component';


@NgModule({
  declarations: [
    CreateAvaliacaoComponent
  ],
  imports: [
    CommonModule,
    AvaliacoesRoutingModule
  ],
  exports: [
    CreateAvaliacaoComponent
  ]
})
export class AvaliacoesModule { }
