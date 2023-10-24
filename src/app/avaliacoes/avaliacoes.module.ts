import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliacoesRoutingModule } from './avaliacoes-routing.module';
import { CreateAvaliacaoComponent } from './create-avaliacao/create-avaliacao.component';
import { ListAvaliacoesComponent } from './list-avaliacoes/list-avaliacoes.component';
import { AvaliacaoService } from './avaliacao.service';


@NgModule({
  declarations: [
    CreateAvaliacaoComponent,
    ListAvaliacoesComponent
  ],
  imports: [
    CommonModule,
    AvaliacoesRoutingModule
  ],
  exports: [
    CreateAvaliacaoComponent,
    ListAvaliacoesComponent
  ],
  providers: [
    AvaliacaoService
  ]
})
export class AvaliacoesModule { }
