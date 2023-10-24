import { Component } from '@angular/core';
import { AvaliacaoService } from '../avaliacao.service';
import Avaliacao from 'src/app/shared/models/Avaliacao';

@Component({
  selector: 'app-list-avaliacoes',
  templateUrl: './list-avaliacoes.component.html',
  styleUrls: ['./list-avaliacoes.component.scss']
})
export class ListAvaliacoesComponent {
  avaliacoes: Avaliacao[] = [];
  constructor(private avaliacaoService: AvaliacaoService){}

  ngOnInit() {
    this.avaliacaoService.getAvaliacoes().subscribe({
      next: (avaliacoes: Avaliacao[]) => {
        this.avaliacoes = avaliacoes;
      },
      error: (error) => {
      console.log(error);
      },
    });
  }
}
