import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoService } from './aluno.service';
import { ListAllComponent } from './list-all/list-all.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { LoaderModule } from '../core/loader/loader.module';
import { ModalModule } from '../core/modal/modal.module';
import { AlertModule } from '../core/alert/alert.module';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    ListAllComponent,
    ShowDetailsComponent,
    UpdateComponent,
    CreateComponent  // Inclua o componente aqui
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunoRoutingModule,
    LoaderModule,
    ModalModule,
    AlertModule
  ],
  providers: [AlunoService],
  exports: [
    ListAllComponent,
    ShowDetailsComponent
  ]
})
export class AlunoModule {}
