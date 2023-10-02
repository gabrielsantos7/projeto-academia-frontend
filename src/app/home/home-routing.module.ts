import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowDetailsComponent } from '../aluno/show-details/show-details.component';
import { ListAllComponent } from '../aluno/list-all/list-all.component';
import { UpdateComponent } from '../aluno/update/update.component';
import { CreateComponent } from '../aluno/create/create.component';

const routes: Routes = [
  { path: 'alunos', component: ListAllComponent },
  { path: 'alunos/create', component: CreateComponent },
  { path: 'alunos/:id', component: ShowDetailsComponent },
  { path: 'alunos/:id/edit', component: UpdateComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
