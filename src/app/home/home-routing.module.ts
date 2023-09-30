import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowDetailsComponent } from '../aluno/show-details/show-details.component';
import { ListAllComponent } from '../aluno/list-all/list-all.component';

const routes: Routes = [
  { path: 'alunos', component: ListAllComponent },
  { path: 'alunos/:id', component: ShowDetailsComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
