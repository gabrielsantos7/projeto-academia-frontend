import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { FooterModule } from '../core/footer/footer.module';
import { HeaderModule } from '../core/header/header.module';
import { AlunoService } from '../aluno/aluno.service';
import { AlunoModule } from '../aluno/aluno.module';
import { HomeComponent } from './home/home.component';
import { AvaliacoesModule } from '../avaliacoes/avaliacoes.module';

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    AlunoModule,
    AvaliacoesModule
  ],
  providers: [
    AlunoService
  ]
})
export class HomeModule { }

