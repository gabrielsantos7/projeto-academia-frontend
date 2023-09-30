import { Component } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  active: boolean = true;
  changeActive() {
    this.active =!this.active;
  }
}
