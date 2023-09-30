import { Component } from '@angular/core';
import Avaliacao from 'src/app/shared/models/Avaliacao';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  active: boolean = true;
  avaliacoes: Avaliacao[] = [
    {
      id: 1,
      data: new Date("2023-07-20"),
      peso: 80,
      altura: 1.70,
      medidas: [80, 60, 90],
      porcentagemGordura: 20,
      observacoes: "Avaliação inicial",
    },
    {
      id: 2,
      data: new Date("2023-08-03"),
      peso: 75,
      altura: 1.70,
      medidas: [75, 55, 85],
      porcentagemGordura: 15,
      observacoes: "Avaliação após 2 semanas",
    },
    {
      id: 3,
      data: new Date("2023-08-10"),
      peso: 70,
      altura: 1.70,
      medidas: [70, 50, 80],
      porcentagemGordura: 10,
      observacoes: "Avaliação após 4 semanas",
    },
  ];
  changeActive() {
    this.active =!this.active;
  }
}
