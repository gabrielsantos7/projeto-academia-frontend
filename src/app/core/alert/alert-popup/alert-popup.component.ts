import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent implements OnInit {
  @Input() type: 'success' | 'error' = 'success';
  @Input() strongMessage: string = '';
  @Input() message: string = '';
  @Input() duration: number = 5000;  // Tempo em milissegundos

  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Esconde o alerta após a duração especificada
    setTimeout(() => {
      this.visible = false;
    }, this.duration);
  }
}
