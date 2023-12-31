import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowDetailsComponent } from '../aluno/show-details/show-details.component';
import { ListAllComponent } from '../aluno/list-all/list-all.component';
import { UpdateComponent } from '../aluno/update/update.component';
import { CreateComponent } from '../aluno/create/create.component';
import { CreateAvaliacaoComponent } from '../avaliacoes/create-avaliacao/create-avaliacao.component';
import { ListAvaliacoesComponent } from '../avaliacoes/list-avaliacoes/list-avaliacoes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'alunos', component: ListAllComponent },
  { path: 'alunos/create', component: CreateComponent },
  { path: 'alunos/:id', component: ShowDetailsComponent },
  { path: 'alunos/:id/edit', component: UpdateComponent },
  { path: 'avaliacoes', component: ListAvaliacoesComponent },
  { path: 'avaliacoes/create', component: CreateAvaliacaoComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
